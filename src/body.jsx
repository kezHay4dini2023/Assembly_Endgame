import "./style/main.css"
import Frameworks from "./components/frameworks"
import Aplhabet_tiles from "./components/frame_tiles"
import Fills from "./components/fills"
import Comments from "./components/comment"
import { useState } from "react"
import { useEffect } from "react"

export default function MainBody() {
    const [alphabet, setAlphabet] = useState(generateAtoZtile())

    function generateAtoZtile() {
        return new Array(26).fill(0)
        .map((_, i) => 
            String.fromCharCode( i + 65)
    
    )
    }

    function clickedletter(event) {
        const id = event.currentTarget.id
        console.log(id); 
    }

    // useEffect( () => {
    //     setAlphabet()
    // }, []
    // );

    return (
        <main>
        <div>
            ASSEMBLY: END GAME
        </div>
        <div>
        Guess the word within 8 attempts to keep the programming world safe from the assembly
        </div>
        <Comments />
        <Frameworks />
        <Fills />
        <Aplhabet_tiles alphabet={alphabet} clickedletter={clickedletter}/>
        </main>
    )
}