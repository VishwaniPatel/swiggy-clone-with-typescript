import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../service/restaurantDataService";

const useRestaurantDetails = (resId: string) => {
  //define state variables for restaurant
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    //make an API call and fetch the restaurant data with the resId provided
    const response = await fetch(FETCH_MENU_URL + resId);
    const json = await response.json();

    // filter menu details
    const menuItemsList =
      json.data.cards[2]["groupedCard"]?.cardGroupMap.REGULAR.cards;
    const itemCategory =
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

    const menu = menuItemsList?.map((item: any) => {
      if (item.card.card["@type"] === itemCategory) {
        return item.card.card;
      }
    });

    const resData = {
      // Restaurant information
      info: json.data.cards[0].card.card.info,
      // Restaurant menu details
      menu: menu?.filter((value: any) => value !== undefined),
    };

    setRestaurant(resData);
  };

  return restaurant;
};

export default useRestaurantDetails;
