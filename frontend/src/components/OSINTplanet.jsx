import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Sphere, Ring } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

const OSINTplanet = ({ category, orbitRadius, orbitSpeed, onClick }) => {
  const planetRef = useRef();
  const orbitRef = useRef();
  const labelRef = useRef();

  const angle = useRef(Math.random() * Math.PI * 2);

  useEffect(() => {
    // Hover animation setup
    if (planetRef.current) {
      planetRef.current.userData.originalScale = planetRef.current.scale.clone();
    }
  }, []);

  useFrame((state) => {
    // Orbit animation
    angle.current += orbitSpeed * 0.005;
    
    if (orbitRef.current) {
      orbitRef.current.position.x = Math.cos(angle.current) * orbitRadius;
      orbitRef.current.position.z = Math.sin(angle.current) * orbitRadius;
    }
    
    // Planet rotation
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.003;
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    console.log(`Clicked on ${category.name} planet!`);
    onClick(category);
    
    // Click animation
    if (planetRef.current) {
      gsap.to(planetRef.current.scale, {
        x: 1.3,
        y: 1.3,
        z: 1.3,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    }
  };

  const handlePointerEnter = () => {
    if (planetRef.current) {
      gsap.to(planetRef.current.scale, {
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  const handlePointerLeave = () => {
    if (planetRef.current) {
      gsap.to(planetRef.current.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  return (
    <group>
      {/* Orbit ring - Much more prominent and visible */}
      <Ring args={[orbitRadius, orbitRadius + 0.15, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#FFFFFF" transparent opacity={1.0} />
      </Ring>
      
      {/* Additional inner orbit ring for better visibility */}
      <Ring args={[orbitRadius - 0.05, orbitRadius + 0.05, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#FFD700" transparent opacity={0.6} />
      </Ring>
      
      {/* Planet group */}
      <group ref={orbitRef}>
        <Sphere
          ref={planetRef}
          args={[0.5, 16, 16]}
          onClick={handleClick}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <meshStandardMaterial
            color={category.color}
            emissive={category.color}
            emissiveIntensity={0.4}
          />
        </Sphere>
        
        {/* Planet label - Much larger */}
        <Text
          ref={labelRef}
          position={[0, 1.0, 0]}
          fontSize={0.4}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          onClick={handleClick}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          outlineWidth={0.04}
          outlineColor="#000000"
        >
          {category.icon} {category.name}
        </Text>
      </group>
    </group>
  );
};

export default OSINTplanet;