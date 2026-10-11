import "./style/main.css"
import Frameworks from "./components/frameworks"
import Aplhabet_tiles from "./components/frame_tiles"
import Fills from "./components/fills"
import Comments from "./components/comment"
import { useState } from "react"
import { useEffect } from "react"
import { nanoid } from "nanoid"

const assemblysList = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Python", "Ruby", "Assembly"]
const bcolors = [
  "orange",
  "#2f7ee9",
  "#eee71d",
  "#31cbe0",
  "#2583bb",
  "#508634",
  "#fad245",
  "#c3282b",
  "#2c488f"
];
const textColors = [
  "white",
  "white",
  "black",
  "black",
  "white",
  "white",
  "black",
  "white",
  "white"
];
const darkerBcolors = [
  "#b27400", // Darker orange
  "#2158a3", // Darker blue (#2f7ee9)
  "#a7a214", // Darker yellow (#eee71d)
  "#228e9d", // Darker cyan (#31cbe0)
  "#1a5c83", // Darker blue (#2583bb)
  "#385e24", // Darker green (#508634)
  "#af9330", // Darker gold (#fad245)
  "#881c1e", // Darker red (#c3282b)
  "#1f3264"  // Darker navy (#2c488f)
];

const downfall = [
  "Hala ka beh!! Namaalam na si HTML!",                     // HTML
  "Aray! Nawalan ng kulay at ganda si CSS!",                // CSS
  "Undefined behavior! Gumawa na ng sariling kwento si JS!", // Javascript
  "Hala, re-render ka nang re-render, sumuko na si React!", // React
  "Akala ko ba type-safe ka?! Anyare sa'yo TypeScript?!",    // TypeScript
  "Nalagutan na ng hininga ang server ni Node.js!",          // Node.js
  "Nabilaukan sa sariling indentation si Python!",          // Python
  "Aray ko! Nawalan na ng ningning ang Alahas na Ruby!",    // Ruby
  "Hala ka, Segment Fault! Sumakit ang ulo ni Assembly!"    // Assembly
];

export default function MainBody() {
    const [commented, setcommented] = useState("JUST DO IT! NA PARANG DL NAGHAHANAP!")
    const [totalwrongs, setTotalwrongs] = useState(0)
    const [alphabet, setAlphabet] = useState(generateAtoZtile())
    const [mysteryWord, setmysteryWord] = useState(slicedupword("astonishing"))
    const [assembly, setAssembly] = useState(assembling); 
    const [lost, setlost] = useState(false);
    const [win, setwin] = useState(false);
    const [redo, setredo] = useState(false); 

    function resetGame() {
        setcommented("JUST DO IT! NA PARANG DL NAGHAHANAP!")
        setTotalwrongs(0)
        setAlphabet(generateAtoZtile())
        setmysteryWord(slicedupword("astonishing"))
        setAssembly(assembling)
        setlost(false)
        setwin(false)
        setredo(false)
        document.getElementById("commenting").style.backgroundColor = "yellowgreen";
    }

    console.log(`color: ${assembly[0].name}`)
    function assembling() {
        return new Array(assemblysList.length).fill(0).map(
            (_, i) =>
            (
                {
                    name: assemblysList[i],
                    backgroundColor: bcolors[i],
                    color: textColors[i]
                }
            )
        )
    }

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

        return new Array(spliced.length).fill(0)
        .map((_, i) => 
            ({
            valued: spliced[i], 
            isShown: false, 
            key: nanoid()
            })
    
    )
    }

    function clickedletter(event) {
        const currentkey = event.currentTarget
        const isHeld = event.currentTarget.isheld
        const value = event.currentTarget.value
        const commentId = document.getElementById("commenting")

        console.log(value); 

        const isCorrect = mysteryWord.some(
        letter => letter.valued.toUpperCase() === value
    );

        if (isCorrect) {
            currentkey.style.backgroundColor = "yellowgreen";
            event.currentTarget.isheld = true
            commentId.style.backgroundColor = "yellowgreen";
            setcommented("CORRECT!")
        } else {
            currentkey.style.backgroundColor = "red";
            assembly[totalwrongs].backgroundColor = "grey";
            setTotalwrongs(
                prev => prev + 1 
            )
            setTimeout(() => {
                currentkey.style.backgroundColor = "#fdb121";
            }, 1000   
            )
            commentId.style.backgroundColor = "purple";
            setcommented(downfall[totalwrongs])


        }

        if (totalwrongs + 1 === assemblysList.length) {
            commentId.style.backgroundColor = "red"; 
            setlost(true);
            console.log("LOSTTT");
            setredo(true); 
        }

        const winnerChecker = isCorrect && mysteryWord.every(letter => letter.isShown || letter.valued.toUpperCase() === value)

        console.log(mysteryWord)

        if (winnerChecker) {
            commentId.style.backgroundColor = "yellowgreen"; 
            setwin(true);
            console.log("WINNER");
            setredo(true); 
        }


        setmysteryWord(
            prev => prev.map(
                letter => 
                letter.valued.toUpperCase() === value ?
                {...letter, isShown: true} : 
                letter
            )
        )
    }

    
    
    return (
        <main>
        <div>
            ASSEMBLY: END GAME
        </div>
        <div>
        Guess the word within 8 attempts to keep the programming world safe from the assembly
        </div>
        <Comments lost={lost} win={win} commented={commented}/>
        <Frameworks assembly={assembly}/>
        <Fills mysteryWord = {mysteryWord}/>
        <Aplhabet_tiles alphabet={alphabet} clickedletter={clickedletter}
        redo={redo}
        resetGame={resetGame}
        />
        </main>
    )
}