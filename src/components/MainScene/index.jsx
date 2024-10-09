import { CameraControls } from "@react-three/drei"
import BlueBee from "../../models/Bee/BlueBee"
// import NormalBee from "../../models/Bee/NormalBee"
import Sky from "../../models/sky"
import TreeModel from "../../models/TreeModel"
import { useRef, useEffect, useState } from "react"

const MainScene = () => {
    const cameraControlsRef = useRef(null);
    const blueBeeRef = useRef(null);
    const [zoomType, setZoomType] = useState();
    useEffect(() => {
        if (zoomType === 'in') {
            if (cameraControlsRef.current) {
                cameraControlsRef.current.smoothTime = 0.8;
                cameraControlsRef.current.fitToBox(blueBeeRef.current, true)
            }
        } else {
            if (cameraControlsRef.current) {
                cameraControlsRef.current.smoothTime = 0.8;
                cameraControlsRef.current.reset({ duration: 1000 });
            }
        }

    }, [zoomType])

    const handleClick = () => {
        // Add your click logic here
        console.log('Bee clicked!');
        if (zoomType === 'in') {
            setZoomType('out')
        } else {
            setZoomType('in')
        }

    };
    return (
        <>
            <Sky />
            <TreeModel />
            {/* <NormalBee /> */}
            <BlueBee />
            <CameraControls ref={cameraControlsRef} />
            <mesh ref={blueBeeRef} position={[-1, 0, 0]} onClick={handleClick}  >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="red" wireframe />
            </mesh>

        </>
    )
}

export default MainScene