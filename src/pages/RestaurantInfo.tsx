import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import json53745 from "../json/53745.json";
import json24144 from "../json/24144.json";
import Recommended from "../components/Recommended";
import RecommendedSkeleton from "../skeleton/RecommendedSkeleton";

function RestaurantInfo() {
  const { id } = useParams();
  const [restaurantInformation, setRestaurantInformation] = useState<any>({});

  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      try {
        const resUrl = import.meta.env.VITE_RESTAURANT_INFO as string;
        const restaurantUrl = resUrl.replace("RESTAURANT_ID", id);
        // console.log(restaurantUrl);

        const response = await fetch(restaurantUrl);
        // const restaurantInfo = await response.json();
        // console.log(response);

        let data: any = null;
        if (id == "json53745") {
          data = json53745;
        } else if (id == "json24144") {
          data = json24144;
        } else {
          data = json24144;
        }
        setRestaurantInformation(data);
      } catch (err) {
        console.log("Something went wrong ", err);
      }
    };
    fetchRestaurantInfo();
  }, []);
  // console.log(restaurantInformation);

  const recommended:any =
    restaurantInformation?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[2]?.card?.card;

  console.log(recommended);

  return (
    <>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          <b>{recommended?.title}</b>
        </div>
        <div className="collapse-content text-sm ">
          {!recommended ? (
            <RecommendedSkeleton />
          ) : (
            recommended?.itemCards &&
            recommended.itemCards.map((item: any, idx: number) => {
              return <Recommended key={"id_" + idx} itemCard={item} />;
            })
          )}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
    </>
  );
}

export default RestaurantInfo;
