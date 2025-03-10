import axios from "axios";
import React, { useState } from "react";

const Practice = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleBtn = async (e) => {
    // alert("you have clicked a button");
    e.preventDefault();

    if (password !== confirmpassword) {
      alert("Password and Confirmpassword must match");
      return;
    }
    if (!fullname || !email || !password || !confirmpassword || !gender) {
      alert(
        "You have to complete the form submission and fill out the empty fields!!"
      );
      return;
    }

    const data = {
      fullname: fullname,
      email: email,
      password: password,
      gender: gender,
    };

    try {
      const response = await axios.post("http://localhost:3000/Practice", data);
      console.log(response);
      alert("Form submission with axios is successful!!!");
    } catch (error) {
      console.error(error);
      alert("Form submission with axios is unsuccessful!!!!");
    }
  };
  return (
    <div>
      <h1>Controlled form practice</h1>

      <form onSubmit={handleBtn}>
        <div className="">
          <label htmlFor="name">Full-Name : </label>
          <input
            type="text"
            id="name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>

        <div className="">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label htmlFor="confirm-password">Confirm-Password : </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <p>Gender :</p>

          <div className="">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              required
              onChange={(e) => setGender(e.target.value)}
            />

            <label htmlFor="female">Female</label>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Practice;
