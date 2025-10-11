import React, { useEffect } from "react"

const Home = ({children}) => {
    useEffect(()=> {
        const timer = setInterval(()=> {
            console.log("home started");
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    },[])
    return <>
        Home content goes here
    </>
}
export default Home;