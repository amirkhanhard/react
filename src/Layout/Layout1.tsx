import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";
// import Hero from "../components/Hero";
// import useOnlineStatus from "./CustomHooks/useOnlineStatus";
// import OfflineComponent from "./OfflineComponent";

// interface Layout1Props {
//   children?: ReactNode;
// }

// const Layout1: React.FC<Layout1Props> = ({ children }) => {
const Layout1: React.FC = () => {
  const status = false; // useOnlineStatus();
  const [user, setUser] = useState<any>({ name: "amir1" });
  if (!status) {
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        {/* <Hero /> */}
        <div className="px-5 py-5">
          <Outlet />
          {/* {children} */}
        </div>
        {/* <OfflineComponent /> */}
      </UserContext.Provider>
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
