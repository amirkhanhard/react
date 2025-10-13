import { useEffect, useState } from "react";
import RestaurantSkeleton from "../skeleton/RestaurantSkeleton";

function Home() {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {}
  }, []);

  const fetchData = async () => {
    const url = import.meta.env.VITE_API1;

    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    setApiResponse(data);
  };
  const restaurents =
    apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  console.log(restaurents);
  if (apiResponse.length == 0) return <RestaurantSkeleton />;

  return (
    <div className="flex flex-wrap gap-5">
      {restaurents &&
        restaurents.map((res:any,idx:any) => {
          const {name, cloudinaryImageId,locality,costForTwo} = res?.info;
          return (
            <div key={idx} className="card bg-base-100 w-70 shadow-sm">
              <figure>
                <img
                  src={import.meta.env.VITE_IMAGE_PREFIX+"/"+cloudinaryImageId}
                  alt="Shoes"
                  width="200px"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                 {locality}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
