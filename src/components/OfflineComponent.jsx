import React, { useEffect } from "react"
import { useRouteError } from "react-router-dom";

const OfflineComponent = () => {
    const err = useRouteError();
   
    return <>
        Oops !
        Please check your internet connection
    </>
}
export default OfflineComponent;