import Framework from "./framework"
import "../style/framework.css"

export default function Frameworks() {
    return (
        <div className="frameworks">
        <Framework name={"HTML"} bcolor={"orange"} color={"white"}/> 
        <Framework  name={"CSS"} bcolor={"#2f7ee9"} color={"white"}/>
        <Framework name={"Javascript"} bcolor={"#eee71d"} color={"black"}/> 
        <Framework  name={"React"} bcolor={"#31cbe0"} color={"black"}/>
        <Framework name={"TypeScript"} bcolor={"#2583bb"} color={"white"}/> 
        <Framework  name={"Node.js"} bcolor={"#508634"} color={"white"}/>
        <Framework name={"Python"} bcolor={"#fad245"} color={"black"}/> 
        <Framework  name={"Ruby"} bcolor={"#c3282b"} color={"white"}/>
        <Framework name={"Assembly"} bcolor={"#2c488f"} color={"white"}/> 
        </div>
    )
}