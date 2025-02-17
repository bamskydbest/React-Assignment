const StatusMessage = (prop) => {
  return (
    <div>
      StatusMessage
      {/* Conditional Rendering Task */}
      {prop.status === "success" && (
        <p className="">The status message is: Operation Successful</p>
      )}
      {prop.status === "loading" && (
        <p className="load">The status message is : Loading...</p>
      )}
      {prop.status === "error" && <p className="">An Error Occurred</p>}
    </div>
  );
};

export default StatusMessage;
