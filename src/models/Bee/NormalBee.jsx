import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import microsoft_bee from '/src/assets/3d-models/microsoft_bee.glb';

const NormalBee = () => {
    const normalBee = useLoader(GLTFLoader, microsoft_bee);

    return (
        <mesh ref={normalBee} scale={[1, 1, 1]} position={[0, -0.5, 1]}>
            <primitive object={normalBee.scene} />
        </mesh>
    );
};

export default NormalBee;