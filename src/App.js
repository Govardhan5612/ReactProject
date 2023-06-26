import './App.css';
import Image from './logo1.png';
import { useState } from "react";

function App() {
  const name = "Bridgelabz";
  let object = {
    firstName: "",
    lastName: ""
  };
  const onClickImage = () => {
    console.log("On click image");
    window.open('https://www.bridgelabz.com', 'blank')
  }
  const [firstName, setFirstName] = useState(object);
  const firstNameChange = (event) => {
    console.log(event.target.value);
    setFirstName({ firstName: event.target.value });
  };
  const [lastName, setLastName] = useState(object);
  const lastNameChange = (event) => {
    console.log(event.target.value);
    setLastName({ lastName: event.target.value });
  };


  return (
    <div className="App">
      <h1>Hello From {name}</h1>
      <img src={Image} alt='' width='300' height='300' onClick={onClickImage}></img>
      <h2>First Name : {firstName.firstName}</h2>
      <h2>Last Name : {lastName.lastName}</h2>
      <label>First name:</label>
      <input type="text" name="firstName" onChange={firstNameChange} />
      <label>Last Name:</label>
      <input type="text" name="lastName" onChange={lastNameChange} />
    </div>
  );
}

export default App;
