import { Link } from "react-router-dom";
import cartIcon from "/shopping-cart.png";
export const Header = () => {
  return (
    <nav className="border-b border-gray-300 bg-white h-20 flex items-center shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-5">
          <div className="md:hidden block">
            <button>
              <img src="/hamburger.png" alt="" height={20} width={20} />
            </button>
          </div>

          <Link to="/">
            <img
              src="https://www.iconpacks.net/icons/4/free-fast-food-delivery-icon-12982-thumb.png"
              alt="logo icon"
              className="object-contain h-12 w-12"
            />
          </Link>
        </div>
        <div className="flex gap-10">
          {/* <li className="list-none">Menu</li> */}
          <li className="list-none">
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li className="list-none">
            <Link to={"/cart"} className="flex hover:to-blue-500">
              <img src={cartIcon} alt="Cart Icon" className="h-6 w-6 mr-2" />
              Cart
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};
