import { use, useState } from "react";
import User from "./User";

function Toggle () {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <h1>Toggle in react.js</h1>
            <button onClick={() => setDisplay(!display)}>toggle</button>

            {/* {
                display? <h1>VIRU</h1> : null
            } */}

            {
                display? <User/> : null
            }
        </div>
    );
}

export default Toggle;