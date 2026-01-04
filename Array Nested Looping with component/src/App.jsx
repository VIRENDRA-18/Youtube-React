import College from "./College";
function App () {
  const collegeData = [
    {
      name : "JIET",
      city : "Jodhpur",
      website : "www.jiet.com",
      student : [
        {
          name : 'Virendra',
          age : 22,
          email : 'viru@jiet.com'
        },

        {
          name : 'Aman',
          age : 21,
          email : 'aman@jiet.com'
        },

        {
          name : 'Himanshu',
          age : 23,
          email : 'himanshu@jiet.com'
        }
      ]
    },

    {
      name : "IIT Jodhpur",
      city : "Nagaur",
      website : "www.iit.com",
      student : [
        {
          name : 'Shyam',
          age : 20,
          email : 'shyam@iit.com'
        },

        {
          name : 'Piyush',
          age : 24,
          email : 'piyush@iit.com'
        },

        {
          name : 'Kanav',
          age : 22,
          email : 'kanav@iit.com'
        }
      ]
    },

    {
      name : "SKIT",
      city : "Jaipur",
      website : "www.skit.com", 
      student : [
        {
          name : 'Kumkum',
          age : 22,
          email : 'kumkum@skit.com'
        },

        {
          name : 'Anisha',
          age : 21,
          email : 'anisha@skit.com'
        },

        {
          name : 'Chandrima',
          age : 23,
          email : 'chandrima@skit.com'
        }
      ]
    }
    
  ]
  return (
    <div style = {{}}>
      <h1>Array Nested Looping with components</h1>
      {
        collegeData.map((college,index)=>(
          <div key={index}>
           <College college = {college}/>

          </div>

        ))
      }
    </div>
  );
}
export default App;