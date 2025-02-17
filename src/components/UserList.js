const UserList = (prop) => {
  return (
    <div>
      UserList
      {/* Rendering List Task */}
      <div>
        {prop.userList.map((userList) => {
          return (
            <div className="" key={userList.id}>
              <h1>{userList.name}</h1>
              <p>{userList.id}</p>
              <h3>{userList.age}</h3>
            </div>
          );
        })}
      </div>
      <button onClick={prop.setDisappear([])}> Click To See</button>
      {/* <button>Click Me</button> */}
    </div>
  );
};

export default UserList;
