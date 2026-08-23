/**
 * Generate fixed US Letter PDFs from worksheet HTML.
 * Layout is locked to Letter via @page + Puppeteer format: 'letter'.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const worksheetsDir = path.resolve(__dirname, '../static/worksheets');

const jobs = [
  'foundation-readiness-check.html',
  'readiness-assessment.html',
];

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-pdf-header-footer'],
  });

  try {
    for (const htmlName of jobs) {
      const htmlPath = path.join(worksheetsDir, htmlName);
      const pdfPath = htmlPath.replace(/\.html$/i, '.pdf');
      const page = await browser.newPage();
      await page.goto(pathToFileURL(htmlPath).href, {
        waitUntil: 'networkidle0',
      });
      await page.emulateMediaType('print');
      await page.pdf({
        path: pdfPath,
        format: 'Letter',
        printBackground: true,
        preferCSSPageSize: true,
        margin: {
          top: '0.6in',
          right: '0.6in',
          bottom: '0.6in',
          left: '0.6in',
        },
      });
      await page.close();
      const sizeKb = Math.round(fs.statSync(pdfPath).size / 1024);
      console.log(`Wrote ${path.basename(pdfPath)} (${sizeKb} KB)`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
