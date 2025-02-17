const UserList = (prop) => {
  return (
    <div>
      UserList
      {/* Rendering List Task */}
      {prop.userList.map((userList) => {
        return (
          <div className="" key={userList.id}>
            <h1>{userList.name}</h1>
            <p>{userList.id}</p>
            <h3>{userList.age}</h3>
          </div>
        );
      })}
      <button onClick={prop.handleClick}> Click To See</button>
      {/* <button>Click Me</button> */}
    </div>
  );
};

export default UserList;
