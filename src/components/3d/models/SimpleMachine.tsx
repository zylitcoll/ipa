import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';

export const SimpleMachine = () => {
  const group = useRef<THREE.Group>(null);
  const [activeMachine, setActiveMachine] = useState<string | null>(null);
  const [leverAngle, setLeverAngle] = useState(0);
  const [pulleyHeight, setPulleyHeight] = useState(0);
  
  // Handle machine selection
  const selectMachine = (machine: string) => {
    setActiveMachine(activeMachine === machine ? null : machine);
  };
  
  // Handle lever interaction
  const moveLever = () => {
    if (activeMachine === 'lever') {
      setLeverAngle(leverAngle === 0 ? -Math.PI / 6 : 0);
    }
  };
  
  // Handle pulley interaction
  const movePulley = () => {
    if (activeMachine === 'pulley') {
      setPulleyHeight(pulleyHeight === 0 ? -1 : 0);
    }
  };
  
  // Animation for machines
  useFrame((state, delta) => {
    if (group.current) {
      // Rotate the whole display slowly when no machine is selected
      if (!activeMachine) {
        group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      } else {
        // Gradually rotate to face the camera when a machine is selected
        const targetRotation = 0;
        group.current.rotation.y += (targetRotation - group.current.rotation.y) * 0.1;
      }
    }
  });
  
  return (
    <group ref={group}>
      {/* Title */}
      <Text
        position={[0, 4, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Simple Machines
      </Text>
      
      {/* Instructions */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        backgroundColor="#00000080"
        padding={0.2}
      >
        Click on a machine to interact with it
      </Text>
      
      {/* Lever */}
      <group 
        position={[-3, 0, 0]} 
        visible={!activeMachine || activeMachine === 'lever'}
        onClick={() => selectMachine('lever')}
      >
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Lever
        </Text>
        
        {/* Fulcrum */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.5, 0.5, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Lever beam */}
        <group rotation={[0, 0, leverAngle]} onClick={moveLever}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3, 0.2, 0.2]} />
            <meshStandardMaterial color="#A0522D" />
          </mesh>
          
          {/* Load */}
          <mesh position={[-1, 0.25, 0]}>
            <boxGeometry args={[0.5, 0.3, 0.5]} />
            <meshStandardMaterial color="#CD5C5C" />
          </mesh>
          
          {/* Effort */}
          <mesh position={[1, 0.25, 0]}>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#4682B4" />
          </mesh>
        </group>
        
        {/* Ground */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[4, 2]} />
          <meshStandardMaterial color="#556B2F" />
        </mesh>
        
        {/* Information */}
        {activeMachine === 'lever' && (
          <Html
            position={[0, -2, 0]}
            style={{
              width: '200px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <h3 style={{ margin: '0 0 5px 0' }}>Lever</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>
              A lever uses a fulcrum (pivot point) to multiply force. Click on the lever to see how it works.
            </p>
          </Html>
        )}
      </group>
      
      {/* Pulley */}
      <group 
        position={[0, 0, 0]} 
        visible={!activeMachine || activeMachine === 'pulley'}
        onClick={() => selectMachine('pulley')}
      >
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Pulley
        </Text>
        
        {/* Support structure */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.2, 2, 0.2]} />
          <meshStandardMaterial color="#708090" />
        </mesh>
        
        {/* Pulley wheel */}
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color="#B8860B" />
        </mesh>
        
        {/* Rope */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1 + pulleyHeight, 16]} />
          <meshStandardMaterial color="#A0522D" />
        </mesh>
        
        {/* Weight */}
        <mesh position={[0, pulleyHeight, 0]} onClick={movePulley}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#CD5C5C" />
        </mesh>
        
        {/* Ground */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial color="#556B2F" />
        </mesh>
        
        {/* Information */}
        {activeMachine === 'pulley' && (
          <Html
            position={[0, -2, 0]}
            style={{
              width: '200px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <h3 style={{ margin: '0 0 5px 0' }}>Pulley</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>
              A pulley makes it easier to lift heavy objects by changing the direction of force. Click on the weight to see it in action.
            </p>
          </Html>
        )}
      </group>
      
      {/* Inclined Plane */}
      <group 
        position={[3, 0, 0]} 
        visible={!activeMachine || activeMachine === 'inclinedPlane'}
        onClick={() => selectMachine('inclinedPlane')}
      >
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Inclined Plane
        </Text>
        
        {/* The ramp */}
        <mesh position={[0, -0.2, 0]} rotation={[Math.PI / 6, 0, 0]}>
          <boxGeometry args={[2, 0.1, 2]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Box on ramp */}
        <mesh position={[0, 0.4, -0.5]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#CD5C5C" />
        </mesh>
        
        {/* Ground */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3, 3]} />
          <meshStandardMaterial color="#556B2F" />
        </mesh>
        
        {/* Information */}
        {activeMachine === 'inclinedPlane' && (
          <Html
            position={[0, -2, 0]}
            style={{
              width: '200px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <h3 style={{ margin: '0 0 5px 0' }}>Inclined Plane</h3>
            <p style={{ margin: 0, fontSize: '14px' }}>
              An inclined plane makes it easier to move objects to a higher place by spreading the work over a greater distance.
            </p>
          </Html>
        )}
      </group>
    </group>
  );
};