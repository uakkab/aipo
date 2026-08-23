import fs from 'node:fs';
import path from 'node:path';
import {JSDOM} from 'jsdom';
import {NodeHtmlMarkdown} from 'node-html-markdown';

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const siteRoot = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(siteRoot, '..');
const docsRoot = path.resolve(siteRoot, 'docs');

const routeMap = {
  'index.html': '/docs/intro',
  'prerequisites.html': '/docs/foundation/prerequisites',
  'framework.html': '/docs/playbook/framework',
  'details.html': '/docs/implementation/guide',
  'workflow.html': '/docs/implementation/guide',
  'maturity.html': '/docs/playbook/maturity-model',
  'approaches.html': '/docs/playbook/approaches',
  'resources.html': '/docs/reference/resources',
  'checklist.html': '/docs/reference/foundation-check',
  'checklist_eval.html': '/docs/reference/readiness-assessment',
  'domain-01.html': '/docs/reference/domain-01',
};

const targets = [
  ['index.html', 'intro.mdx'],
  ['prerequisites.html', 'foundation/prerequisites.md'],
  ['framework.html', 'playbook/framework.md'],
  ['details.html', 'implementation/guide.md'],
  ['workflow.html', 'implementation/guide.md'],
  ['maturity.html', 'playbook/maturity-model.md'],
  ['approaches.html', 'playbook/approaches.md'],
  ['resources.html', 'reference/resources.md'],
  ['checklist.html', 'reference/foundation-check.md'],
  ['checklist_eval.html', 'reference/readiness-assessment.md'],
  ['domain-01.html', 'reference/domain-01.md'],
];

const nhm = new NodeHtmlMarkdown({
  bulletMarker: '-',
  codeFence: '```',
  headingStyle: 'atx',
  useLinkReferenceDefinitions: false,
});

function titleFromFile(fileName) {
  const t = fileName.replace('.html', '').replace(/[-_]/g, ' ').trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function cleanDom(root) {
  const removeSelectors = [
    'script',
    'style',
    'nav.page-section-jump',
    '.step-controls',
    '.view-switcher',
    '.site-header',
    '.site-sidebar',
    '.site-nav-mobile',
  ];
  removeSelectors.forEach((sel) => {
    root.querySelectorAll(sel).forEach((n) => n.remove());
  });

  root.querySelectorAll('[onclick],[onchange],[oninput]').forEach((n) => {
    n.removeAttribute('onclick');
    n.removeAttribute('onchange');
    n.removeAttribute('oninput');
  });

  root.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (routeMap[href]) {
      a.setAttribute('href', routeMap[href]);
      return;
    }
    if (href.endsWith('.html')) {
      a.setAttribute('href', '#');
    }
  });
}

function convertOne(srcFile, dstFile) {
  const srcPath = path.join(repoRoot, srcFile);
  const dstPath = path.join(docsRoot, dstFile);

  const raw = fs.readFileSync(srcPath, 'utf8');
  const dom = new JSDOM(raw);
  const doc = dom.window.document;
  const mount = doc.querySelector('#aipo-content') || doc.body;
  cleanDom(mount);

  const titleTag = (doc.querySelector('title')?.textContent || '').trim();
  const title = titleTag || titleFromFile(srcFile);

  let md = nhm.translate(mount.innerHTML);
  md = md
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\s+$/gm, '')
    .trim();

  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    '---',
    '',
  ].join('\n');

  fs.mkdirSync(path.dirname(dstPath), {recursive: true});
  fs.writeFileSync(dstPath, frontmatter + md + '\n', 'utf8');

  console.log('converted', srcFile, '->', path.relative(siteRoot, dstPath));
  return dstPath;
}

const written = targets.map(([src, dst]) => convertOne(src, dst));
console.log('Converted files:');
written.forEach((f) => console.log('-', path.relative(siteRoot, f)));
