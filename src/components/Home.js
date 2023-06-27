import { Component } from "react";
import Image from "../logo1.png";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        const onClickImage = () => {
          console.log("On click image");
          window.open('https://www.bridgelabz.com', 'blank');
        }
        return (
            <div>
                <img src={Image} alt='' width='100' height='100' onClick={onClickImage}></img>
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
                <Link to="/footer">
            <input type="submit" value="Back to Footer"/>
        </Link>
            </div>
        );
    }
}

export default Home;