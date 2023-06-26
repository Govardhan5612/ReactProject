import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Bridgelabz";
  let object ={
    firstName:"Govardhan",
    lastName:"Reddy"
  };
  return (
    <div className="App">
      <h1>Hello From {name}</h1>
      <h2>First Name : {object.firstName}</h2>
      <h2>Last Name : {object.lastName}</h2>
    </div>
  );
}

export default App;
