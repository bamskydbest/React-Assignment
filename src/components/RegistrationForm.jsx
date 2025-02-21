import axios from "axios";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    // alert("You are about to submit your form!");
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password || !confirmpassword || !gender) {
      alert("All fields must be filled before submission!");
      return;
    }
    if (password !== confirmpassword) {
      alert("Password Must Match with Confirm Password");
      return;
    }

    const formData = {
      name: name,
      email: email,
      password: password,
      gender: gender,
    };

    try {
      await axios.post("http://localhost:3000/students", formData);
      setLoading(false);
      setName("");
      setEmail("");
      setGender("");
      setPassword("");
      setConfirmPassword("");
      alert("Registration with axios is successful");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setName("");
      setEmail("");
      setGender("");
      setPassword("");
      setConfirmPassword("");
      alert("Error in form submission");
    }
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmpassword"
            value={confirmpassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
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
              checked={gender === "male"}
              required
              onChange={(e) => setGender(e.target.value)}
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
              checked={gender === "female"}
              required
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn">
          {loading ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
