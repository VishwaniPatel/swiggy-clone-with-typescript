import {
  IconStar,
  IconBike,
  IconCoinRupee,
  IconLeaf,
} from "@tabler/icons-react";
import React from "react";
import { Text, Group, Flex } from "@mantine/core";
import DiscountCoupen from "./DiscountCoupen";
import { RestaurantInfoModel } from "./model/RestaurantInfoModel";
interface ResInfo {
  restaurant: RestaurantInfoModel;
}

const RestaurantInfo: React.FC<ResInfo> = ({ restaurant }) => {
  return (
    <div>
      <Text size="xs">
        Home / {restaurant?.city} / {restaurant?.areaName} / {restaurant?.name}{" "}
      </Text>
      <Group position="apart">
        {/* Display restaurant information */}
        <Flex direction="column">
          <Text size="xl" weight={700}>
            {restaurant?.name}
          </Text>
          <Text size="sm">{restaurant?.cuisines?.join(", ")}</Text>
          <Text size="sm">
            {restaurant?.areaName}, {restaurant?.city}
          </Text>
        </Flex>
        <Flex direction="column">
          <Group>
            <IconStar size={14} />
            <Text>{restaurant?.avgRating} </Text>
          </Group>
          <Text>{restaurant?.totalRatingsString}</Text>
        </Flex>
      </Group>

      <Text>
        <IconBike size={14} />
        {restaurant?.feeDetails?.message}
      </Text>
      <hr />
      <Text>
        <IconCoinRupee />
        {restaurant?.costForTwoMessage}
      </Text>
      {/* Display discount coupen details */}

      <DiscountCoupen
        coupens={restaurant?.aggregatedDiscountInfo.descriptionList}
        key={restaurant?.id}
      />

      <Group>
        {restaurant?.veg && (
          <Text>
            <IconLeaf />
            Pure Veg
          </Text>
        )}
      </Group>
      <hr />
    </div>
  );
};

export default RestaurantInfo;
