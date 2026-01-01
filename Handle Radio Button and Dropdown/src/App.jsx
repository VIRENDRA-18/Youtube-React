import { useState } from "react";

function App () {
  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("Jaipur");
  return (
    <div>
       <h1>Handle Radio Button and Dropdown</h1>
       <h3>Select Gender</h3>
       <input type = "radio" onChange={(e) => setGender(e.target.value)} name = "gender" value = {'male'} checked = {gender == 'male'} id = "male"/>
       <label htmlFor = "male">Male</label>
       <input type = "radio" onChange={(e) => setGender(e.target.value)} name = "gender" value = {'female'} checked = {gender == 'female'} id = "female"/>
       <label htmlFor ="female">Female</label>
       <h2>Selected Gender : {gender}</h2>


       <br/><br/><br/>
       <h4>Select City</h4>

       <select onChange={(e)=> setCity(e.target.value)} defaultValue={'Jaipur'}>
        <option value = "Jodhpur">JODHPUR</option>
        <option value = "Jaipur">JAIPUR</option>
        <option value = "Nagaur">NAGAUR</option>
        <option value = "Noida">NOIDA</option>
       </select>
       <h3>Select City : {city}</h3>
    </div>
  );
}

export default App;