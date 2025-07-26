import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black">
          <div className="text-center text-white max-w-2xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-4">🚫 Brahmāstra Error</h2>
            <p className="text-gray-300 mb-6">
              The 3D visualization encountered an error. This might be due to WebGL compatibility issues.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-4 mb-6 text-left">
              <h3 className="text-lg font-semibold mb-2">Error Details:</h3>
              <p className="text-red-400 text-sm font-mono">
                {this.state.error && this.state.error.toString()}
              </p>
              {this.state.errorInfo && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-blue-400">Stack Trace</summary>
                  <pre className="text-xs text-gray-400 mt-2 overflow-auto max-h-32">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => window.location.reload()}
                className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                🔄 Reload Application
              </button>
              
              <p className="text-sm text-gray-400">
                If the problem persists, your browser might not support WebGL or Three.js
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;