import { createContext } from "react";

const UserContext = createContext<any>({user:"amir",setUser:1});

export default UserContext;