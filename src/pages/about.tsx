import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import "./about.module.css";

const about = () => {
  return (
    <div>
      <Layout>
        <h1>about</h1> About 📄
        <Link to="/">Home</Link>
      </Layout>
    </div>
  );
};

export default about;
