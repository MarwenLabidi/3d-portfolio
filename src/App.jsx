import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei';



function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
        <ambientLight />
        <mesh position={[0, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#ff0000" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
