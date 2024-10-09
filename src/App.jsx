import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei';
import MainScene from './components/MainScene';
import { OrbitControls } from '@react-three/drei';



function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
        <ambientLight intensity={8} />
        <MainScene />
        {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}

      </Canvas>
    </div>
  )
}

export default App
