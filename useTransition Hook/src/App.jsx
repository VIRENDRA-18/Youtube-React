import { useTransition } from "react";
import { startTransition } from "react";
import { useState } from "react";

function App () {

  // const [pending, setPending] = useState(false);
  const [pending, startTransition] = useTransition ();

  const handleButton = ()  => {

    startTransition(async ()=>{
      await new Promise(res=>setTimeout(res,2000));
    })

    // setPending(true);
    // await new Promise(res=>setTimeout(res,2000));


    //

    // setPending(false);

  }
  return (
    <div>
      <h1>
        useTransition Hook
      </h1>
      {
        pending?
        <img style = {{width : '100px'}} src = "https://tenor.com/search/gif-animation-loading-gifs" alt = ""/>
        :null
      }
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  );
}
export default App;