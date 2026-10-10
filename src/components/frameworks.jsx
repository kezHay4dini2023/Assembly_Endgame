import Framework from "./framework"
import "../style/framework.css"

export default function Frameworks(props) {

    const programmeAssembly = props.assembly.map( assemblyObj => 
            <Framework 
            name={assemblyObj.name} 
            bcolor={assemblyObj.backgroundColor} 
            color={assemblyObj.color} /> 
    
        )

    return (
        <div className="frameworks">
        {programmeAssembly}
        </div>
    )
}