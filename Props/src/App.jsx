import User from "./User";
import User1 from "./User1";
import Wapper from "./Wapper";


function App () {

  let userOject = {
    name : 'VIRENDRA', 
    age : 23,
    role : "Fronted-End Developer"
  }

  
  let userOject1 = {
    name : 'KUMKUM', 
    age : 21,
    role : "Nursh"
  }

  
  let userOject2 = {
    name : 'MUDIT', 
    age : 22,
    role : "Distric Collector"
  }
  return (
    <div>
      <h1>Props in react</h1>

      <Wapper>
        <h2>Hii Everyone!</h2>
      </Wapper>

      <Wapper>
        <h2>Hii VIRENDRA!</h2>
      </Wapper>
      {/* <User Name = "VIRU"Age = "23" Emial = "viru@2005gmail.com" Role = "React.js developer"/> */}

      {/* <User User = {userOject}/>
      <User User = {userOject1}/>
      <User User = {userOject2}/> */}

      {/* <User1 name = "Love"/>
      <User1 name = "Mudit"/>
      <User1 name = "VIRU"/>
      <User1/> */}


    </div>
  );
}

export default App;