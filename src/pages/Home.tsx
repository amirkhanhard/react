import { useContext } from "react";
import { default as HomeComponent } from "../components/Home";
import UserContext from "../context/UserContext";

const Home: React.FC = () => {
  const { user } = useContext<any>(UserContext);
  return (
    <>
      <div className="m-5 font-bold">
        What's on your mind?
        {user.name}
      </div>
      <HomeComponent name="first" />
    </>
  );
};

export default Home;
