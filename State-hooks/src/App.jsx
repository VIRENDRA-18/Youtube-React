import { useState } from "react";
import Toggle from "./Toggle";

function App () {

  const [fruits, setFruits] = useState("Apple");

  const handleClicked = () => {
    setFruits("Orange");
  }
  return (
    <div>
      {/* <h1>State in react.js!</h1>
      <h2>{fruits}</h2>
      <button onClick={handleClicked}>Change the fruits</button> */}
      <Toggle/>
    </div>
  )
}

export default App;