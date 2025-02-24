import axios from "axios";
const UncontrolledRegistrationForm = () => {
  const handleClick = async (e) => {
    e.preventDefault();

    const registrationData = new FormData(e.target);
    const data = Object.fromEntries(registrationData.entries());

    if (
      !data.userName ||
      !data.userConfirmPassword ||
      !data.userPassword ||
      !data.userEmail ||
      !data.gender
    ) {
      alert("All fields must be filled");
      return;
    }

    if (data.userPassword !== data.userConfirmPassword) {
      alert("Password field must be the same");
      return;
    }

    const newObject = {
      name: data.userName,
      email: data.userEmail,
      password: data.userPassword,
      gender: data.gender,
    };
    try {
      const response = axios.post("http://localhost:3000/students", newObject);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Uncontrolled Registration Form</h1>
      <form onSubmit={handleClick}>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" name="userName" required />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="userEmail" required />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="userPassword" required />
        </div>

        <div>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmpassword"
            name="userConfirmPassword"
            required
          />
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
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              required
            />
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
