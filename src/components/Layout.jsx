import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "./CustomHooks/useOnlineStatus.js";
import OfflineComponent from "./OfflineComponent.jsx";

const Layout = ({ children }) => {
  let status = useOnlineStatus();
  if (!status) {
    return (
      <>
        <Header />
        <OfflineComponent />
      </>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      {status ? <children /> : <OfflineComponent />}
    </>
  );
};
export default Layout;
