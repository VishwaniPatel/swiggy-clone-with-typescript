import React, { useState } from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import MenuDetails from "./MenuDetails";
import { Text, Flex } from "@mantine/core";
import { RestaurantMenuModel } from "./model/RestaurantMenuModel";
interface Props {
  menu: [{ title: string; itemCards: any }];
}

const RestaurantMenu: React.FC<Props> = ({ menu }) => {
  const [isVisible, setIsVisible] = useState(true);
  const hidemenu = () => setIsVisible(false);
  const showmenu = () => setIsVisible(true);
  return (
    <>
      {menu?.map((food, index) => {
        return (
          <Flex direction="column" key={index}>
            <Text size="xl" weight={700}>
              {food.title} ({food.itemCards.length})
            </Text>
            {/* Show hide menu details */}
            {isVisible ? (
              <IconChevronUp onClick={hidemenu} />
            ) : (
              <IconChevronDown onClick={showmenu} />
            )}
            {isVisible ? <MenuDetails menuDetails={food.itemCards} /> : <hr />}
          </Flex>
        );
      })}
    </>
  );
};

export default RestaurantMenu;
