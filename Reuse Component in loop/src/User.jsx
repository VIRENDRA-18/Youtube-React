function User ({data}) {
    return (
        <div style = {{border : '1px solid red',  padding : '10px', margin: '10px', width : '500px', borderRadius : '10px'}}>
            {/* <h1>
                User Components
            </h1> */}
            <h3>ID : <span style = {{color : "purple"}}>{data.id}</span></h3>
            <h3>Name : <span style = {{color : "purple"}}>{data.name}</span></h3>
            <h3>Email : <span style = {{color : "purple"}}>{data.email}</span></h3>
            <h3>Age : <span style = {{color : "purple"}}>{data.age}</span></h3>
        </div>
    );
}
export default User;