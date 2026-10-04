import FillTiles from "./fill_tile";
import '../style/fills.css'

export default function Fills (props) {
    
    const Fillings = props.mysteryWord.map(
        filling =>  
             <FillTiles letter = {filling.value} isShown = {filling.isShown}/> 
    )
    
    return (
        <div className="fillframe">
            {Fillings}
        </div>
    )
}