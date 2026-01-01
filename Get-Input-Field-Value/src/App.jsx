import React, { useState } from 'react';
function App() {
  const [value, setValue] = useState("VIRU");
 
  return (
    <>
      <h1>Get Input Field Value</h1>
      <input type = "text" value = {value} onChange={(event) =>setValue(event.target.value)} placeholder="Enter User Name"/>
      <h3>{value}</h3>
      <button onClick={() => setValue("")}>Clear value</button>
    </>
  )
}

export default App;
