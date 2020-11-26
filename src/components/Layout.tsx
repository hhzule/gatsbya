import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FirebaseProvider } from "../service";
type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  console.log("layout running");
  return (
    <div>
      <FirebaseProvider>
        <Header />
        {children}
        <Footer />
      </FirebaseProvider>
    </div>
  );
};

export default Layout;
