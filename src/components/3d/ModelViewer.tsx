import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { SolarSystem } from './models/SolarSystem';
import { Volcano } from './models/Volcano';
import { PlantCell } from './models/PlantCell';
import { Atom } from './models/Atom';
import { SimpleMachine } from './models/SimpleMachine';

interface ModelViewerProps {
  modelType: 'solarSystem' | 'volcano' | 'plantCell' | 'atom' | 'simpleMachine';
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelType }) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading completion after a delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Loading overlay
  if (loading) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-primary-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white mt-4">Loading 3D Model...</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      
      {modelType === 'solarSystem' && <SolarSystem />}
      {modelType === 'volcano' && <Volcano />}
      {modelType === 'plantCell' && <PlantCell />}
      {modelType === 'atom' && <Atom />}
      {modelType === 'simpleMachine' && <SimpleMachine />}
      
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  );
};

export default ModelViewer;