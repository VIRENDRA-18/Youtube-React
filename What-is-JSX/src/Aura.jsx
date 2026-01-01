function Aura () {
    function callFun () {
        alert("function called");
    }
  return (
    <div>
      <h1>Aura Of VIRU</h1>
      <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Range-Rover-Velar/12767/1758105499465/front-left-side-47.jpg"
       alt="VIRU" 
       class = "photo"
       />
       <ul>
        <li>Invent new logic concept</li>
        <li>I love driving</li>
        <li>My favorite car is Range Rover</li>
       </ul>
       <button onClick={callFun}>Click me </button>
    </div>
  );
}
export default Aura;