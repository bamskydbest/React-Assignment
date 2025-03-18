import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addition, changer } from "../redux/student/tasksSlice";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Module 19 project";
  const { name, height, age, course, religion, items } = useSelector(
    (store) => store.tasks
  );
  const [namee, setNamee] = useState("");
  const [description, setDiscription] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changer("Bamsky_Dbest"));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: namee,
      description: description,
      id: items.length + 1,
    };
    dispatch(addition(newItem));
  };
  console.log(items);

  return (
    <div>
      <h1> This page for home page</h1>
      <h1>Is this your name ? : {name}</h1>
      <h1> You have a height of {height}</h1>
      <h1>You are {age} years old. </h1>
      <h1>He is currently studying {course} </h1>
      <h1>His religion is {religion} </h1>
      <button className="" onClick={handleClick}>
        Change Name
      </button>

      {items.map((item) => (
        // key={item.id}
        <div className="" key={item.id}>
          <Link to={`/details/${item.id}`}>{item.name}</Link>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title : </label>
        <input
          type="text"
          id="title"
          value={namee}
          onChange={(e) => setNamee(e.target.value)}
        />

        <label htmlFor="description"> Description : </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
        />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Home;
