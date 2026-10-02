import "../style/framework.css"


export default function Framework(props) {
    return(
        <span className="framework" style={{
            backgroundColor: props.bcolor,
            color: props.color
        }
        }>
            {props.name}
        </span>
    )
}