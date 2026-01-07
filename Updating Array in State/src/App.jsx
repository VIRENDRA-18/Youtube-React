import React from 'react'
import { useState } from 'react';

function App() {
  const [data, setData] = useState([
    'VIRENDRA', 'KUMKUM', 'MUDIT'
  ])

  const [dataDetails, setDataDetails] = useState([

    { name: 'Meena', age: 20 },
    { name: 'Anisha', age: 21 },
    { name: 'Nisha', age: 22 },

  ])

  const handleUser = (name) => {
    // console.log(name);
    data[data.length - 1] = name;
    console.log(data);
    setData([...data])
  }

  const handleAge = (age) => {
    // console.log(name);
    dataDetails[dataDetails.length - 1].age = age;
    console.log(dataDetails);
    setDataDetails([...dataDetails])
  }
  return (
    <div>
      <h1>Updating Array in State</h1>
      <input text="text" placeholder='enter last user name' onChange={(e) => handleUser(e.target.value)} />
      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }

      <hr />
      <input text="text" placeholder='enter last user age' onChange={(e) => handleAge(e.target.value)} />
      {
        dataDetails.map((item, index) => (
          <h4 key={index}>{item.name}, {item.age}</h4>
        ))
      }

    </div>
  );
}

export default App
