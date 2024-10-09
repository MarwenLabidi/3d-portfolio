import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import flyingIslandGlb from '/src/assets/3d-models/flyingIsland.glb';

const TreeModel = () => {
    const treeModel = useLoader(GLTFLoader, flyingIslandGlb);

    return (
        <mesh ref={treeModel} scale={[1, 1, 1]} position={[0, -0.7, 0]}>
            <primitive object={treeModel.scene} />
        </mesh>
    );
};

export default TreeModel;