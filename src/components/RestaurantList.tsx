import React from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../shared/RestaurantCard";
import { Grid } from "@mantine/core";
import { RestaurantModel } from "./model/RestaurantModel";
interface Props {
  restaurants: RestaurantModel[];
}
const RestaurantList: React.FC<Props> = ({ restaurants }: Props) => {
  return (
    <div>
      <Grid grow gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        {restaurants?.map((restaurant) => {
          return (
            <Grid.Col key={restaurant.id} span={4}>
              <Link to={"/restaurant/" + restaurant.id}>
                <RestaurantCard cardData={restaurant} />
              </Link>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default RestaurantList;
