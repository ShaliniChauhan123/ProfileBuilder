import React from "react";
import { Link } from "react-router-dom";
import "grapesjs/dist/css/grapes.min.css";

const Home = (props) => {
  const { handleLogout } = props;
  return (
    <section className="hero">
      <nav>
        <h2>Profile Builder App</h2>
        <Link to="/template">
          <button>Start</button>
        </Link>
        <button onClick={() => handleLogout()}>Logout</button>
      </nav>
    </section>
  );
};
export default Home;
