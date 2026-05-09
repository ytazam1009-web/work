'use client';

import { useState, useEffect } from 'react';
import {
  Download,
  Copy,
  CircleCheck as CheckCircle,
  FileCode,
  FolderOpen,
  ArrowLeft,
  Search,
  Loader,
  FileArchive
} from 'lucide-react';

interface ProjectFile {
  path: string;
  content: string;
}

export default function DownloadPage() {
  const [files, setFiles] = useState<ProjectFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [expandedFile, setExpandedFile] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);

  // ✅ FIXED USEEFFECT (no duplicate code, safe fetch)
  useEffect(() => {
    const loadFiles = async () => {
      try {
        setLoading(true);
        setError('');

        const res = await fetch('/api/download');

        if (!res.ok) throw new Error('API failed');

        const data = await res.json();

        if (Array.isArray(data)) {
          setFiles(data);
        } else {
          throw new Error('Invalid response');
        }
      } catch {
        setError('Failed to load project files. Make sure the dev server is running.');
      } finally {
        setLoading(false);
      }
    };

    loadFiles();
  }, []);

  const copyToClipboard = async (content: string, path: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedFile(path);
      setTimeout(() => setCopiedFile(null), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = content;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedFile(path);
      setTimeout(() => setCopiedFile(null), 2000);
    }
  };

  const copyAllFiles = async () => {
    const allContent = files
      .map((f) => `// ===== FILE: ${f.path} =====\n${f.content}`)
      .join('\n\n');

    try {
      await navigator.clipboard.writeText(allContent);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = allContent;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  const filteredFiles = files.filter((f) =>
    f.path.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Header */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-medium mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </a>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Download Project Files
          </h1>

          <p className="text-gray-500 text-sm sm:text-base">
            Get the complete project source code.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader className="w-8 h-8 text-green-600 animate-spin" />
            <span className="ml-3 text-gray-500">Loading project files...</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-red-700 text-sm">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Download ZIP */}
            <div className="mb-6 bg-white rounded-2xl border-2 border-green-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileArchive className="w-5 h-5 text-green-600" />
                <h2 className="text-lg font-bold">Download ZIP</h2>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                Downloads full project as a ZIP file.
              </p>

              <a
                href="/api/download?format=zip"
                download="project.zip"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl"
              >
                <Download className="w-4 h-4" />
                Download ZIP
              </a>
            </div>

            {/* Copy All */}
            <div className="mb-6 bg-white rounded-xl border p-6">
              <button
                onClick={copyAllFiles}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl"
              >
                {copiedAll ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                {copiedAll ? 'Copied!' : 'Copy All Files'}
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search files..."
                className="w-full pl-10 pr-4 py-2 border rounded-xl"
              />
            </div>

            {/* File List */}
            <div className="space-y-2">
              {filteredFiles.map((file) => (
                <div key={file.path} className="bg-white border rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-mono">{file.path}</span>

                    <button
                      onClick={() => copyToClipboard(file.content, file.path)}
                      className="text-sm text-gray-500 hover:text-green-600"
                    >
                      <Copy className="w-4 h-4 inline" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}