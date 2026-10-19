import '../style/tile.css'

import Tile from "./alphabet_tile"

export default function Aplhabet_tiles(props) {


    const latinAlphabets = props.alphabet.map( alphaObj => 
        <Tile 
        value={alphaObj.value} 
        id={alphaObj.value} 
        key={alphaObj.value}
        isHeld={alphaObj.isHeld}
        clickedletter={props.clickedletter}/>

    )

    return (
        <>
            {!props.redo && 
            <div className="frameTile">
                {latinAlphabets}
            </div>
            }
            
        {props.redo && <button
            className='redo-button'
            onClick={props.resetGame}
            > PLAY AGAIN </button>}
        </>

    )
}