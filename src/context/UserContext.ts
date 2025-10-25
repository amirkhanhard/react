import { createContext, Dispatch, SetStateAction } from "react";

interface User {
  name: string;
}

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextType>({
  user: { name: "amir" },
  setUser: () => {}, // placeholder function
});

export default UserContext;
