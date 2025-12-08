import { useNavigate } from 'react-router-dom';
import LogoButton from './LogoButton';
import { ChevronDown, Search, ShoppingCart, UserRound } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 left-0 w-full shadow-md z-50 bg-white">
      <nav className="flex items-center justify-between px-8 h-16">
        
        {/* Logo */}
        <div>
          <LogoButton />
        </div>

        {/* Search Bar */}
        <div className="relative w-1/2">
          <input
            type="search"
            id="search"
            placeholder="Search products..."
            className="border border-gray-300 px-4 py-2 rounded-full w-full focus:border-green-600 focus:outline-none text-gray-700"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            <Search size={18} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button
            aria-label="Shipping Info"
            className="text-gray-700 font-medium hover:text-green-600 hover:bg-gray-100 rounded-md px-2 py-3 transition flex gap-2 items-center"
          >
            Drop <span><ChevronDown size={15}  /></span> 
          </button>
            <button
            onClick={() => navigate('/signin')}
            aria-label="Sign In"
            className="text-gray-700 font-medium hover:text-green-600 transition hover:bg-gray-100 rounded-md flex gap-3 items-center py-1 px-2"
            >
            <UserRound size={25} />
            <span className="text-sm flex flex-col items-start">
                <p className="leading-tight">Account</p>
                <span className="truncate">@user0324</span>
            </span>
            </button>
          <button
            aria-label="Cart"
            className="flex items-center gap-1 text-gray-700 font-medium hover:text-green-600 transition gap-3"
          >
            <ShoppingCart size={25} /> 
            <span className='flex flex-col'>
                <p className='bg-green-600 rounded-full text-white text-sm'>2</p>Cart</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;