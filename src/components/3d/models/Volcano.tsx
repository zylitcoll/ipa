import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const Volcano = () => {
  const group = useRef<THREE.Group>(null);
  const magmaRef = useRef<THREE.Mesh>(null);
  const [erupting, setErupting] = useState(false);
  const particlesRef = useRef<THREE.Points>(null);
  
  // Handle volcano eruption
  const triggerEruption = () => {
    setErupting(true);
    setTimeout(() => setErupting(false), 5000);
  };
  
  // Animation for lava flow and particles
  useFrame((state, delta) => {
    // Magma pulsing animation
    if (magmaRef.current) {
      magmaRef.current.position.y = -1.5 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      
      // Make magma glow brighter during eruption
      if (erupting) {
        const material = magmaRef.current.material as THREE.MeshStandardMaterial;
        material.emissiveIntensity = 1 + Math.sin(state.clock.getElapsedTime() * 3) * 0.3;
      }
    }
    
    // Particle animation during eruption
    if (particlesRef.current && erupting) {
      particlesRef.current.visible = true;
      const positions = (particlesRef.current.geometry as THREE.BufferGeometry).attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);
        
        // Move particles upward
        positions.setY(i, y + delta * (2 + Math.random() * 3));
        
        // Add some random horizontal movement
        positions.setX(i, x + delta * (Math.random() - 0.5));
        positions.setZ(i, z + delta * (Math.random() - 0.5));
        
        // Reset particles that go too high
        if (y > 10) {
          positions.setY(i, 0);
          positions.setX(i, (Math.random() - 0.5) * 0.5);
          positions.setZ(i, (Math.random() - 0.5) * 0.5);
        }
      }
      
      positions.needsUpdate = true;
    } else if (particlesRef.current) {
      particlesRef.current.visible = false;
    }
  });
  
  // Create volcano particles for eruption
  const createParticles = () => {
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 0.5;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    return (
      <points ref={particlesRef} visible={false}>
        <bufferGeometry attach="geometry" {...geometry} />
        <pointsMaterial
          attach="material"
          size={0.2}
          color="#FF5A00"
          transparent
          opacity={0.8}
        />
      </points>
    );
  };
  
  return (
    <group ref={group}>
      {/* Volcano base */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} onClick={triggerEruption}>
        <coneGeometry args={[5, 5, 32, 1, false]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      {/* Volcano crater */}
      <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[1, 1, 32, 1, false, Math.PI / 6]} />
        <meshStandardMaterial color="#A52A2A" />
      </mesh>
      
      {/* Magma chamber */}
      <mesh ref={magmaRef} position={[0, -1.5, 0]}>
        <sphereGeometry args={[1.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#FF4500"
          emissive="#FF8C00"
          emissiveIntensity={0.5}
          roughness={0.7}
          metalness={0}
        />
      </mesh>
      
      {/* Magma vent */}
      <mesh position={[0, -0.5, 0]} rotation={[Math.PI, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.8, 2, 32]} />
        <meshStandardMaterial
          color="#FF4500"
          emissive="#FF8C00"
          emissiveIntensity={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Lava particles for eruption */}
      {createParticles()}
      
      {/* Ground */}
      <mesh position={[0, -4.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Interactive label */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        backgroundColor="#00000080"
        padding={0.2}
      >
        Click the volcano to trigger eruption
      </Text>
    </group>
  );
};