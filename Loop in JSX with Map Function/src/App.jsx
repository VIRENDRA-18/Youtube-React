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
        Loop in JSX with Map Function
      </h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
            </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>(
              <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            </tr>
            ))
           
          }
        </tbody>
      </table>
    </div>
  );
}
export default App;

