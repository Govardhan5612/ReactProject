import './App.css';
import Image from './logo1.png';

function App() {
  const name = "Bridgelabz";
  let object = {
    firstName: "Govardhan",
    lastName: "Reddy"
  };
  return (
    <div className="App">
      <h1>Hello From {name}</h1>
      <img src={Image} alt='' width='300' height='300'></img>
      <h2>First Name : {object.firstName}</h2>
      <h2>Last Name : {object.lastName}</h2>
    </div>
  );
}

export default App;
