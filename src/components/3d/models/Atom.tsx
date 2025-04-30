import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export const Atom = () => {
  const group = useRef<THREE.Group>(null);
  const electronsRef = useRef<THREE.Group[]>([]);
  
  // Initialize electron refs array
  if (electronsRef.current.length === 0) {
    for (let i = 0; i < 3; i++) {
      electronsRef.current.push(React.createRef<THREE.Group>());
    }
  }
  
  // Orbital details
  const orbitals = [
    { radius: 2, speed: 0.5, angle: 0, color: '#FF5555' },
    { radius: 2, speed: 0.5, angle: Math.PI * 2/3, color: '#55FF55' },
    { radius: 2, speed: 0.5, angle: Math.PI * 4/3, color: '#5555FF' }
  ];
  
  // Animation for electrons orbiting
  useFrame((state) => {
    if (group.current) {
      // Rotate the whole atom model slowly
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      
      // Animate electrons around orbits
      for (let i = 0; i < electronsRef.current.length; i++) {
        const electronGroup = electronsRef.current[i];
        if (electronGroup.current) {
          const time = state.clock.getElapsedTime() * orbitals[i].speed;
          const orbital = orbitals[i];
          
          // Orbital path animation in 3D
          electronGroup.current.position.x = Math.sin(time + orbital.angle) * orbital.radius;
          electronGroup.current.position.z = Math.cos(time + orbital.angle) * orbital.radius;
          electronGroup.current.position.y = Math.sin(time * 0.5) * orbital.radius * 0.5;
        }
      }
    }
  });
  
  return (
    <group ref={group}>
      {/* Nucleus */}
      <group position={[0, 0, 0]}>
        {/* Protons */}
        <mesh position={[0.2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#FF0000" />
          <Text
            position={[0, 0.7, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            backgroundColor="#00000080"
            padding={0.1}
          >
            Proton (+)
          </Text>
        </mesh>
        
        {/* Neutrons */}
        <mesh position={[-0.2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#0000FF" />
          <Text
            position={[0, 0.7, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            backgroundColor="#00000080"
            padding={0.1}
          >
            Neutron (0)
          </Text>
        </mesh>
      </group>
      
      {/* Electron orbits */}
      {orbitals.map((orbital, index) => (
        <React.Fragment key={`orbital-${index}`}>
          {/* Orbital path visualization */}
          <mesh rotation={[Math.PI/4, 0, orbital.angle]}>
            <torusGeometry args={[orbital.radius, 0.02, 16, 100]} />
            <meshBasicMaterial color="#666666" transparent opacity={0.3} />
          </mesh>
          
          {/* Electron */}
          <group ref={electronsRef.current[index]}>
            <mesh>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshStandardMaterial
                color={orbital.color}
                emissive={orbital.color}
                emissiveIntensity={0.5}
              />
            </mesh>
            <Text
              position={[0, 0.4, 0]}
              fontSize={0.2}
              color="white"
              anchorX="center"
              anchorY="middle"
              backgroundColor="#00000080"
              padding={0.1}
            >
              Electron (-)
            </Text>
          </group>
        </React.Fragment>
      ))}
      
      {/* Title */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Atomic Structure
      </Text>
    </group>
  );
};