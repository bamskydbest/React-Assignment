const UncontrolledRegistrationForm = () => {
  const handleClick = () => {};
  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" required />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>

        <div>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input type="password" id="confirmpassword" required />
        </div>
        <div>
          <p>Gender</p>
          <div className="radio">
            <label htmlFor="male" className="radioo">
              Male:
            </label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              required
              className="male"
            />

            <label htmlFor="female" className="radioo">
              Female:
            </label>
            <input type="radio" name="gender" id="female" required />
          </div>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledRegistrationForm;
