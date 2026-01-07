import { useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const handleAddUsers = () => {
    setUsers([...users, user]);
  }
  // console.log(users);

  const total = users.length; // Drive state because hmne yaha pe state ki bejaii variable mai data store kiya hai
  const last = users[users.length-1];  // Drive state
  const unique = [...new Set(users)].length;  // Drive state
  return (
    <div>
      <h2>Total User : {total} </h2>
      <h2>Last User : {last} </h2>
      <h2>Unique Total User : {unique} </h2>
        
      <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Add new user" />
      <button onClick={handleAddUsers}>Add User</button>
      {
        users.map((item,index)=>(
          <h4 key = {index}>{item}</h4>
        ))
      }
    </div>
  );
}
export default App;