import BlueBee from "../../models/Bee/BlueBee"
// import NormalBee from "../../models/Bee/NormalBee"
import Sky from "../../models/sky"
import TreeModel from "../../models/TreeModel"

const MainScene = () => {
    return (
        <>
            <Sky />
            <TreeModel />
            {/* <NormalBee /> */}
            <BlueBee />
        </>
    )
}

export default MainScene