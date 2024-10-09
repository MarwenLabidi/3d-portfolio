import { CameraControls } from "@react-three/drei"
import BlueBee from "../../models/Bee/BlueBee"
// import NormalBee from "../../models/Bee/NormalBee"
import Sky from "../../models/sky"
import TreeModel from "../../models/TreeModel"
import { useRef, useEffect } from "react"

const MainScene = () => {
    const cameraControlsRef = useRef(null);
    const blueBeeRef = useRef(null);
    useEffect(() => {
        if (cameraControlsRef.current) {
            cameraControlsRef.current.smoothTime = 0.8;
            cameraControlsRef.current.fitToBox(blueBeeRef.current, true)
        }

    }, [])
    return (
        <>
            <Sky />
            <TreeModel />
            {/* <NormalBee /> */}
            <BlueBee />
            <CameraControls ref={cameraControlsRef} />
            <mesh ref={blueBeeRef} position={[-1, 0, 0]}  >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="red" wireframe />
            </mesh>

        </>
    )
}

export default MainScene