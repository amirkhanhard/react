import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import json53745 from "../json/53745.json";
import json24144 from "../json/24144.json";
import RecommendedSkeleton from "../skeleton/RecommendedSkeleton";
import RestaurantTabs from "../components/RestaurantTabs";

function RestaurantInfo() {
  const { id } = useParams();
  const [restaurantInformation, setRestaurantInformation] = useState<any>({});

  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      try {
        // const resUrl = import.meta.env.VITE_RESTAURANT_INFO as string;
        // const restaurantUrl = resUrl.replace("RESTAURANT_ID", id);
        // console.log(restaurantUrl);

        // const response = await fetch(restaurantUrl);
        // const restaurantInfo = await response.json();
        // console.log(response);

        let data: any = null;
        if (id == "53745") {
          data = json53745;
        } else if (id == "24144") {
          data = json24144;
        } else {
          data = json24144;
        }
        setTimeout(() => {
          setRestaurantInformation(data);
        }, 2000);
      } catch (err) {
        console.log("Something went wrong ", err);
      }
    };
    fetchRestaurantInfo();
  }, []);
  // console.log(restaurantInformation);

  const infoArray: any =
    restaurantInformation?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards; //
  const restaurantData: any =
    restaurantInformation?.data?.cards?.[2]?.card?.card?.info;
  // console.log(infoArray);

  const [showItemIndex, setShowItemIndex] = useState<any>(null);
  if (!infoArray) {
    return <RecommendedSkeleton />;
  }

  return (
    <>
      <ul className="w-1/2 m-auto">
        <div className="card bg-base-100 image-full my-5 shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-red-900">{restaurantData?.name}</h2>
            <div className="text-red-900">
              <div className="rating rating-lg rating-half">
                <input
                  type="radio"
                  name="rating-11"
                  className="rating-hidden"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1 bg-red-500"
                  aria-label="0.5 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2 bg-red-500"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1 bg-red-500"
                  aria-label="1.5 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2 bg-red-500"
                  aria-label="2 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1 bg-red-500"
                  aria-label="2.5 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2 bg-red-500"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1 bg-red-500"
                  aria-label="3.5 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2 bg-red-500"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-1 bg-red-500"
                  aria-label="4.5 star"
                />
                <input
                  type="radio"
                  name="rating-11"
                  className="mask mask-star-2 mask-half-2 bg-red-500"
                  aria-label="5 star"
                />
              </div>
              {/* <Star /> */}
              {restaurantData?.avgRating}
              <p>({restaurantData?.totalRatingsString})</p>
            </div>
            <h1 className="text-red-900">
              Delivery Time :- {restaurantData?.sla?.minDeliveryTime} -{" "}
              {restaurantData?.sla?.maxDeliveryTime}
            </h1>
          </div>
        </div>

        {infoArray &&
          infoArray.map((info: any, idx: number) => {
            return (
              <RestaurantTabs
                key={idx}
                info={info}
                showItem={showItemIndex == idx ? true : false}
                setShowItemIndex={() => {
                  setShowItemIndex(() => {
                    return idx == showItemIndex ? null : idx;
                  });
                }}
              />
            );
          })}
      </ul>
    </>
  );
}

export default RestaurantInfo;
