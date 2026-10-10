import '../style/comment.css'

export default function Comments(props) {
    return(
        <div className="comment" style={{
            color: props.coloring
        }} id='commenting'>
           { !props.lost && <> {props.commented} </>} 
            {props.lost && <> GAME OVER 👾👾 </>}
        </div>
    )
}