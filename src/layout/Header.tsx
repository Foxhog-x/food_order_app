import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="border-b border-gray-300 bg-white h-20 flex items-center shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="border border-black flex items-center gap-2">
            <button>
              <img src="/hamburger.png" alt="" height={20} width={20} />
            </button>
            <a href="">LOGO</a>
          </div>
          <div className="flex gap-10">
            <li className="list-none">Menu</li>
            <li className="list-none">Cart</li>
          </div>
        </div>
      </nav>
    </div>
  );
};
