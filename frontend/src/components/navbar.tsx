import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-screen flex items-center justify-between flex-wrap bg-blue-500 p-6" style={{ position: "sticky", top: 0, zIndex: 999 }}>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            City Bikes
          </Link>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto font-semibold">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="  block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Journeys
          </Link>
          <Link
            to="/stations"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400"
          >
            Stations
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
