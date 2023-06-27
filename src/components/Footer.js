import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Footer(){
    let object = {
      firstName: "",
      lastName: ""
    };
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
      <div>
        <Link to="/home">
            <input type="submit" value="Back to Home"/>
        </Link>
          <h4>First Name : {firstName.firstName}</h4>
          <h4>Last Name : {lastName.lastName}</h4>
          <label>First name:</label>
          <input type="text" name="firstName" onChange={firstNameChange} />
          <span>  {fError}</span><br></br>
          <label>Last Name:</label>
          <input type="text" name="lastName" onChange={lastNameChange} />
          <span>  {lError}</span><br></br>
        </div>
    );

}
export default Footer;