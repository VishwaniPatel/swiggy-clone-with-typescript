import React from "react";
import {
  IconSquareRoundedFilled,
  IconStar,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import { IMG_CDN_URL } from "../service/restaurantDataService";
import { Text, Group, Image, Flex, Grid } from "@mantine/core";
import { RestaurantMenuModel } from "./model/RestaurantMenuModel";
interface Props {
  menuDetails: { info: RestaurantMenuModel[] };
}

const MenuDetails: React.FC<Props> = ({ menuDetails }) => {
  return (
    <>
      {/* Display menu */}
      {menuDetails.info?.map((menu) => {
        return (
          <Grid
            key={menu.id}
            grow
            gutter="sm"
            gutterXs="md"
            gutterMd="xl"
            gutterXl={50}
          >
            <Grid.Col span={6}>
              <Group>
                {/* Check for veg/non veg */}

                {menu.itemAttribute?.vegClassifier === "NONVEG" ? (
                  <IconSquareRoundedFilled size={20} color="red" />
                ) : (
                  <IconSquareRoundedFilled size={20} color="green" />
                )}

                {/* Check for Bestsellers */}
                {menu?.ribbon?.text === "Bestseller" && (
                  <Group>
                    <IconStar size={14} />
                    <Text>Bestseller</Text>
                  </Group>
                )}
              </Group>
              <Group>
                <Flex direction="column">
                  <Text>{menu.name}</Text>

                  <Text>
                    <IconCurrencyRupee />
                    {menu.price / 100}
                  </Text>
                  <Text>{menu.description}</Text>
                </Flex>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              {/* Display food item name and price */}

              {/* Display food item image */}
              {!menu.imageId ? null : (
                <Image
                  maw={240}
                  ml="auto"
                  radius="md"
                  src={IMG_CDN_URL + menu.imageId}
                />
              )}
            </Grid.Col>
          </Grid>
        );
      })}
    </>
  );
};

export default MenuDetails;
