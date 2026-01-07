

function AddUser ({setUser}) {
  // const [user, setUser] = useState("");
  return (
    <div>
      <h1>AddUser </h1>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter User Name" />
      <hr/>

    </div>
  )
}

export default AddUser;
