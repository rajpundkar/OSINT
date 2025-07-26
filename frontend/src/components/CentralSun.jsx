import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere, Ring } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

const CentralSun = ({ currentTime }) => {
  const sunRef = useRef();
  const glowRef = useRef();
  const timeRef = useRef();

  useEffect(() => {
    // Pulsating glow animation
    if (glowRef.current) {
      gsap.to(glowRef.current.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }
  }, []);

  useFrame((state) => {
    // Rotate the sun
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
    }
    
    // Subtle floating animation for time display
    if (timeRef.current) {
      timeRef.current.position.y = 6 + Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const timeString = currentTime.toFormat('HH:mm:ss');
  const dateString = currentTime.toFormat('dd LLL yyyy');
  const istLabel = "IST (भारतीय मानक समय)";

  return (
    <group>
      {/* Main Sun - Larger */}
      <Sphere ref={sunRef} args={[1.8, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FF6B35"
          emissive="#FF4500"
          emissiveIntensity={0.6}
        />
      </Sphere>
      
      {/* Glow effect - Larger */}
      <Sphere ref={glowRef} args={[2.2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#FF6B35"
          transparent
          opacity={0.4}
        />
      </Sphere>
      
      {/* Brahma Lotus Flower - Center of Sun */}
      <Text
        position={[0, 0, 0]}
        fontSize={1.5}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.1}
        outlineColor="#FF4500"
      >
        🪷
      </Text>
      
      {/* Time Display - Even Larger */}
      <group ref={timeRef} position={[0, 6, 0]}>
        <Text
          position={[0, 0, 0]}
          fontSize={2.0}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.1}
          outlineColor="#000000"
        >
          {timeString}
        </Text>
        <Text
          position={[0, -1.5, 0]}
          fontSize={1.2}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.06}
          outlineColor="#000000"
        >
          {dateString} - {istLabel}
        </Text>
      </group>
      
      {/* Inner rings for visual effect - Adjusted for larger sun */}
      <Ring args={[3, 3.15, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#FF6B35" transparent opacity={0.4} />
      </Ring>
      <Ring args={[3.8, 3.95, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#FF4500" transparent opacity={0.3} />
      </Ring>
    </group>
  );
};

export default CentralSun;