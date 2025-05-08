import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Box, PlusSquare, Info, Grid3x3 } from 'lucide-react';

// Simulación de rutas de modelos
const SAMPLE_MODELS = {
  obj: "/path/to/model.obj",
  stl: "/path/to/model.stl",
  gltf: "/path/to/model.gltf"
};

// Componente para mostrar modelos OBJ
const OBJModel = ({ url, visible, onVertexCount }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    if (!url || !visible) return;

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0x0088ff });
    const mesh = new THREE.Mesh(geometry, material);

    setModel(mesh);
    onVertexCount(geometry.attributes.position.count);
  }, [url, visible]);

  if (!model || !visible) return null;

  return <primitive object={model} position={[0, 0, 0]} scale={1} />;
};

// Componente para mostrar modelos STL
const STLModel = ({ url, visible, onVertexCount }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    if (!url || !visible) return;

    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xff5500 });
    const mesh = new THREE.Mesh(geometry, material);

    setModel(mesh);
    onVertexCount(geometry.attributes.position.count);
  }, [url, visible]);

  if (!model || !visible) return null;

  return <primitive object={model} position={[0, 0, 0]} scale={1} />;
};

// Componente para mostrar modelos GLTF
const GLTFModel = ({ url, visible, onVertexCount }) => {
  useEffect(() => {
    if (!url || !visible) return;

    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 50);
    onVertexCount(geometry.attributes.position.count);
  }, [url, visible, onVertexCount]);

  if (!visible) return null;

  return (
    <mesh position={[0, 0, 0]} scale={1}>
      <torusGeometry args={[1, 0.4, 16, 50]} />
      <meshStandardMaterial color={0x22cc88} metalness={0.5} roughness={0.2} />
    </mesh>
  );
};

// Componente principal de la escena
const Scene = ({ activeFormat, setVertexCount }) => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />

      <OBJModel url={SAMPLE_MODELS.obj} visible={activeFormat === 'obj'} onVertexCount={(v) => setVertexCount({ format: 'OBJ', count: v })} />
      <STLModel url={SAMPLE_MODELS.stl} visible={activeFormat === 'stl'} onVertexCount={(v) => setVertexCount({ format: 'STL', count: v })} />
      <GLTFModel url={SAMPLE_MODELS.gltf} visible={activeFormat === 'gltf'} onVertexCount={(v) => setVertexCount({ format: 'GLTF', count: v })} />

      <OrbitControls enableDamping dampingFactor={0.1} />
      <gridHelper args={[10, 10, '#888888', '#444444']} position={[0, -1.5, 0]} />
    </>
  );
};

// Botón para seleccionar formato
const FormatButton = ({ format, active, icon, onClick }) => {
  const Icon = icon;

  return (
    <button
      className={`flex items-center justify-center p-3 rounded-lg mr-2 ${
        active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
      onClick={() => onClick(format)}
    >
      <Icon size={20} className="mr-2" />
      <span className="font-medium">{format.toUpperCase()}</span>
    </button>
  );
};

// Componente principal
export default function ModelViewer() {
  const [activeFormat, setActiveFormat] = useState('obj');
  const [showHelp, setShowHelp] = useState(false);
  const [vertexInfo, setVertexInfo] = useState({ format: '', count: 0 });

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Comparador de Formatos 3D</h1>
        <p className="text-gray-300">Visualiza y analiza las diferencias entre formatos OBJ, STL y GLTF</p>
      </header>

      {/* Contenido principal */}
      <div className="flex flex-1 overflow-hidden">
        {/* Barra lateral */}
        <div className="w-64 bg-white p-4 shadow-md flex flex-col">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Formatos</h2>
            <div className="flex flex-col space-y-2">
              <FormatButton format="obj" active={activeFormat === 'obj'} icon={Box} onClick={setActiveFormat} />
              <FormatButton format="stl" active={activeFormat === 'stl'} icon={Grid3x3} onClick={setActiveFormat} />
              <FormatButton format="gltf" active={activeFormat === 'gltf'} icon={PlusSquare} onClick={setActiveFormat} />
            </div>
          </div>

          <div className="mt-auto">
            <button
              className="flex items-center justify-center w-full p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              onClick={() => setShowHelp(!showHelp)}
            >
              <Info size={18} className="mr-2" />
              <span>{showHelp ? "Ocultar ayuda" : "Mostrar ayuda"}</span>
            </button>
          </div>
        </div>

        {/* Área de visualización 3D */}
        <div className="flex-1 relative flex flex-col">
          <div className="flex-1">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }} shadows>
              <Suspense fallback={null}>
                <Scene activeFormat={activeFormat} setVertexCount={setVertexInfo} />
              </Suspense>
            </Canvas>
          </div>

          {/* Información fuera del canvas */}
          <div className="bg-white px-4 py-3 border-t text-sm text-gray-700">
            <strong>Formato actual:</strong> {vertexInfo.format || '---'} | <strong>Vértices:</strong>{" "}
            {vertexInfo.count?.toLocaleString() || '---'}
          </div>

          {/* Panel de ayuda */}
          {showHelp && (
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg w-80">
              <h3 className="font-bold mb-2">Controles</h3>
              <ul className="text-sm">
                <li className="mb-1">• <b>Rotar:</b> Clic y arrastrar</li>
                <li className="mb-1">• <b>Zoom:</b> Rueda del ratón</li>
                <li className="mb-1">• <b>Mover:</b> Clic derecho y arrastrar</li>
              </ul>
              <h3 className="font-bold mt-3 mb-2">Comparativa de formatos</h3>
              <ul className="text-sm">
                <li className="mb-1">• <b>OBJ:</b> Básico, geometría y materiales separados</li>
                <li className="mb-1">• <b>STL:</b> Solo geometría, sin texturas ni materiales</li>
                <li className="mb-1">• <b>GLTF:</b> Moderno, incluye materiales, animaciones y más</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
