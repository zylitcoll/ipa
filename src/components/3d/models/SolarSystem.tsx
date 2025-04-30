import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

export const SolarSystem = () => {
  const group = useRef<THREE.Group>(null);
  
  // Planet data with relative sizes and distances (not to scale for visualization purposes)
  const planets = [
    { name: 'Sun', radius: 2.5, distance: 0, color: '#FDB813', rotationSpeed: 0.001 },
    { name: 'Mercury', radius: 0.4, distance: 4, color: '#9C9C9C', rotationSpeed: 0.008 },
    { name: 'Venus', radius: 0.6, distance: 5.5, color: '#E6B87D', rotationSpeed: 0.006 },
    { name: 'Earth', radius: 0.65, distance: 7, color: '#2E75FF', rotationSpeed: 0.005 },
    { name: 'Mars', radius: 0.5, distance: 9, color: '#E27B58', rotationSpeed: 0.004 },
    { name: 'Jupiter', radius: 1.2, distance: 12, color: '#E8CAA4', rotationSpeed: 0.002 },
    { name: 'Saturn', radius: 1.0, distance: 15, color: '#EAD6B8', rotationSpeed: 0.0015 },
    { name: 'Uranus', radius: 0.8, distance: 18, color: '#C1EEF4', rotationSpeed: 0.001 },
    { name: 'Neptune', radius: 0.8, distance: 21, color: '#5B5DDF', rotationSpeed: 0.0005 },
  ];

  // Orbit animation
  useFrame((state) => {
    if (group.current) {
      planets.forEach((planet, i) => {
        if (i > 0) { // Skip the sun
          const planetMesh = group.current?.children[i * 2]; // Multiply by 2 because we also have orbit lines
          if (planetMesh) {
            const time = state.clock.getElapsedTime() * planet.rotationSpeed;
            const x = Math.sin(time) * planet.distance;
            const z = Math.cos(time) * planet.distance;
            planetMesh.position.x = x;
            planetMesh.position.z = z;
            
            // Update label positions
            const label = planetMesh.children[0];
            if (label) {
              label.position.y = planet.radius + 0.3;
              label.lookAt(state.camera.position);
            }
          }
        }
      });
    }
  });

  return (
    <group ref={group}>
      {planets.map((planet, index) => (
        <React.Fragment key={planet.name}>
          {/* Orbit Line (except for Sun) */}
          {index > 0 && (
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[planet.distance, planet.distance + 0.05, 64]} />
              <meshBasicMaterial color="#444444" transparent opacity={0.3} side={THREE.DoubleSide} />
            </mesh>
          )}
          
          {/* Planet */}
          <mesh position={[index === 0 ? 0 : planet.distance, 0, 0]}>
            <Sphere args={[planet.radius, 32, 32]}>
              <meshStandardMaterial color={planet.color} />
            </Sphere>
            
            {/* Planet Label */}
            <Text
              position={[0, planet.radius + 0.3, 0]}
              fontSize={0.3}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {planet.name}
            </Text>
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
};