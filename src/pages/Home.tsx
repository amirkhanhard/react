import { useEffect, useState } from "react";
import RestaurantSkeleton from "../skeleton/RestaurantSkeleton";
import Restaurant, { withPromotedLabel } from "../components/Restaurant";

interface RestaurantInfo {
  name: string;
  cloudinaryImageId: string;
  locality: string;
  costForTwo: string;
  promoted?: boolean;
}

interface RestaurantType {
  info: RestaurantInfo;
}

interface ApiResponse {
  data?: {
    cards?: {
      card?: {
        card?: {
          gridElements?: {
            infoWithStyle?: {
              restaurants?: RestaurantType[];
            };
          };
        };
      };
    }[];
  };
}

const Home: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const WithPromotedLabel = withPromotedLabel(Restaurant);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = import.meta.env.VITE_API1 as string;
        const response = await fetch(url);
        const data = await response.json();
        setApiResponse(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const restaurants =
    apiResponse?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants ?? [];

  if (!apiResponse) return <RestaurantSkeleton />;

  return (
    <div className="flex flex-wrap gap-5">
      {restaurants.map((res, idx) => {
        const { promoted } = res.info;

        const Component = promoted || idx % 3 === 0 ? WithPromotedLabel : Restaurant;

        return <Component key={idx} restaurant={res} />;
      })}
    </div>
  );
};

export default Home;
