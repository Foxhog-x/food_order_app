import useToastStore from "../../store/useToastStore";

const Toast = () => {
  const { message, visible } = useToastStore();

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 ease-in-out">
      {"hello"}
      <button className="ml-4 text-gray-300 hover:text-white">&times;</button>
    </div>
  );
};

export default Toast;
