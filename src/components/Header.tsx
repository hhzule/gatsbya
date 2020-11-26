import React from "react";
import { Link } from "gatsby";
const Header = () => {
  return (
    <div className="header">
      <h1>Gatsby Blog</h1>
      <Link to="/login">Login In</Link>
      {/* <Link to="/logout">Log Out</Link> */}
    </div>
  );
};

export default Header;
