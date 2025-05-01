import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ModelViewer from './components/ModelViewer'
import UI from './components/UI'
import './App.css'

function App() {
  const [viewMode, setViewMode] = useState('normal')
  const [modelInfo, setModelInfo] = useState({
    vertices: 0,
    faces: 0,
    edges: 0
  })

  return (
    <div className="app-container">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 120], fov: 50 }}>
          <color attach="background" args={['#1a1a1a']} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <directionalLight position={[-5, 5, 5]} intensity={0.5} />
          <Suspense fallback={null}>
            <ModelViewer 
              viewMode={viewMode} 
              setModelInfo={setModelInfo}
              modelPath="/public/LowPolyCat.obj" 
            />
          </Suspense>
          <OrbitControls makeDefault />
        </Canvas>
      </div>
      <UI viewMode={viewMode} setViewMode={setViewMode} modelInfo={modelInfo} />
    </div>
  )
}

export default App