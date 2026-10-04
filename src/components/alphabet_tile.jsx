import '../style/tile.css'


export default function Tile(props) {
    
    return (
        <button className='tile_letter' key={props.id} value={props.value} isheld={props.isHeld} onClick={props.clickedletter}>
            {props.value}
        </button>
    )
}