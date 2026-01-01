import { useState } from "react";

function CheckBoxes () {
    const [skills, setSkills] = useState([]);
    const handleSkills = (e) =>{
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            setSkills([...skills, e.target.value ]);
        }else{
            setSkills([...skills.filter((item)=>item!=e.target.value)]);
        }
    }
    return (
        <div>
           <h1>Selects your skills</h1>
           <input onChange={handleSkills} type = "checkbox" id = "html" value = "HTML"/>
           <label html for = "html">HTML</label>

           <br/>
           <br/>

           <input onChange={handleSkills} type = "checkbox" id = "css" value = "CSS"/>
           <label html for = "css">CSS</label>

           <br/>
           <br/>

           <input onChange={handleSkills} type = "checkbox" id = "Javascript" value = "JAVASCRIPT"/>
           <label html for = "Javascript">JAVASCRIPT</label>

           <br/>
           <br/>

           <input onChange={handleSkills} type = "checkbox" id = "react" value = "REACT"/>
           <label html for = "react">REACT</label>
           <h1>{skills}</h1>
        </div>
    );
}
export default CheckBoxes;