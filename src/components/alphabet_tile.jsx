import '../style/tile.css'


export default function Tile(props) {
    return (
        <button className='tile_letter'>
            {props.alphabet}
        </button>
    )
}