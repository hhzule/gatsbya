import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";
import Layout from "../components/Layout";
import "./about.module.css";

const about = () => {
  return (
    <div>
      <Layout title="header title from layout">
        <Header title="from about" />
        <h1>about</h1> About 📄
        <Link to="/">home</Link>
      </Layout>
    </div>
  );
};

export default about;
