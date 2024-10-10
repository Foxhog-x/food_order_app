export const Card = () => {
  return (
    <div className="max-w-sm p-5 rounded border border-black flex flex-col items-center justify-center bg-white shadow-lg overflow-hidden">
      <img
        className="w-55 min-h-52 object-fit"
        src="/logo.jpg"
        alt="foodImage"
      />

      <div className="p-4 flex justify-between items-center ">
        <div className="flex justify-between gap-10 items-center">
          <h3 className="text-2xl">food name</h3>
          <button>add to cart</button>
        </div>
      </div>
    </div>
  );
};
