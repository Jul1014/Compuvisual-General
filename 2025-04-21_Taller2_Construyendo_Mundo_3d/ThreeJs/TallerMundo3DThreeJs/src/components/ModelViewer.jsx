//ModelViewer.jsx
import { useEffect, useRef } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Edges, Points, Wireframe } from '@react-three/drei'

const ModelViewer = ({ viewMode, setModelInfo, modelPath }) => {
  const obj = useLoader(OBJLoader, modelPath)
  const modelRef = useRef()
  const { scene } = useThree()

  useEffect(() => {
    if (obj) {
      // Calculate model information
      let verticesCount = 0
      let facesCount = 0
      let edgesCount = 0

      obj.traverse((child) => {
        if (child.isMesh) {
          const geometry = child.geometry
          verticesCount += geometry.attributes.position.count
          facesCount += geometry.index ? geometry.index.count / 3 : geometry.attributes.position.count / 3
          edgesCount += facesCount * 3 / 2 // Approximation for a closed manifold
        }
      })

      setModelInfo({
        vertices: verticesCount,
        faces: facesCount,
        edges: edgesCount
      })

      // Center the model
      obj.position.set(0, 0, 0)
      
      // Adjust scale to fit in view
      obj.scale.set(0.5, 0.5, 0.5)
    }
  }, [obj, setModelInfo])

  // Use different visualization techniques based on the selected view mode
  return (
    <group ref={modelRef}>
      {viewMode === 'normal' && (
        <primitive object={obj.clone()} scale={1} />
      )}
      
      {viewMode === 'wireframe' && (
        <mesh>
          {obj.children.map((child, index) => {
            if (child.isMesh) {
              return (
                <group key={index}>
                  <mesh geometry={child.geometry}>
                    <meshBasicMaterial wireframe={true} color="yellow" />
                  </mesh>
                </group>
              )
            }
            return null
          })}
        </mesh>
      )}
      
      {viewMode === 'edges' && (
        <group>
          <primitive object={obj.clone()} scale={0.5} visible={false} />
          {obj.children.map((child, index) => {
            if (child.isMesh) {
              return (
                <lineSegments key={`edges-${index}`}>
                  <edgesGeometry attach="geometry" args={[child.geometry]} />
                  <lineBasicMaterial attach="material" color="cyan" linewidth={2} />
                </lineSegments>
              )
            }
            return null
          })}
        </group>
      )}
      
      {viewMode === 'vertices' && (
        <group>
          <primitive object={obj.clone()} scale={0.5} visible={false} />
          {obj.children.map((child, index) => {
            if (child.isMesh) {
              return (
                <points key={`vertices-${index}`}>
                  <bufferGeometry attach="geometry" {...child.geometry} />
                  <pointsMaterial 
                    attach="material" 
                    size={0.05} 
                    color="magenta" 
                    sizeAttenuation={true}
                  />
                </points>
              )
            }
            return null
          })}
        </group>
      )}
    </group>
  )
}

export default ModelViewer