import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className="bg-custom-dark text-white text-opacity-100">
      <header className="white-gray-600 body-font">
        <div className="container mx-auto flex inline flex-wrap p-5 flex-col md:flex-row items-center">
          <div>
            <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
              <img
                className="h-[70px] "
                src="./logo.png"
                alt=""
                style={{ borderRadius: "90px" }}
              />
              <span className="ml-3 text-4xl font-serif">AG</span>
            </a>
          </div>

          <div>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <NavLink
                to="/about"
                className="mr-5 ml-72 hover:text-gray-400 hover:cursor-pointer"
              >
                About
              </NavLink>

              <NavLink
                to="/products"
                className="mr-5 hover:text-gray-400 hover:cursor-pointer"
              >
                Products
              </NavLink>
              <NavLink
                to="/pricing"
                className="mr-5 hover:text-gray-400 hover:cursor-pointer"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/resources"
                className="mr-5 hover:text-gray-400 hover:cursor-pointer"
              >
                Resources
              </NavLink>
              {location.pathname !== "/" && (
                <NavLink
                  to="/"
                  className="mr-5  hover:text-gray-400 hover:cursor-pointer"
                >
                  Home
                </NavLink>
              )}
              <NavLink
                to="/login"
                className=" hover:text-gray-400 ml-64 hover:cursor-pointer"
              >
                Log in
              </NavLink>
              <a className="mr-5 ml-5 hover:text-gray-400 border-2 pt-1 pr-3 pb-1 pl-3 rounded-md hover:cursor-pointer">
                Sign up
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
