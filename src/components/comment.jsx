import '../style/comment.css'

export default function Comments(props) {
    return(
        <div className="comment" style={{
            color: props.coloring
        }} id='commenting'>
           { (!props.lost && !props.win ) && <> {props.commented} </>} 
            {(props.lost && !props.win) && <> GAME OVER 👾👾 </>}
            {(!props.lost && props.win) && <> WINNNER!! </>}
        </div>
    )
}