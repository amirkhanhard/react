import React from "react";
import Header from "../components/Header.js";
import { Outlet } from "react-router-dom";
import Hero from "../components/Hero.js";
// import useOnlineStatus from "./CustomHooks/useOnlineStatus.js";
// import OfflineComponent from "./OfflineComponent.jsx";
interface Children {
    children:React.FC
}
const Layout1 = ({ children }:Children) => {
  let status = false;//useOnlineStatus();
  if (!status) {
    return (
      <>
        <Header />
        {/* <Hero></Hero> */}
        <div className="px-5 py-5">
            <Outlet />
        </div>
        {/* <OfflineComponent /> */}
      </>
    );
  }

//   return (
//     <>
//       <Header />
//       <Outlet />
//       {status ? <children /> : <OfflineComponent />}
//     </>
//   );
};
export default Layout1;