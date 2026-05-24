/**
 * Generates public/og.png (1200x630) from an SVG template.
 * Run: node scripts/generate-og.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { Resvg } from '@resvg/resvg-js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '..');

const fontRegular = readFileSync(join(__dir, 'fonts', 'JetBrainsMono-Regular.ttf'));
const fontBold = readFileSync(join(__dir, 'fonts', 'JetBrainsMono-Bold.ttf'));

// Hex logo paths (scaled to fit a ~80px hex at cx=100, cy=315)
// Outer: flat-top hex radius 40, inner: 70% = 28
function hexPoints(cx, cy, r, flat = false) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i + (flat ? 0 : Math.PI / 6);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(' ');
}

const cx = 100, cy = 315;
const outerPts = hexPoints(cx, cy, 40);
const innerPts = hexPoints(cx, cy, 28);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face {
        font-family: 'JBMono';
        src: url('data:font/truetype;base64,REGULAR_B64');
        font-weight: 400;
      }
      @font-face {
        font-family: 'JBMono';
        src: url('data:font/truetype;base64,BOLD_B64');
        font-weight: 700;
      }
    </style>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0a0a0a"/>

  <!-- Subtle grid lines -->
  <line x1="0" y1="1" x2="1200" y2="1" stroke="#ffffff" stroke-width="0.5" opacity="0.06"/>
  <line x1="0" y1="629" x2="1200" y2="629" stroke="#ffffff" stroke-width="0.5" opacity="0.06"/>
  <line x1="1" y1="0" x2="1" y2="630" stroke="#ffffff" stroke-width="0.5" opacity="0.06"/>
  <line x1="1199" y1="0" x2="1199" y2="630" stroke="#ffffff" stroke-width="0.5" opacity="0.06"/>

  <!-- Accent top bar -->
  <rect x="0" y="0" width="1200" height="3" fill="#d743a8"/>

  <!-- Hex logo mark -->
  <polygon points="${outerPts}" fill="none" stroke="#ffffff" stroke-width="2"/>
  <polygon points="${innerPts}" fill="#d743a8"/>

  <!-- Brand name -->
  <text x="152" y="302" font-family="JBMono" font-weight="700" font-size="52" fill="#ffffff" letter-spacing="4">WILDERTON</text>
  <text x="152" y="350" font-family="JBMono" font-weight="400" font-size="28" fill="#d743a8" letter-spacing="2">/ Advisory</text>

  <!-- Divider -->
  <rect x="60" y="400" width="540" height="1" fill="#ffffff" opacity="0.12"/>

  <!-- Tagline -->
  <text x="60" y="440" font-family="JBMono" font-weight="400" font-size="20" fill="#ffffff" opacity="0.55" letter-spacing="1">Strategic IT Advisory · Quebec, Canada</text>

  <!-- Right side decorative hex grid (subtle) -->
  <g opacity="0.06" stroke="#ffffff" stroke-width="0.8" fill="none">
    ${generateHexGrid(780, 80, 420, 470, 30)}
  </g>

  <!-- Bottom right tag -->
  <text x="1140" y="610" font-family="JBMono" font-weight="400" font-size="13" fill="#ffffff" opacity="0.25" text-anchor="end" letter-spacing="1">wilderton-advisory.com</text>
</svg>`;

function generateHexGrid(startX, startY, width, height, size) {
  const w = Math.sqrt(3) * size;
  const h = size * 1.5;
  const lines = [];
  for (let row = 0; row * h < height + size; row++) {
    for (let col = 0; col * w < width + w; col++) {
      const cx = startX + col * w + (row % 2 ? w / 2 : 0);
      const cy = startY + row * h;
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i + Math.PI / 6;
        pts.push(`${(cx + size * Math.cos(a)).toFixed(1)},${(cy + size * Math.sin(a)).toFixed(1)}`);
      }
      lines.push(`<polygon points="${pts.join(' ')}"/>`);
    }
  }
  return lines.join('\n    ');
}

// Embed fonts
const svgWithFonts = svg
  .replace('REGULAR_B64', fontRegular.toString('base64'))
  .replace('BOLD_B64', fontBold.toString('base64'));

const resvg = new Resvg(svgWithFonts, {
  fitTo: { mode: 'width', value: 1200 },
});
const png = resvg.render().asPng();

const outPath = join(root, 'public', 'og.png');
writeFileSync(outPath, png);
console.log(`Written: ${outPath} (${Math.round(png.length / 1024)}kb)`);
