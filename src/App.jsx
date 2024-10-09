import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei';
import MainScene from './components/MainScene';



function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
        <ambientLight intensity={8} />
        <MainScene />
      </Canvas>
    </div>
  )
}

export default App
