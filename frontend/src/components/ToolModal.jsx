import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, ExternalLink, Github, Globe } from 'lucide-react';

const ToolModal = ({ category, isOpen, onClose }) => {
  const modalRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    if (isOpen) {
      // Animate modal in
      gsap.set(modalRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(overlayRef.current, { opacity: 0 });
      
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(modalRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });
    
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const getIconForTool = (tool) => {
    if (tool.github) return <Github size={16} />;
    if (tool.website) return <Globe size={16} />;
    return <ExternalLink size={16} />;
  };

  const handleToolClick = (tool) => {
    const url = tool.website || tool.github || '#';
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[80vh] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${category.color}20, #1a1a1a)`
        }}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: category.color }}
              >
                {category.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                <p className="text-gray-400">{category.description}</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-200 cursor-pointer group border border-gray-700"
                onClick={() => handleToolClick(tool)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {tool.logo && (
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-6 h-6 rounded"
                      />
                    )}
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                  {getIconForTool(tool)}
                </div>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {tool.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
                    {tool.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    {tool.website ? 'Website' : 'GitHub'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 bg-gray-800/30">
          <div className="text-center text-sm text-gray-400">
            <p>Total Tools: {category.tools.length} | Category: {category.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolModal;