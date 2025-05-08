import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import SceneDataRenderer from './components/SceneDataRenderer';
import './App.css';

// Datos de ejemplo para visualizar
const sampleData = [
  { id: 1, value: 75, category: 'A', timestamp: Date.now() - 100000 },
  { id: 2, value: 45, category: 'B', timestamp: Date.now() - 200000 },
  { id: 3, value: 90, category: 'A', timestamp: Date.now() - 300000 },
  { id: 4, value: 30, category: 'C', timestamp: Date.now() - 400000 },
  { id: 5, value: 60, category: 'B', timestamp: Date.now() - 500000 },
  { id: 6, value: 85, category: 'C', timestamp: Date.now() - 600000 },
  { id: 7, value: 50, category: 'A', timestamp: Date.now() - 700000 },
];

function App() {
  // Controles globales con leva
  const {
    backgroundColor,
    ambientLightIntensity,
    pointLightIntensity,
    cameraPosition,
    dataScaleFactor,
    rotationSpeed,
    showGrid,
    visualizationType,
  } = useControls('Escena', {
    backgroundColor: '#111827',
    ambientLightIntensity: { value: 0.5, min: 0, max: 1, step: 0.1 },
    pointLightIntensity: { value: 0.8, min: 0, max: 2, step: 0.1 },
    cameraPosition: { value: 10, min: 5, max: 20, step: 1 },
    dataScaleFactor: { value: 1, min: 0.1, max: 3, step: 0.1 },
    rotationSpeed: { value: 0.01, min: 0, max: 0.1, step: 0.001 },
    showGrid: true,
    visualizationType: { options: ['cubes', 'spheres', 'mixed'] },
  });

  // Controles específicos para la categorización
  const {
    categoryAColor,
    categoryBColor,
    categoryCColor,
    distributionStyle,
  } = useControls('Categorías', {
    categoryAColor: '#ff4d88',
    categoryBColor: '#4da6ff',
    categoryCColor: '#7dff4d',
    distributionStyle: { options: ['circular', 'grid', 'linear'] },
  });

  const categoryColors = {
    'A': categoryAColor,
    'B': categoryBColor,
    'C': categoryCColor
  };

  return (
    <div className="app-container">
      <Canvas
        camera={{ position: [cameraPosition, cameraPosition, cameraPosition], fov: 50 }}
        style={{ backgroundColor }}
      >
        <ambientLight intensity={ambientLightIntensity} />
        <pointLight position={[10, 10, 10]} intensity={pointLightIntensity} />
        
        {showGrid && (
          <>
            <gridHelper args={[20, 20, '#666666', '#444444']} />
            <axesHelper args={[5]} />
          </>
        )}
        
        <SceneDataRenderer 
          data={sampleData} 
          scaleFactor={dataScaleFactor}
          rotationSpeed={rotationSpeed}
          categoryColors={categoryColors}
          visualizationType={visualizationType}
          distributionStyle={distributionStyle}
        />
        
        <OrbitControls enableDamping dampingFactor={0.25} />
      </Canvas>
    </div>
  );
}

export default App;