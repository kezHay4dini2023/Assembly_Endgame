import '../style/fills.css'


export default function FillTiles(props) {
    return(
        <div className="fillTile">
            {(props.isShown) && props.letter}
        </div>
    )
}