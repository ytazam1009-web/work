export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Under Maintenance
        </h1>

        <p className="text-gray-500 text-sm sm:text-base mb-6">
          This page is currently unavailable.
        </p>

        <a
          href="/"
          className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl"
        >
          Back to Site
        </a>
      </div>
    </div>
  );
}