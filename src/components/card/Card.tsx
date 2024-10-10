import useCartStore from "../../store/useCartStore";

export const Card = ({ foodItemData }) => {
  const { name, price, description } = foodItemData;
  const { addItem } = useCartStore();
  const handleAddToCart = (itemAdded) => {
    addItem(foodItemData);
  };

  return (
    <>
      {foodItemData && (
        <div className="max-w-sm p-5 rounded border border-black flex flex-col items-center justify-between bg-white shadow-lg overflow-hidden">
          <img
            className="w-55 min-h-52 object-fit"
            src="/logo.jpg"
            alt="foodImage"
          />

          <div className="p-2 flex items-center ">
            <div className="flex flex-col justify-between gap-2">
              <div className="flex justify-between items-center  ">
                <h3 className="text-2xl">{name}</h3>
                <div>
                  <span className="text-2xl">${price}</span>
                </div>
              </div>
              <p className="line-clamp-2 hover:line-clamp-none transition-all duration-300 ease-in-out">
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
