import { useState } from "react";

function App () {
    // const [name , setName] = useState('VIRU');

    const [data, setData] = useState({
        name : 'VIKRAM',
        address : {
            city : "Jodhour",
            country : 'India'
        }
    })

     const handleName = (val) => {
        // setName('VIRENDRA');
        data.name=val
        console.log(data);

        setData({...data});
    } 

    const handleCity = (city) => {
        data.address.city = city;
        console.log(data);

        setData ({...data,address:{...data.address}})
    }
  return (
    <div>
        <h1>
            Updating Objects in State
        </h1>
        {/* <h2>{name}</h2> */}
        {/* <button onClick={handleName}>Update Name </button> */}
        <input text = 'text'update name placeholder="update name " onChange={(e)=>handleName(e.target.value)}/>
        <input text = 'text'update name placeholder="update city" onChange={(e)=>handleCity(e.target.value)}/>
        <h2>Name : {data.name}</h2>
        <h2>City : {data.address.city}</h2>
        <h2>Country : {data.address.country}</h2>
    </div>
  );
}
export default App;