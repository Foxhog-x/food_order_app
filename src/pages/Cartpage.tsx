import useCartStore from "../store/useCartStore";

export const Cartpage = () => {
  const { items } = useCartStore();
  console.log(items, "cart Items");
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8">Your Shopping Cart</h2>
      {items.length > 0 ? (
        items.map((item) => {
          return (
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 overflow-hidden">
                <div className="flex">
                  <img
                    className="h-20 object-cover "
                    src="/logo.jpg"
                    alt="logo"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-500">${item.price} each</p>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                    <div className="flex mt-2 space-x-2">
                      <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors">
                        -
                      </button>
                      <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition-colors">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xl font-semibold">
                  {item.price * item.quantity}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div>Shoping Cart is Empty</div>
      )}

      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Total:</h3>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
          Clear Cart
        </button>
      </div>
    </div>
  );
};
