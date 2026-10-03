import '../style/tile.css'

import Tile from "./alphabet_tile"

export default function Aplhabet_tiles(props) {


    const latinAlphabets = props.alphabet.map( alpha => 
        <Tile alphabet={alpha} id={props.id} clickedletter={props.clickedletter}/>

    )

    return (
        <div className="frameTile">
            {latinAlphabets}
            
        </div>

    )
}