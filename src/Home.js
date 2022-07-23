import React from "react";

const Home = (props) => {
  const { handleLogout } = props;
  return (
    <section className="hero">
      <nav>
        <h2>Profile Builder App</h2>
        <button onClick={() => handleLogout()}>Logout</button>
      </nav>
    </section>
  );
};
export default Home;
