import { useEffect, useState } from "react";
import { Card } from "../components/card/Card";
interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  availability: boolean;
  rating: number;
  ingredients: string[];
  vegetarian: boolean;
  vegan?: boolean;
}
export const Menupage = () => {
  const [foodList, setFoodListItems] = useState<FoodItem[]>([]);

  const fetchFoodListData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Foxhog-x/foodlistAPI/refs/heads/master/foodList.json"
      );

      const resJsonData = await response.json();
      setFoodListItems(resJsonData.foodItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoodListData();
  }, []);
  return (
    <div className="p-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {foodList &&
        foodList.map((foodItem) => {
          return <Card key={foodItem.id} foodItemData={foodItem} />;
        })}
    </div>
  );
};
