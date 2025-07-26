import React from 'react';

const LoadingFallback = ({ error }) => {
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">⚠️ 3D Loading Error</h2>
          <p className="text-gray-300 mb-4">Failed to load 3D visualization</p>
          <p className="text-sm text-gray-500">{error.message}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold mb-2">🌌 Loading Brahmāstra</h2>
        <p className="text-gray-300">Initializing 3D solar system...</p>
      </div>
    </div>
  );
};

export default LoadingFallback;