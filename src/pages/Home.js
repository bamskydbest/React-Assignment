import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changer } from "../redux/student/tasksSlice";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Module 19 project";
  const { name, height, age, course, religion } = useSelector(
    (store) => store.tasks
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changer("Bamsky_Dbest"));
  };

  const items = [
    {
      id: 1,
      name: "Mahmoud Abdulmajeed Taiye",
      description: "Black and Tall",
    },
    {
      id: 2,
      name: "Sanusi Oyedeji Sanusi",
      description: "Black and Medium height",
    },
    {
      id: 3,
      name: "Bakare Rukayat Olaitan",
      description: "Open Minded person ",
    },
    {
      id: 4,
      name: "Abayomi Abdulazeez Lekan",
      description: "Tall and thin",
    },
    {
      id: 5,
      name: "Lawal Wasiu Kolawole",
      description: "Light and promiscous ",
    },
    {
      id: 6,
      name: "Oyewale Feranmi",
      description: "`Tall and a church guy` ",
    },
  ];
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
        <div className="">
          <Link to={`/details/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
