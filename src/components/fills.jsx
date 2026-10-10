import FillTiles from "./fill_tile";
import '../style/fills.css'
import { nanoid } from "nanoid";

export default function Fills (props) {
    
    const Fillings = props.mysteryWord.map(
        filling =>  
             <FillTiles letter = {filling.valued} isShown = {filling.isShown} key={nanoid()}/> 
    )
    
    return (
        <div className="fillframe">
            {Fillings}
        </div>
    )
}