export const Footer = () => {
  return (
    <footer className="border-b border-gray-300 bg-white h-20 flex items-center shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/" className="text-gray-400 hover:text-gray-200 mx-2">
            Privacy Policy
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-200 mx-2">
            Terms of Service
          </a>
          <a href="/" className="text-gray-400 hover:text-gray-200 mx-2">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
