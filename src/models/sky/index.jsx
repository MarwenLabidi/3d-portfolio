import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import sky from '/src/assets/3d-models/sky.glb';

const Sky = () => {
    const skyModel = useLoader(GLTFLoader, sky);

    return (
        <mesh ref={skyModel} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 3, 0]}>
            <primitive object={skyModel.scene} />
        </mesh>
    );
};

export default Sky;