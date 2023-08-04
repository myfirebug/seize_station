import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  return (
    <div className="cms-home">
      home
      <Link to="/my">my</Link>
    </div>
  );
};

export default Home;
