import User from "./User";
function App () {

  const displayName = (name) => {
    alert(name);
  }

  const displayFriend = () => {
    alert('kumkum');
  }

  // const displyNamev = (name) => {
  //   alert(name);
  // }

  return (
    <div>
      <h1>
        Pass Function in Component as Props
      </h1>
      {/* <User displayname = {displayName} Friend = {displayFriend} /> */}
      <User displayname = {displayName} name = 'Anisha'/>
      <User displayname = {displayName} name = 'Vikram'/>
      <User displayname = {displayName} name = 'rahul'/>
    </div>
  );
}
export default App;