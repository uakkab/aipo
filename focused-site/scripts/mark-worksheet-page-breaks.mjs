import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../static/worksheets');

for (const file of ['foundation-readiness-check.html', 'readiness-assessment.html']) {
  const p = path.join(dir, file);
  const html = fs.readFileSync(p, 'utf8');
  const marker = '<section class="section">';
  const parts = html.split(marker);
  const keepTogether = file.includes('foundation') ? 2 : 1;
  let out = parts[0];
  for (let i = 1; i < parts.length; i++) {
    const cls = i <= keepTogether ? 'section' : 'section page-start';
    out += `<section class="${cls}">${parts[i]}`;
  }
  out = out.replaceAll('Print / Save as PDF', 'Print worksheet');
  fs.writeFileSync(p, out);
  console.log(`${file}: ${parts.length - 1} sections, page-start from #${keepTogether + 1}`);
}
