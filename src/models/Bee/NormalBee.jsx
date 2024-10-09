import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import microsoft_bee from '/src/assets/3d-models/microsoft_bee.glb';

const NormalBee = () => {
    const normalBee = useLoader(GLTFLoader, microsoft_bee);

    return (
        <mesh ref={normalBee} scale={[0,0,0]} position={[0,0, 0]} rotation={[0, 0, 0]}>
            <primitive object={normalBee.scene} />
            <meshStandardMaterial color="#ffff00" /> // Add a material to the mesh
        </mesh>
    );
};

export default NormalBee;