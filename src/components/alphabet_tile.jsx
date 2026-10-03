import '../style/tile.css'


export default function Tile(props) {
    return (
        <button className='tile_letter' id={props.alphabet} onClick={props.clickedletter}>
            {props.alphabet}
        </button>
    )
}