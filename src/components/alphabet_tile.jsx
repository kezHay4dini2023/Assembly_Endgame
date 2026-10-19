import '../style/tile.css'


export default function Tile(props) {
    
    return (
        <button className='tile_letter' 
        key={props.id} id={props.id} 
        value={props.value} isheld={props.isHeld} 
        onClick={props.clickedletter}
        style={{ backgroundColor: props.isHeld ? "yellowgreen" : undefined }}
        >
            {props.value}
        </button>
    )
}