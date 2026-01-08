import React from 'react'
import College from './College';
import { SubjectContext } from './ContextData';
import { useState } from 'react';

function App() {
  const [subject, setSubject] = useState("English");
  return (
    <div style={{ backgroundColor: 'yellow', padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select value = {subject} onChange = {(event)=>setSubject (event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Math">Math</option>
          <option value="Hindi">Hindi</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>

        </select>
        <h1>Context API</h1>
        <button onClick={()=>setSubject("")}>Clear Subject</button>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
