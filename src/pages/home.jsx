import "./home.css";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="home">
           <div className="text">
            <h2>Welcome to Organika store! </h2>
            <h4>Fresh food, 1-click away.</h4>

            <NavLink to="/catalog"><button className="btn btn-lg btn-success"> Our fresh catalog</button> </NavLink>
          </div>

          <img src="./" alt="" />
        </div>
    );
}

export default Home;
