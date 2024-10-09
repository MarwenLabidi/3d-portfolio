import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import stylized_flying_bee_bird_rigged from '/src/assets/3d-models/stylized_flying_bee_bird_rigged.glb';

const BlueBee = () => {
    const blueBee = useLoader(GLTFLoader, stylized_flying_bee_bird_rigged);

    return (
        <mesh ref={blueBee} scale={[1, 1, 1]} position={[0, -0.5, 1]}>
            <primitive object={blueBee.scene} />
        </mesh>
    );
};

export default BlueBee;