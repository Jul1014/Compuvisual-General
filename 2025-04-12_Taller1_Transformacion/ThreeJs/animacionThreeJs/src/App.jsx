import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

//Modifiable variables
const rotSpeed= 5
const movSpeed= 2
const scaleMultiplier= 0.2
const sphereSize = 3

//Sphere Methods and Sphere materials
function Sphere() 
{
  const sphereRef = useRef()

  useFrame
( ({ clock }) => 
  {
    const time = clock.getElapsedTime()
    // Circular Movement
    sphereRef.current.position.x = Math.sin(time) * movSpeed
    sphereRef.current.position.z = Math.cos(time) * movSpeed
    // Rotation
    sphereRef.current.rotation.x = time * rotSpeed
    //Oscilating Scaling
    sphereRef.current.scale.x = sphereRef.current.scale.y = sphereRef.current.scale.z = Math.sin(time)* scaleMultiplier + 0.4
  }
)

return(
    <group ref={sphereRef}>
      {/* Blue Half */}
      <mesh>
        <sphereGeometry args={[sphereSize, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#01ABFA" />
      </mesh>
      {/* Orange Half */}
      <mesh>
        <sphereGeometry args={[sphereSize, 64, 64, 0, Math.PI * 2, Math.PI * 0.5, Math.PI]} />
        <meshStandardMaterial color="#FA8E01" />
      </mesh>
    </group>
  )
}

//Ground plane below the sphere
function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#289F1D" />
    </mesh>
  )
}
//Other side of the ground plane
function BacksideGroundPlane() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#289F1D" />
    </mesh>
  )
}

export default function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 5, 10], fov: 50 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Sphere />
        <GroundPlane />
        <BacksideGroundPlane />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  )
}