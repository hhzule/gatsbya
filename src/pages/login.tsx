import * as React from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="login-page-div">
      <Layout>
        <Login />
      </Layout>
    </div>
  );
};
export default LoginPage;
