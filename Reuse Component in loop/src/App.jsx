import User from "./User";
function App () {
  const userData = [
    {
      name : 'VIRENDRA',
      age : 23,
      email : 'viru@test.com',
      id : 1
    },

    {
      name : 'MUDIT',
      age : 22,
      email : 'mudit@test.com',
      id : 2
    },

    {
      name : 'NISHA',
      age : 21,
      email : 'nisha@test.com',
      id : 3
    },

    {
      name : 'ANISHA',
      age : 24,
      email : 'anisha@test.com',
      id : 4
    }
  ]
  return (
    <div>
      <h1>
        Reuse Component in loop
      </h1>
      {
        userData.map((user)=>(
          <div key={user.id}>
            <User data = {user}/>
            </div>
        ))
          
        
      }
      
    </div>
  );
}
export default App;

