import FillTiles from "./fill_tile";
import '../style/fills.css'

export default function Fills () {
    return (
        <div className="fillframe">
            <FillTiles />
            <FillTiles />
            <FillTiles />
            <FillTiles />
            <FillTiles />
        </div>
    )
}