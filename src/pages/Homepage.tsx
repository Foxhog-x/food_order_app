export const Homepage = () => {
  return (
    <div className="relative h-screen">
      <img
        src="/pexels-ella-olsson-572949-1640777.jpg"
        alt="hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col text-center">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold">
            Welcome to Our Food Order Site
          </h1>
          <p className="text-white text-xl md:text-3xl lg:text-5xl mt-2">
            Delicious meals delivered to your doorstep!
          </p>
        </div>
      </div>
    </div>
  );
};
