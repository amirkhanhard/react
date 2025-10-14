import React from "react";
import type { ReactNode } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
// import Hero from "../components/Hero";
// import useOnlineStatus from "./CustomHooks/useOnlineStatus";
// import OfflineComponent from "./OfflineComponent";

interface Layout1Props {
  children?: ReactNode;
}

const Layout1: React.FC<Layout1Props> = ({ children }) => {
  const status = false; // useOnlineStatus();

  if (!status) {
    return (
      <>
        <Header />
        {/* <Hero /> */}
        <div className="px-5 py-5">
          <Outlet />
          {children}
        </div>
        {/* <OfflineComponent /> */}
      </>
    );
  }

  // Uncomment and modify if you later add online/offline logic
  // return (
  //   <>
  //     <Header />
  //     <Outlet />
  //     {status ? children : <OfflineComponent />}
  //   </>
  // );

  return null;
};

export default Layout1;
