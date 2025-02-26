const LoopsAndReactSideEfect = (prop) => {
  //   const userss = prop.userss;

  return (
    <div>
      {/* LoopsAndReactSideEfect
      {prop.userss.map((user) => {
        return (
          <div className="" key={user.id}>
            <h3 className="">Name: {user.name}</h3>
          </div>
        );
      })} */}

      {prop.userss.map((userss) => {
        return (
          <div className="extract" key={userss.id}>
            <h1 className="">Name : {userss.name}</h1>
            <h2 className="">Username: {userss.username}</h2>
            <h2 className="">Email: {userss.email}</h2>
            {/* <p className="">Address: {userss.address}</p> */}
            <p className="">Street: {userss.address.street}</p>
            <p className="">Suite: {userss.address.suite}</p>
            <p className="">City: {userss.address.city}</p>
            <p className="">Zipcode: {userss.address.zipcode}</p>
            {/* <p className="">Geo: {userss.address.geo}</p> */}
            <p className="">Latitude: {userss.address.geo.lat}</p>
            <p className="">Longitude: {userss.address.geo.lng}</p>
            <p className="">Phone: {userss.phone}</p>
            <p className="">Website: {userss.website}</p>
            <p className="">Company Name: {userss.company.name}</p>
            <p className="">
              Company Catchphrase: {userss.company.catchPhrase}
            </p>
            <p className="">Company BS: {userss.company.bs}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LoopsAndReactSideEfect;
