export const Card = ({ foodItemData }) => {
  console.log(foodItemData, "foodItemData");
  return (
    <div className="max-w-sm p-5 rounded border border-black flex flex-col items-center justify-center bg-white shadow-lg overflow-hidden">
      <img
        className="w-55 min-h-52 object-fit"
        src="/logo.jpg"
        alt="foodImage"
      />

      <div className="p-4 flex justify-between items-center ">
        <div className="flex flex-col justify-between gap-2">
          <div className="flex justify-between items-center  ">
            <h3 className="text-2xl">food name</h3>
            <div>
              <span className="text-2xl">$20</span>
            </div>
          </div>
          <p>
            Fresh tuna cubes with rice, seaweed, avocado, and soy sauce dressing
          </p>
          <div className="flex justify-end items-center mt-4  ">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
