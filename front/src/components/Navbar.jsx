import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative  mx-auto p-4 border-gray-200 border-b-2 mb-2">
      {/* Flex Container */}
      <div className="flex  container items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://picsum.photos/50"
            alt="logo"
            className="rounded-full"
          />
          <h1 className="text-3xl font-semibold">Better Life</h1>
        </div>
        {/* Menu Items */}
        <div className="hidden navbar-links space-x-6 md:block">
          <Link to="/">Home</Link>
          <Link to="/details">About</Link>
          <Link to="/details">Contact</Link>
        </div>
        {/* Button */}
        <a
          href="/"
          className="hidden bg-green-400 px-6 py-3 rounded-full md:block hover:bg-green-500"
        >
          Get Started
        </a>
        {/* Hamburger Icon */}
        <div className="rounded-full overflow-hidden md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
