import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <h1>site layout</h1>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
