import React, { useEffect } from 'react'

const Counter = ({count, data}) => {

    function handleCounter () {
        console.log("handleCounter called")
    }

    function handleDate () {
        console.log("handleData called");
    }
     
    // handleDate();
  

    useEffect (()=>{
         handleCounter();
    }, [])

    useEffect (()=>{
         handleDate();
    },[data])

      

    // handleCounter();
  return (
    <div>
      <h1>Counter value : {count}</h1>
       <h1>Data value : {data}</h1>
    </div>
  )
}

export default Counter
