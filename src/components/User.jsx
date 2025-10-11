import React from "react"
import { useParams } from "react-router-dom";

const User = ({children}) => {
    const {userId} = useParams();
    return <>
        User({userId}) content goes here
    </>
}
export default User;