import React from "react";
import { Link } from "gatsby";
import fire from "../pages/firebase.png";
import git from "../pages/github.png";
import net from "../pages/netlify.png";
import ts from "../pages/typescript.svg";
import react from "../pages/react.png";
import gq from "../pages/graph.png";
import { FirebaseContext } from "../service";

const Header = () => {
  const { authToken } = React.useContext(FirebaseContext);
  console.log(authToken, "logg");
  return (
    <div className="header">
      <h1>Gatsby Blog</h1>
      <h2>
        {authToken ? (
          <Link to="/login">
            <h2>Logout</h2>
          </Link>
        ) : (
          <Link to="/login">
            <h2>Login</h2>
          </Link>
        )}
      </h2>
      <div className="icons">
        <img src={fire} alt="fire" />
        <img src={git} alt="git" />
        <img src={net} alt="net" />
        <img src={ts} alt="ts" />
        <img src={react} alt="react" />
        <img src={gq} alt="gq" />
      </div>

      {/* <Link to="/logout">Log Out</Link> */}
    </div>
  );
};

export default Header;
