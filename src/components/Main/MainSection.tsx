import React, { useEffect, useState } from "react";
import { FETCH_RESTAURANTS } from "../../service/restaurantDataService";
import RestaurantList from "../RestaurantList";
import { RestaurantModel } from "../model/RestaurantModel";

const MainSection: React.FC = () => {
  const [allRestaurants, setAllRestaurants] = useState<RestaurantModel[]>([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    //API CALL to fetch list of restaurants
    const data = await fetch(FETCH_RESTAURANTS);
    const json = await data.json();
    console.log("Vite", json);
    if (json) {
      setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
      console.log(allRestaurants);
    }
  }
  return (
    <div>
      <RestaurantList restaurants={{ data: allRestaurants }} />
    </div>
  );
};

export default MainSection;
