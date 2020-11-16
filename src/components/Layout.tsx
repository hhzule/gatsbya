import React, { ReactNode } from "react";
import Header from "./Header";
type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <h1>site layout</h1>
      <Header title={title} />
      {children}
    </div>
  );
};

export default Layout;
