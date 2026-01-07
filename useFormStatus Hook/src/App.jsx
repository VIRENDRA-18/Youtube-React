import {useFormStatus} from 'react-dom'

function App () {

  const handleSubmit = async () => {
    await new Promise (res =>setTimeout(res, 2000));
    console.log('submit');
  }

  function CustomerForm () {
   const {pending} = useFormStatus();
   console.log(pending);

   return (
    <div>
       <input text = 'text' placeholder="Enter User Name "/>
        <br/><br/>
         <input text = 'password' placeholder="Enter User Password "/>
        <br/><br/>

      <button disabled={pending}>{pending? 'Submitting':'Submit'}</button>
    </div>
   )
  }
  return (
    <div>
      <h1>
        useFormStatus Hook
      </h1>
      <form action = {handleSubmit}>
        {/* <input text = 'text' placeholder="Enter User Name "/>
        <br/><br/>
         <input text = 'password' placeholder="Enter User Password "/>
        <br/><br/>

      <button>Submit</button> */}

      <CustomerForm/>
      </form>
    </div>
  );
}
export default App;