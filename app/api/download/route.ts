import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import JSZip from 'jszip';

const PROJECT_ROOT = join(process.cwd());

const IGNORE_DIRS = new Set([
  'node_modules', '.next', '.git', '.bolt', 'dist', 'build',
]);

const IGNORE_FILES = new Set([
  'package-lock.json', '.env', '.DS_Store', '.boltignore',
]);

function getAllFiles(dir: string, base: string = ''): string[] {
  const results: string[] = [];
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const relPath = base ? `${base}/${entry}` : entry;
      try {
        const stat = statSync(fullPath);
        if (stat.isDirectory()) {
          if (!IGNORE_DIRS.has(entry)) {
            results.push(...getAllFiles(fullPath, relPath));
          }
        } else {
          if (!IGNORE_FILES.has(entry)) {
            results.push(relPath);
          }
        }
      } catch {
        // skip
      }
    }
  } catch {
    // skip
  }
  return results;
}

function getFileContents() {
  const files = getAllFiles(PROJECT_ROOT);
  return files.map((relPath) => {
    const fullPath = join(PROJECT_ROOT, relPath);
    try {
      const content = readFileSync(fullPath, 'utf-8');
      return { path: relPath, content };
    } catch {
      return null;
    }
  }).filter(Boolean) as { path: string; content: string }[];
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const format = url.searchParams.get('format');

  const fileContents = getFileContents();

  // Return ZIP file
  if (format === 'zip') {
    const zip = new JSZip();
    const folder = zip.folder('quick-rubbish-removal');
    if (folder) {
      for (const file of fileContents) {
        folder.file(file.path, file.content);
      }
    }
    const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

    return new NextResponse(new Uint8Array(zipBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="quick-rubbish-removal.zip"',
        'Content-Length': String(zipBuffer.length),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  }

  // Return JSON for the browse UI
  return NextResponse.json(fileContents);
}
