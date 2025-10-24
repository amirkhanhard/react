import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../store/cartSlice";
import { X } from "lucide-react";

interface RestaurantInfo {
  name: string;
  cloudinaryImageId: string;
  locality: string;
  costForTwo: string;
  id: string;
}
interface RestaurantProps {
  restaurant: {
    info: RestaurantInfo;
  }
}

const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  const dispatch = useDispatch();
  const handleAddProduct = (obj:any) => {
    dispatch(addProduct(obj));
  }
  const { name, cloudinaryImageId, locality, costForTwo,id } = restaurant?.info;
  return (
    <div className="card bg-base-100 w-70 shadow-sm">
      <figure>
        <img
          src={`${process.env.VITE_IMAGE_PREFIX}/${cloudinaryImageId}`}
          alt={name}
          width="200"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><Link to={`/restaurant/${id}`}>{name}</Link></h2>
        <p>{locality}</p>
        <p>{costForTwo}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary" onClick={()=> handleAddProduct(restaurant)}>Add to cart</button>
          
        </div>
      </div>
    </div>
  );
};


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
