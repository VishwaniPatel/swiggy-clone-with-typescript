import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../hooks/GetRestaurantDetails";
import RestaurantInfo from "../components/RestaurantInfo";
import RestaurantMenu from "../components/RestaurantMenu";
import { RestaurantMenuModel } from "../components/model/RestaurantMenuModel";
function RestaurantDetails() {
  //retrieve restaurant id from params
  const { resId } = useParams();
  // get restaurant details using custom hook
  const restaurant = useRestaurantDetails(resId);
  const menu = restaurant?.menu;
  const resMenu = menu?.map((item: { card: RestaurantMenuModel }) => item.card);
  return (
    <div>
      <RestaurantInfo restaurant={restaurant?.info} key={restaurant?.info.id} />
      <RestaurantMenu menu={resMenu} />
    </div>
  );
}

export default RestaurantDetails;
