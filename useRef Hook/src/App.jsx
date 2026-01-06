import { useRef } from 'react';
function App () {
  const inputRef = useRef(null);
  const inputHandler = () => {
       console.log(inputRef);
       inputRef.current.focus();
       inputRef.current.style.color='red';
       inputRef.current.placeholder="enter password";
       inputRef.current.value = '123';
  }

  const toggleHandler = () => {
    if(inputRef.current.style.displey != 'none'){
      inputRef.current.style.displey = 'none'
    }else {
      inputRef.current.style.displey = 'inline'
    }
      
  }
  return (
    <div>
      <h1>
        useRef Hook
      </h1>
      <button onClick={toggleHandler}>Toggle</button>
      <input ref = {inputRef} type = "text" placeholder="Enter your username"/>
      <button onClick={inputHandler}>Focus on input fiel</button>
    </div>
  );
}
export default App;