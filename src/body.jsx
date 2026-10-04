import "./style/main.css"
import Frameworks from "./components/frameworks"
import Aplhabet_tiles from "./components/frame_tiles"
import Fills from "./components/fills"
import Comments from "./components/comment"
import { useState } from "react"
import { useEffect } from "react"

export default function MainBody() {
    const [alphabet, setAlphabet] = useState(generateAtoZtile())
    const [mysteryWord, setmysteryWord] = useState(slicedupword("astonishing"))

    console.log(alphabet)
    function generateAtoZtile() {
        return new Array(26).fill(0)
        .map((_, i) => 
            ({
            value: String.fromCharCode( i + 65),
            isHeld: false
            })
    
    )
    }

    function slicedupword(word = "hello") {
        const spliced = word.split("")

        return spliced
    }

    function clickedletter(event) {
        const currentkey = event.currentTarget
        const isHeld = event.currentTarget.isheld
        const value = event.currentTarget.value
        console.log(value); 

        if (!isHeld) {
            currentkey.style.backgroundColor = "yellowgreen";
            event.currentTarget.isheld = true
        } else {
            currentkey.style.backgroundColor = "#fdb121";
            event.currentTarget.isheld = false
        }

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
        <Fills mysteryWord = {mysteryWord}/>
        <Aplhabet_tiles alphabet={alphabet} clickedletter={clickedletter}/>
        </main>
    )
}