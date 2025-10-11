import React from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
    
    return <>
        <Header />
        <Outlet />
        <children />
    </>
}
export default Layout;