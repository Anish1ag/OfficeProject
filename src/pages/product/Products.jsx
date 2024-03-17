import { NavLink, Outlet } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdWebAsset } from "react-icons/md";

function Products() {
  return (
    <div className=" bg-custom-dark  text-white">
      <div className="text-4xl text-yellow-500 text-center  hover:cursor-pointer hover:text-yellow-400">
        Our Products
      </div>
      <div className="flex mt-3">
        <div className="w-1/5 border-2 border-gray-700 rounded-lg shadow-white h-screen overflow-scroll ">
          <div className="flex flex-col justify-center items-center">
            <div>
              <NavLink
                className="flex justify-center items-center border-2 pt-1 pr-7 pb-1 pl-7 w-full mt-3 rounded-lg hover:bg-white hover:text-black hover:font-bold text-xl font-bold"
                to="/products/"
              >
                <CgWebsite />
                Websites
              </NavLink>
            </div>
            <div>
              <NavLink
                className="flex justify-center items-center border-2 pt-1 pr-7 pb-1 pl-7 w-full mt-3 rounded-lg  hover:bg-white hover:text-black hover:font-bold text-xl font-bold"
                to="/products/second/"
              >
                <FaMobileAlt />
                Mobile App
              </NavLink>
            </div>
            <div>
              <NavLink
                className="flex justify-center items-center border-2 pt-1 pr-7 pb-1 pl-7 w-full mt-3 rounded-lg  hover:bg-white hover:text-black hover:font-bold text-xl font-bold"
                to="/products/third/"
              >
                <MdWebAsset />
                Web App
              </NavLink>
            </div>
          </div>
        </div>

        <div className="border-2 w-full ml-1 border-gray-700 border-opacity-25">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Products;
