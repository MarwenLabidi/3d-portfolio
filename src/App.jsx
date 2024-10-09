import { Canvas } from '@react-three/fiber'


function App() {

  return (
    <div id="canvas-container">
      <Canvas>
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
