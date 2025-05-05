import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import { Leva, useControls } from 'Leva'
import './App.css'

// Nivel Nieto
function Nieto({ offset, hue }) {
  return (
    <mesh position={offset}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial color={`hsl(${hue}, 70%, 60%)`} />
    </mesh>
  )
}

// Nivel Hijo
function Hijo({ origin, angle, baseColor }) {
  return (
    <group position={origin} rotation={[0, angle, 0]}>
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color={baseColor} />
      </mesh>
      <Nieto offset={[1, 0, 0.8]} hue={300} />
      <Nieto offset={[-1, 0, -0.8]} hue={180} />
    </group>
  )
}

// Nivel Padre
function Padre() {
  const rootRef = useRef()
  const {
    spinRate,
    xShift,
    yShift,
    sizeFactor,
  } = useControls('Nodo Principal', {
    spinRate: { value: 0.6, min: 0, max: 4, step: 0.1 },
    xShift: { value: 0, min: -4, max: 4, step: 0.1 },
    yShift: { value: 0, min: -4, max: 4, step: 0.1 },
    sizeFactor: { value: 1, min: 0.4, max: 2, step: 0.1 }
  })

  useFrame((_, delta) => {
    if (rootRef.current) {
      rootRef.current.rotation.z += delta * spinRate
    }
  })

  return (
    <group ref={rootRef} position={[xShift, yShift, 0]} scale={sizeFactor}>
      <mesh>
        <coneGeometry args={[1.5, 3, 24]} />
        <meshStandardMaterial color="goldenrod" />
      </mesh>
      <Hijo origin={[0, 0, 3.5]} angle={Math.PI / 3} baseColor="coral" />
      <Hijo origin={[-3.5, 0, 0]} angle={-Math.PI / 3} baseColor="dodgerblue" />
    </group>
  )
}

function Escena() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <spotLight position={[5, 10, 5]} intensity={1.2} angle={0.4} penumbra={0.5} />
      <Padre />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper args={[10, 10]} />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <Leva collapsed />
      <div className="info-panel">
        <h2>Jerarquía 3D: Nodo Raíz y Descendientes</h2>
        <p>Explora la rotación jerárquica y cómo cada transformación afecta al sistema completo.</p>
        <ul className="legend">
          <li><span className="color-box goldenrod"></span> Nodo Raíz (Cono)</li>
          <li><span className="color-box coral"></span><span className="color-box dodgerblue"></span> Hijos (Esferas)</li>
          <li><span className="color-box purple"></span><span className="color-box aqua"></span> Nietos (Octaedros)</li>
        </ul>
      </div>
      <Canvas camera={{ position: [0, 6, 12], fov: 45 }}>
        <Escena />
      </Canvas>
    </div>
  )
}

export default App
