export interface RestaurantInfoModel {
  id: number;
  itemAttribute: {
    vegClassifier: string;
  };
  ribbon: {
    text: string;
  };
  city: string;
  areaName: string;
  name: string;
  cuisines: string[];
  avgRating: string;
  totalRatingsString: string;
  feeDetails: {
    message: string;
  };
  costForTwoMessage: string;
  aggregatedDiscountInfo: {
    descriptionList: string;
  };
  veg: string;
}
