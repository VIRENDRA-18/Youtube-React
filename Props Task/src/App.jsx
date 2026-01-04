import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [color, setColor] = useState('Purple');
  return (
    <div>
      <h1>Props Task</h1>
      <select onChange={(e)=> setColor(e.target.value)}>
        <option value="purple">PURPLE</option>
        <option value="yelloW">YELLOW</option>
        <option value="green">Green</option>
        <option value="red">RED</option>


      </select>
      <Clock color={color}/>

    </div>
  );
}
export default App;