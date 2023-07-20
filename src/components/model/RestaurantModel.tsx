export interface RestaurantModel {
  id: number;
  cloudinaryImageId: string;
  name: string;
  address: string;
  cuisines: string[];
  avgRating: number;
  lastMileTravelString: string;
  costForTwoString: string;
}
