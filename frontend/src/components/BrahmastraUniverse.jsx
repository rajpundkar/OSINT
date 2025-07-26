import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Sphere, Ring } from '@react-three/drei';
import { gsap } from 'gsap';
import { DateTime } from 'luxon';
import CentralSun from './CentralSun';
import OSINTplanet from './OSINTplanet';
import QuoteSystem from './QuoteSystem';
import ToolModal from './ToolModal';
import { mockCategories } from '../data/mockData';

const BrahmastraUniverse = () => {
  const [currentTime, setCurrentTime] = useState(DateTime.now().setZone('Asia/Kolkata'));
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(DateTime.now().setZone('Asia/Kolkata'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePlanetClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-black overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 25], fov: 75 }}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a1a');
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[0, 0, 0]} intensity={1} color="#FFD700" />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          
          {/* Background stars */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* Central Brahmāstra Sun */}
          <CentralSun currentTime={currentTime} />
          
          {/* Orbiting OSINT Category Planets */}
          {mockCategories.map((category, index) => (
            <OSINTplanet
              key={category.id}
              category={category}
              orbitRadius={5 + index * 2}
              orbitSpeed={0.05 + index * 0.01}
              onClick={() => handlePlanetClick(category)}
            />
          ))}
          
          {/* Quote System */}
          <QuoteSystem />
          
          {/* Controls */}
          <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true}
            zoomSpeed={0.5}
            rotateSpeed={0.5}
            maxDistance={50}
            minDistance={5}
          />
        </Suspense>
      </Canvas>
      
      {/* Tool Modal */}
      {isModalOpen && selectedCategory && (
        <ToolModal
          category={selectedCategory}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      
      {/* Top-left Brahmāstra Title */}
      <div className="absolute top-6 left-6 z-10">
        <h1 className="text-4xl font-bold text-orange-400 flex items-center gap-3">
          <span className="text-5xl">🪷</span>
          <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            Brahmāstra
          </span>
        </h1>
        <p className="text-gray-300 mt-2 text-sm">
          Open Source Intelligence Framework
        </p>
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4 text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <span className="text-sm opacity-75">v1.0 Beta</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/rajpundkar" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://github.com/S3lc0uth" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://github.com/Gr1ffend0r" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <span className="text-sm opacity-75">
              🇮🇳 Open Knowledge for National Security
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrahmastraUniverse;