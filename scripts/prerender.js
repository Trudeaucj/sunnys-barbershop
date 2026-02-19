/**
 * Prerender script - renders the SPA at build time using Puppeteer
 * so the production HTML contains fully rendered content for search engines.
 *
 * Usage: node scripts/prerender.js
 * Run after `vite build` to inject rendered HTML into dist/index.html
 */

import { createServer } from 'http';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, join, extname } from 'path';
import { launch } from 'puppeteer';

const DIST_DIR = resolve('dist');
const INDEX_PATH = join(DIST_DIR, 'index.html');

// Simple static file server for the dist directory
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
      if (!existsSync(filePath)) {
        filePath = INDEX_PATH; // SPA fallback
      }
      const ext = extname(filePath);
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      try {
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function prerender() {
  const PORT = 4173;
  console.log('Starting local server...');
  const server = await startServer(PORT);

  console.log('Launching browser...');
  const browser = await launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  console.log('Rendering page...');
  await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for React to render
  await page.waitForSelector('.hero__title', { timeout: 10000 });

  // Get the rendered HTML inside #root
  const renderedContent = await page.evaluate(() => {
    return document.getElementById('root').innerHTML;
  });

  await browser.close();
  server.close();

  // Read the original index.html and inject rendered content
  const originalHtml = readFileSync(INDEX_PATH, 'utf-8');
  const prerenderedHtml = originalHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedContent}</div>`
  );

  writeFileSync(INDEX_PATH, prerenderedHtml, 'utf-8');
  console.log(`Prerendered HTML written to ${INDEX_PATH}`);
  console.log(`Content size: ${renderedContent.length} characters injected into #root`);
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
