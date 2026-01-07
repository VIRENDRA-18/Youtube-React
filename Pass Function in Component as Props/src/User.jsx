// import React from 'react'

// const User = () => {

//     const displayName = ({name}) => {
//         alert('VIRU');
//     }

//   return (
//     <div>
//       <h1>
//         User components
//       </h1>

//       <button onClick={()=>displayName('VIRU')}>Diaplay user</button>
//     </div>
//   )
// }

// export default User

function User ({displayname, Friend, name}) {

    // const name = 'virendra';
    return (
        <div>
            {/* <button onClick={displayname}>Display Name</button> */}
            <button onClick = {()=>displayname(name)}>Dispaly name</button>
            <br/><br/>
            {/* <button onClick={Friend}>Display Friend</button> */}
            <br/><br/>
            

        </div>
    );
}
export default User;
