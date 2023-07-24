export interface RestaurantMenuModel {
  id: number;
  itemAttribute: {
    vegClassifier: string;
  };
  ribbon: {
    text: string;
  };
  name: string;
  price: number;
  description: string;
  imageId: string;
}
