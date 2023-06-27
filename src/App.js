import './App.css';
import HomeComponent from "./components/Home";
import FooterComponent from "./components/Footer";
import {Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div> 
      <h1>Welcome to BridgeLabz</h1>   
      <Routes>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/footer" element ={<FooterComponent/>}/>
      </Routes>
      </div>
  );
}
//{error && <p>{error}</p>}

export default App;