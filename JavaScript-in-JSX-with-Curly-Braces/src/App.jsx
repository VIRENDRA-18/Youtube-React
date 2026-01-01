

import './App.css'

function App() {

  const Name = "VIRU SINGH";

  const userobj = {
    name : "Kumkum",
    Age : 21,
    Email : "kumkum@123"
  }

  const Arr1 = ["VIRU", "KUMKUM", "ANISHA"];
  let a = 12;
  let b = 7;
  let sum = a + b;

  let path = "https://m.media-amazon.com/images/I/81ujA49MtHL._AC_UF894,1000_QL80_.jpg"

  function Fruits () {
    return "Apple"
  }

  function Sum ( x, y) {
    return x * y
  }


  return (
    <>
      <h1>{Name}</h1>
      <h2>My favourite fruit is : {Fruits()}</h2>
      <h3>Sum of a + b is : {sum}</h3>
      <h4>{a + b}</h4>
      <h4>{Sum(10, 5)}</h4>
      <h2>{userobj.Email}</h2>
      <h3>{Arr1[2]}</h3>
      <img 
      src = {path}
      />

      

    </>
  );
}

export default App


