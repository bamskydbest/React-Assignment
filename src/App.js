import { useState, useEffect } from "react";
import "./App.css";
import StatusMessage from "./components/StatusMessage";
import StudentsList from "./components/StudentsList";
import UserList from "./components/UserList";
import RegistrationForm from "./components/RegistrationForm";
import UncontrolledRegistrationForm from "./components/UncontrolledRegistrationForm";
import SearchFiltering from "./components/SearchFiltering";
import Practice from "./components/Practice";
import LoopsAndReactSideEfect from "./components/LoopsAndReactSideEfect";
import axios from "axios";

function App() {
  // Data Types

  //string

  let firstName = "Abdulmajeed";
  let surName = "Mahmoud";
  let name = firstName + " " + surName;
  console.log(firstName, surName, name);

  // Number

  let calculation = 30;
  let price = 56000;
  console.log(calculation, price);

  // Boolean

  let male = true;
  let female = true;
  let others = false;

  console.log(male, female, others);

  // Addition (+)

  const addition = 3 + 5;
  const view = 50 + 40;
  const check = addition + view;
  console.log(addition, view, check);
  console.log("The result is " + check);

  // Subtraction (-)

  const takeAway = 100 - 27;
  const weUp = 10000 - 23000;
  console.log(takeAway, weUp);
  console.log("The result is " + weUp);

  // Multiplication

  const one = 50 * 2;
  const two = 100 * 20;
  console.log(one, two);
  console.log("The result is " + two);

  // Division

  const mahmoud = 100000 / 4;
  const taiye = 50 / 2;
  console.log(mahmoud, taiye);

  // Modulus

  const me = 64 % 4;
  const you = 140000 % 3;
  console.log(me, you);

  // fuction

  // Regular Function

  function sum() {
    const bought = 30000;
    const sell = 32000;
    const profit = sell - bought;
    console.log(profit);
  }
  sum();

  // Arrow Function

  const wash = () => {
    const school = "Compusoft Hub";
    const tutor = "Mr Damilare";
    const course = "Front-End Web Development";
    console.log(school, tutor, course);
  };
  wash();

  // Methods

  // dot length

  const move = "Movement";
  console.log(move.length);

  // touppercase

  const letter = "one innovation hub";
  console.log(letter.toUpperCase());

  //tolowercase

  const test = "ONOMATOPOIEA";
  console.log(test.toLowerCase());

  // split

  const splitt = "This is my first react class";
  console.log(splitt.split(" "));

  // Array

  const newArray = ["Mahmoud", "Abdulmajeed", "Chelsea", 1996, 29];
  console.log(newArray);
  console.log(newArray.length);

  const status = "success";
  // const status = "loading";
  // const status = "error";

  const userList = [
    {
      id: 1,
      name: "Mahmoud Abdulmajeed Taiye",
      age: 26,
    },
    {
      id: 2,
      name: "Sanusi Oyedeji Sanusi",
      age: 29,
    },
    {
      id: 3,
      name: "Bakare Rukayat",
      age: 27,
    },
    {
      id: 4,
      name: "Lawal Kolawole Wasiu",
      age: 33,
    },
  ];

  const [disappear, setDisappear] = useState(userList);
  // const filteredList = userList.filter((fill) => {
  //   return fill.userList > 18;
  // });
  const [userss, setUserss] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserss(response.data);

        //filter users whose name does not contain "v,p,k"
        const filtredUsers = response.data.filter((user) => {
          const name = user.name.toLowerCase();
          return (
            !name.includes("v") && !name.includes("p") && !name.includes("k")
          );
        });
        // console.log(filtredUsers);
        // 5 limit
        setUserss(filtredUsers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>
        This is a React App named Classroom -cra for a javascript Assignment
      </h1>
      <h2>Sanusi leave Tete , e go spoil your life</h2>
      <StudentsList />
      <StatusMessage status={status} />
      <UserList userList={disappear} setDisappear={setDisappear} />
      <RegistrationForm />
      <UncontrolledRegistrationForm />
      <SearchFiltering />
      <Practice />
      <LoopsAndReactSideEfect userss={userss} />
    </div>
  );
}

export default App;
