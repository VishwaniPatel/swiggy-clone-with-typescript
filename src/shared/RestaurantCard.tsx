import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { IMG_CDN_URL } from "../service/restaurantDataService";
import { RestaurantModel } from "../components/model/RestaurantModel";
interface Props {
  cardData: { data: RestaurantModel };
}
const RestaurantCard: React.FC<Props> = ({ cardData }: Props) => {
  // Check average rating type
  let ratingType;
  if (cardData.data.avgRating >= 4.0) {
    ratingType = "green";
  } else if (cardData.data.avgRating < 4.0 && cardData.data.avgRating > 3.0) {
    ratingType = "orange";
  } else {
    ratingType = "red";
  }
  return (
    // Display restaurant card
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={IMG_CDN_URL + cardData.data.cloudinaryImageId}
          height={160}
          alt="restaurant image"
        />
      </Card.Section>

      <Text weight={500} mt="xs">
        {cardData.data.name}
      </Text>
      {/* <Text color="dimmed" size="sm">
        {cardData.data.cuisines.join(", ") || ""}
      </Text> */}
      <Group position="apart" mt="md" mb="xs">
        {cardData.data.avgRating && (
          <Group>
            <IconStar size={14} color={ratingType} />
            <Text size="sm" color="dimmed">
              {cardData.data.avgRating}
            </Text>
          </Group>
        )}
        <Text size="sm" color="dimmed">
          {" "}
          {cardData.data.lastMileTravelString}
        </Text>
        <Text size="sm" color="dimmed">
          {" "}
          {cardData.data.costForTwoString}
        </Text>
      </Group>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Quick View
      </Button>
    </Card>
  );
};
export default RestaurantCard;
