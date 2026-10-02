import "./style/main.css"
import Frameworks from "./components/frameworks"
import Aplhabet_tiles from "./components/frame_tiles"
import Fills from "./components/fills"
import Comments from "./components/comment"

export default function MainBody() {
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
        <Aplhabet_tiles />
        </main>
    )
}