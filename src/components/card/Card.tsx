import useCartStore from "../../store/useCartStore";
import useToastStore from "../../store/useToastStore";

export const Card = ({ foodItemData }) => {
  const { name, image, price, description } = foodItemData;
  console.log(foodItemData);
  const { showToast } = useToastStore();
  const { addItem } = useCartStore();
  const handleAddToCart = (itemAdded) => {
    addItem(itemAdded);
    showToast("Added to cart");
  };

  return (
    <>
      {foodItemData && (
        <div className="max-w-sm p-3 rounded flex flex-col items-center justify-between gap-4 bg-white shadow-xl overflow-hidden">
          <div className="flex items-center justify-center w-full h-80 overflow-hidden">
            <img
              className="h-full w-full object-fill"
              src={image}
              alt="foodImage"
            />
          </div>

          <div className="p-2 flex items-center ">
            <div className="flex flex-col justify-between gap-2">
              <div className="flex justify-between items-center  ">
                <h3 className="text-2xl">{name}</h3>
                <div>
                  <span className="text-2xl">${price}</span>
                </div>
              </div>
              <p className="h-16 line-clamp-2 hover:line-clamp-none transition-all duration-300 ease-in-out">
                {description}
              </p>
              <div className="flex justify-end items-center mt-4  ">
                <button
                  onClick={() => {
                    handleAddToCart(foodItemData);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
