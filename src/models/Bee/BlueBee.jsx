import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import stylized_flying_bee_bird_rigged from '/src/assets/3d-models/stylized_flying_bee_bird_rigged.glb';
import { useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

const BlueBee = () => {
    const blueBee = useLoader(GLTFLoader, stylized_flying_bee_bird_rigged);
    const { actions, names } = useAnimations(blueBee.animations, blueBee.scene);
    useEffect(() => {
        actions[`${names[0]}`].play();
    }, [])

    return (
        <mesh ref={blueBee} scale={[0.01, 0.01, 0.01]} position={[-1, 0, 0]} rotation={[0, 0.3, 0]}>
            <primitive object={blueBee.scene} />
        </mesh>
    );
};

export default BlueBee;