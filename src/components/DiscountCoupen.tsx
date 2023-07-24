import { Text, Group, Card } from "@mantine/core";
import React from "react";

interface Props {
  coupens: any;
}
const DiscountCoupen: React.FC<Props> = ({ coupens }) => {
  return (
    <>
      {/* Displaying coupen details */}
      {coupens?.map((items: any, index: any) => {
        return (
          <Card shadow="sm" padding="lg" radius="md" withBorder key={index}>
            <Group>
              <Text>{items?.meta}</Text>
            </Group>
          </Card>
        );
      })}
    </>
  );
};

export default DiscountCoupen;
