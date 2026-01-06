import React, { useEffect } from 'react'

const Counter = ({count, data}) => {

    useEffect (()=> {
        console.log("mounting phase only");
    }, []);

    useEffect (()=> {
        console.log("updating phase only");
    }, [count]);

    useEffect (()=>{
      return () =>{
        console.log("unmount phase");
      }
    })



    
  return (
    <div>
      <h1>Counter value : {count}</h1>
       <h1>Data value : {data}</h1>
    </div>
  )
}

export default Counter;
