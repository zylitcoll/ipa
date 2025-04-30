import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

export const PlantCell = () => {
  const group = useRef<THREE.Group>(null);
  const [selectedOrganelle, setSelectedOrganelle] = useState<string | null>(null);
  
  // Define cell organelles with positions, colors, and descriptions
  const organelles = [
    {
      name: 'Cell Wall',
      position: [0, 0, 0],
      scale: [3.5, 3.5, 3.5],
      color: '#90EE90',
      description: 'A rigid layer that surrounds plant cells and provides structural support and protection.'
    },
    {
      name: 'Cell Membrane',
      position: [0, 0, 0],
      scale: [3.2, 3.2, 3.2],
      color: '#FFB347',
      description: 'Controls what enters and exits the cell, acting as a selective barrier.'
    },
    {
      name: 'Nucleus',
      position: [-1, 0.5, 0],
      scale: [1, 1, 1],
      color: '#B19CD9',
      description: 'Contains the cell\'s genetic material (DNA) and controls the cell\'s activities.'
    },
    {
      name: 'Chloroplast',
      position: [1.5, 1, 0.5],
      scale: [0.7, 0.3, 0.5],
      color: '#32CD32',
      description: 'Contains chlorophyll for photosynthesis, converting sunlight to energy.'
    },
    {
      name: 'Mitochondrion',
      position: [0.8, -0.7, 0.5],
      scale: [0.5, 0.3, 0.3],
      color: '#FF6347',
      description: 'The powerhouse of the cell, producing energy through cellular respiration.'
    },
    {
      name: 'Vacuole',
      position: [0, 0, 0],
      scale: [2, 2, 2],
      color: '#87CEEB',
      description: 'A large storage sac filled with water, nutrients, and waste materials.'
    },
    {
      name: 'Golgi Apparatus',
      position: [-1, -1, 0.5],
      scale: [0.6, 0.4, 0.2],
      color: '#FFA07A',
      description: 'Processes and packages proteins and lipids for storage or transport out of the cell.'
    },
    {
      name: 'Endoplasmic Reticulum',
      position: [-0.5, 0, 0.8],
      scale: [1.5, 0.4, 0.4],
      color: '#FFFFE0',
      description: 'A network of membranes where proteins and lipids are synthesized.'
    }
  ];
  
  // Simple rotation animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  // Handle organelle click
  const handleOrganelleClick = (name: string) => {
    setSelectedOrganelle(name === selectedOrganelle ? null : name);
  };
  
  return (
    <group ref={group}>
      {/* Cell organelles - rendered in order so inner parts appear correctly */}
      {organelles.map((organelle) => (
        <React.Fragment key={organelle.name}>
          {/* Don't render cell wall and membrane with opacity if we're looking at an internal organelle */}
          {(organelle.name === 'Cell Wall' || organelle.name === 'Cell Membrane') ? (
            <mesh
              position={organelle.position}
              onClick={() => handleOrganelleClick(organelle.name)}
            >
              <sphereGeometry args={[organelle.scale[0], 32, 32]} />
              <meshStandardMaterial
                color={organelle.color}
                transparent
                opacity={selectedOrganelle && 
                         selectedOrganelle !== organelle.name &&
                         (selectedOrganelle !== 'Cell Wall' && selectedOrganelle !== 'Cell Membrane') ? 
                         0.2 : 0.7}
              />
              {/* Show name on hover */}
              <Text
                position={[0, organelle.scale[0] + 0.3, 0]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
                visible={selectedOrganelle === organelle.name}
              >
                {organelle.name}
              </Text>
            </mesh>
          ) : (
            // Other organelles
            <mesh
              position={organelle.position}
              onClick={() => handleOrganelleClick(organelle.name)}
            >
              <sphereGeometry args={[organelle.scale[0], 32, 32]} />
              <meshStandardMaterial
                color={organelle.color}
                emissive={selectedOrganelle === organelle.name ? organelle.color : undefined}
                emissiveIntensity={selectedOrganelle === organelle.name ? 0.5 : 0}
              />
              {/* Show name on hover */}
              <Text
                position={[0, organelle.scale[0] + 0.3, 0]}
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
                visible={selectedOrganelle === organelle.name}
              >
                {organelle.name}
              </Text>
            </mesh>
          )}
        </React.Fragment>
      ))}
      
      {/* Information panel for selected organelle */}
      {selectedOrganelle && (
        <Html
          position={[0, -4, 0]}
          style={{
            width: '300px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            pointerEvents: 'none',
          }}
        >
          <h3 style={{ margin: '0 0 5px 0' }}>{selectedOrganelle}</h3>
          <p style={{ margin: 0, fontSize: '14px' }}>
            {organelles.find(o => o.name === selectedOrganelle)?.description}
          </p>
        </Html>
      )}
      
      {/* Instructions */}
      <Text
        position={[0, 4, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
        backgroundColor="#00000080"
        padding={0.2}
      >
        Click on organelles to learn more
      </Text>
    </group>
  );
};