interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

const Toast = ({ message, visible, onClose }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-5 right-5 transition-transform duration-300 ease-in-out ${
        visible ? "transform translate-y-0" : "transform translate-y-full"
      }`}
    >
      <div className="bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
        {message}
        <button
          onClick={onClose}
          className="ml-4 text-sm text-gray-300 hover:text-white"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Toast;
