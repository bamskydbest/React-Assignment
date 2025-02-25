import React, { useState } from "react";

const Practice = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const handleBtn = (e) => {
    alert("you have clicked a button");
    e.preventDefault();
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

            <label htmlFor="female">Male</label>
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
