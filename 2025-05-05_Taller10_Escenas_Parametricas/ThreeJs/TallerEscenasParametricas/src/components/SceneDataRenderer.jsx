import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

// Componente de objeto 3D
const DataObject = ({ data, position, scale, color, rotationSpeed, visualizationType, hovered, setHover, index }) => {
  const meshRef = useRef();
  
  // Animación de rotación
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.x += rotationSpeed * 0.5;
    }
  });

  // Determinar el tipo de geometría según el tipo de visualización o mezcla
  const renderGeometry = () => {
    if (visualizationType === 'mixed') {
      // Para mixed, alterna entre cubo y esfera según el índice
      return index % 2 === 0 ? <boxGeometry /> : <sphereGeometry args={[0.7, 32, 32]} />;
    } else if (visualizationType === 'spheres') {
      return <sphereGeometry args={[0.7, 32, 32]} />;
    } else { // default: cubes
      return <boxGeometry />;
    }
  };

  // Aplica hover effect
  const handlePointerOver = () => setHover(index);
  const handlePointerOut = () => setHover(null);

  // Factor de escala para hover
  const hoverScale = hovered ? 1.2 : 1;
  const finalScale = [scale[0] * hoverScale, scale[1] * hoverScale, scale[2] * hoverScale];

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      scale={finalScale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      {renderGeometry()}
      <meshStandardMaterial 
        color={color} 
        metalness={0.5} 
        roughness={0.5} 
        emissive={hovered ? color : '#000000'} 
        emissiveIntensity={hovered ? 0.3 : 0}
      />
      
      {hovered && (
        <Html distanceFactor={10} position={[0, 1.5, 0]} className="label-container">
          <div className="data-label">
            <p>ID: {data.id}</p>
            <p>Valor: {data.value}</p>
            <p>Categoría: {data.category}</p>
          </div>
        </Html>
      )}
    </mesh>
  );
};

// Componente principal de visualización
const SceneDataRenderer = ({ data, scaleFactor, rotationSpeed, categoryColors, visualizationType, distributionStyle }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Calcular la posición de cada objeto según el estilo de distribución
  const getPosition = (item, index) => {
    const total = data.length;
    
    switch (distributionStyle) {
      case 'circular':
        // Distribuir en un círculo
        const radius = 5;
        const angle = (index / total) * Math.PI * 2;
        return [
          Math.cos(angle) * radius,
          (item.value / 50) - 1, // Altura basada en el valor
          Math.sin(angle) * radius
        ];
      
      case 'grid':
        // Distribuir en una cuadrícula
        const gridSize = Math.ceil(Math.sqrt(total));
        const gridX = (index % gridSize) - gridSize / 2 + 0.5;
        const gridZ = Math.floor(index / gridSize) - gridSize / 2 + 0.5;
        return [
          gridX * 2.5,
          (item.value / 50) - 1, // Altura basada en el valor
          gridZ * 2.5
        ];
      
      case 'linear':
      default:
        // Distribuir linealmente
        return [
          index * 2 - (total - 1), // Centrar la línea
          (item.value / 50) - 1, // Altura basada en el valor
          0
        ];
    }
  };

  return (
    <group>
      {data.map((item, index) => {
        // Calcular escala basada en el valor del dato
        const valueScale = (item.value / 100) * scaleFactor;
        
        // Escala XYZ personalizada según los datos
        const scale = [
          valueScale, 
          valueScale * 1.5, // Hacer que la altura sea ligeramente mayor
          valueScale
        ];
        
        // Obtener el color según la categoría
        const color = categoryColors[item.category] || '#ffffff';
        
        // Calcular posición según el estilo de distribución
        const position = getPosition(item, index);
        
        return (
          <DataObject
            key={item.id}
            data={item}
            position={position}
            scale={scale}
            color={color}
            rotationSpeed={rotationSpeed}
            visualizationType={visualizationType}
            hovered={hoveredIndex === index}
            setHover={setHoveredIndex}
            index={index}
          />
        );
      })}
    </group>
  );
};

export default SceneDataRenderer;