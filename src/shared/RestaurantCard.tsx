import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { IMG_CDN_URL } from "../service/restaurantDataService";
import { RestaurantModel } from "../components/model/RestaurantModel";
interface Props {
  cardData: RestaurantModel;
}
const RestaurantCard: React.FC<Props> = ({ cardData }: Props) => {
  // Check average rating type
  let ratingType;
  if (cardData.avgRating >= 4.0) {
    ratingType = "green";
  } else if (cardData.avgRating < 4.0 && cardData.avgRating > 3.0) {
    ratingType = "orange";
  } else {
    ratingType = "red";
  }
  return (
    // Display restaurant card
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={IMG_CDN_URL + cardData.cloudinaryImageId}
          height={160}
          alt="restaurant image"
        />
      </Card.Section>

      <Text weight={500} mt="xs">
        {cardData.name}
      </Text>
      {/* <Text color="dimmed" size="sm">
        {cardData.cuisines.join(", ") || ""}
      </Text> */}
      <Group position="apart" mt="md" mb="xs">
        {cardData.avgRating && (
          <Group>
            <IconStar size={14} color={ratingType} />
            <Text size="sm" color="dimmed">
              {cardData.avgRating}
            </Text>
          </Group>
        )}
        <Text size="sm" color="dimmed">
          {" "}
          {cardData.lastMileTravelString}
        </Text>
        <Text size="sm" color="dimmed">
          {" "}
          {cardData.costForTwoString}
        </Text>
      </Group>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Quick View
      </Button>
    </Card>
  );
};
export default RestaurantCard;
