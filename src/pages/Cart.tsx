import { useContext, useEffect, useState } from "react";
import RestaurantSkeleton from "../skeleton/RestaurantSkeleton";
import Restaurant, { withPromotedLabel } from "../components/Restaurant";
import UserContext from "../context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/cartSlice";

interface RestaurantInfo {
  name: string;
  cloudinaryImageId: string;
  locality: string;
  costForTwo: string;
  promoted?: boolean;
  id: string;
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

const Cart: React.FC = () => {
  const WithPromotedLabel = withPromotedLabel(Restaurant);
  const { user } = useContext<any>(UserContext);
  const dispatch = useDispatch();

  const restaurants = useSelector((state: any) => state.items);

  const removeProductFromCart = (id) => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div>
      <div className="m-5 font-bold">
        What's on your mind?
        {user.name}
      </div>
      {restaurants?.length == 0 ? (
        <h1>
          <center>No Product Found</center>
        </h1>
      ) : (
        ""
      )}
      <div className="flex flex-wrap gap-5">
        {restaurants &&
          restaurants.map((res, idx) => {
            const { promoted } = res.info;

            const Component =
              promoted || idx % 3 === 0 ? WithPromotedLabel : Restaurant;

            return (
              <div key={idx}>
                <div
                  className="btn btn-secondary"
                  onClick={() => removeProductFromCart(res?.info?.id)}
                >
                  X
                </div>
                <Component restaurant={res} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
