function User ({User}) {
    return (
        <div>
            {/* <h1>User Components</h1> */}
            {/* <h2>Name : {Name} , Age : {Age}</h2> */}
            <hr/>
            <h2> Name : {User.name}</h2>
            <h2>Age : {User.age}</h2>
            <h2>Role : {User.role}</h2>
          
            

        </div>
    );
}

export default User;