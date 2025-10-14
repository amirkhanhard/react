import React from "react";
import { Link } from "react-router-dom";

interface RestaurantInfo {
  name: string;
  cloudinaryImageId: string;
  locality: string;
  costForTwo: string;
}

interface RestaurantProps {
  restaurant: {
    info: RestaurantInfo;
  };
}

const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  const { name, cloudinaryImageId, locality, costForTwo } = restaurant?.info;
  const restaurantLink = restaurant?.cta?.link;
    console.log(restaurantLink);
  return (
    <div className="card bg-base-100 w-70 shadow-sm">
      <figure>
        <img
          src={`${import.meta.env.VITE_IMAGE_PREFIX}/${cloudinaryImageId}`}
          alt={name}
          width="200"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><Link to={`/${restaurantLink}`}>{name}</Link></h2>
        <p>{locality}</p>
        <p>{costForTwo}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

// ✅ Correctly typed Higher-Order Component (HOC)
export const withPromotedLabel = (
  WrappedComponent: React.ComponentType<RestaurantProps>
): React.FC<RestaurantProps> => {
  return (props) => (
    <div className="relative">
      <div className="absolute top-2 left-2 text-white bg-cyan-500 p-1 rounded-sm z-50">
        Promoted
      </div>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Restaurant;
