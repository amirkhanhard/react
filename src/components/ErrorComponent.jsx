import React, { useEffect } from "react"
import { useRouteError } from "react-router-dom";

const ErrorComponent = ({children}) => {
    const err = useRouteError();
   
    return <>
        Error content goes here
        {err.status}/{err.statusText}
    </>
}
export default ErrorComponent;