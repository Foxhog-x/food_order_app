import { useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useToastStore from "../store/useToastStore";
import DeleteIcon from "/delete.png";
export const Cartpage = () => {
  const naviagate = useNavigate();
  const { showToast } = useToastStore();
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearAllItems,
    calculateTotal,
    getUniqueItemCount,
  } = useCartStore();
  console.log(items, "cart Items");

  const handleIncrement = (id: number) => {
    increaseQuantity(id);
    showToast("added");
  };
  const handleDecrement = (id: number) => {
    decreaseQuantity(id);
    showToast("reduce");
  };

  const handleRemove = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      removeItem(id);
      showToast("removed successfully");
    } else {
      return;
    }
  };

  const handleClear = () => {
    clearAllItems();
  };

  const handleSubmit = () => {
    alert("Thank You for Placing Order feel Free to Explore more");
    handleClear();
    naviagate("/menu");
  };
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">Your Shopping Cart</h2>
      {items.length > 0 ? (
        items.map((item) => {
          console.log(item, "itemssss");
          return (
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 overflow-hidden">
                <div className="flex gap-4">
                  <img
                    className="h-20 w-20 object-cover "
                    src={item.image}
                    alt="logo"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-500">${item.price} each</p>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                    <div className="flex gap-5 mt-2 space-x-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDecrement(item.id)}
                          className="bg-inherit px-3 py-1 rounded 
                          border-gray-300 hover:bg-gray-300 transition-colors "
                        >
                          -
                        </button>
                        <button
                          className="bg-inherit px-3 py-1 rounded hover:bg-gray-300 transition-colors border border-gray-300"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          className="px-1 py-1 rounded hover:bg-gray-300 transition-colors bg-none"
                          onClick={() => handleRemove(item.id)}
                        >
                          <img src={DeleteIcon} alt="Delete" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xl font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div>Shoping Cart is Empty</div>
      )}

      <div className="mt-8 p-6 bg-inherit rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Total:{calculateTotal().toFixed(2)}
            </h3>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={() => handleClear()}
            >
              Clear All
            </button>
            <p>
              unique Item: {getUniqueItemCount() ? getUniqueItemCount() : ""}
            </p>
          </div>
          <div>
            {items.length > 0 ? (
              <button className="bg-blue-500" onClick={() => handleSubmit()}>
                Place Order
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
