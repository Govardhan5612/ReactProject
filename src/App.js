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
  const regex = RegExp("^[A-Z]{1}[a-z]{2,15}$")

  const [firstName, setFirstName] = useState(object);
  const [fError, setFError] = useState();
  const firstNameChange = (event) => {
    // console.log(event.target.value);
    if (regex.test(event.target.value)) {
      setFirstName({ firstName: event.target.value });
      setFError("");
    }
    else {
      setFError("Invalid");
    }


  };

  const [lastName, setLastName] = useState(object);
  const [lError, setLError] = useState();
  const lastNameChange = (event) => {
    // console.log(event.target.value);
    if (regex.test(event.target.value)) {
      setLastName({ lastName: event.target.value });
      setLError("");
    }
    else {
      setLError("Invalid");
    }
  };

  return (
    <div className="App">
      <div className="total">
        <h3>Hello From {name}</h3>
        <img src={Image} alt='' width='100' height='100' onClick={onClickImage}></img>
        <h4>First Name : {firstName.firstName}</h4>
        <h4>Last Name : {lastName.lastName}</h4>
        <label>First name:</label>
        <input type="text" name="firstName" onChange={firstNameChange} />
        <span>  {fError}</span><br></br>
        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={lastNameChange} />
        <span>  {lError}</span><br></br>
        <p>At BridgeLabz, we're a community of</p>
        <li>technologies</li>
        <li>thinkers</li>
        <li>builders</li>
        <p>Working together to keep the Tech Employability of Engineers alive and<br />
          accessible, so Tech Companies world wide can get contributors and creators<br />
          for Technology Solutions. We belive this act of human collaboration across<br />
          an employability platform is essential to individual growth and our collective<br />
          feature.<br />
          <br />
          To Known about us, visit BridgeLabz to learn even more about our mission<br />
          i.e. Employability to all.
        </p>
      </div>
    </div>
  );
}
//{error && <p>{error}</p>}

export default App;
