import FillTiles from "./fill_tile";
import '../style/fills.css'

export default function Fills (props) {
    
    const Fillings = props.mysteryWord.map(
        filling => 
            <FillTiles letter = {filling}/>
    )
    
    return (
        <div className="fillframe">
            {Fillings}
        </div>
    )
}