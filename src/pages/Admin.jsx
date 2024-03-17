import Cookies from "js-cookie";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineSegment } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";

function Admin() {
  const navigate = useNavigate("");
  function tokenout() {
    Cookies.remove("token", { path: "/" });
    navigate("/login");
  }
  return (
    <div className=" w-screen">
      <div className="flex  bg-smoke-white border-b-2 border-gray-400 ">
        <div className="mt-[20px] ml-[50px]">
          <div className="font-bold text-4xl">Dashboard</div>
        </div>
        <div className="ml-[10%] mt-[2%] pt-2">
          <MdOutlineSegment size={"20px"} />
        </div>
        <div className="ml-2 mt-[2%] pb-2">
          <input
            className="h-[40px] border rounded-xl w-[300px] relative pl-3 pr-3"
            placeholder="  Search"
            type="search"
          />
        </div>
        <div className="ml-[400px] mt-[2%] hover:text-blue-500">
          <IoIosNotificationsOutline size={"25px"} />
        </div>
        <div className="ml-[20px] mt-[2%] hover:text-blue-500">
          <MdLanguage size={"25px"} />
        </div>
        <div className="ml-[20px] mt-[2%] hover:text-blue-500">
          <FaUserCheck size={"25px"} />
        </div>
      </div>
      <div className="flex bg-smoke-white ">
        <div className="flex flex-col w-[25%] bg-opacity-20 h-screen border-r-2 border-gray-400 pl-10">
          <div className="flex mt-[30px] opacity-75">Dashboard</div>
          <div className="mt-[30px] flex">
            <NavLink to="/adminhome" className="flex">
              <IoHomeOutline size={"20px"} />
              <div className="ml-2">Home</div>
            </NavLink>
          </div>
          <div className="mt-[15px] flex">
            <FaRegUserCircle size={"20px"} />
            <div className="ml-2">Users</div>
          </div>
          <div className="mt-[15px] flex">
            <IoSettingsOutline size={"20px"} />
            <div className="ml-2">Setting</div>
          </div>
          <div className="mt-[15px] flex">
            <GoTrophy size={"20px"} />
            <div className="ml-2">Achievement</div>
          </div>
        </div>
        <div className="flex flex-col w-full  h-screen border-r-2 border-gray-500">
          <div className="flex mt-8 h-[100%]">
            <div className="border border-gray-600 w-[25%] h-[30%] ml-5 rounded-lg bg-golden-sand">
              <div className="pl-10 text-xl font-semibold ">first</div>
            </div>
            <div className="border border-gray-600 w-[25%] h-[30%] ml-5 rounded-lg bg-papaya-whip">
              <div className="pl-10 text-xl font-semibold">second</div>
            </div>
            <div className="border border-gray-600 w-[25%] h-[30%] ml-5 rounded-lg bg-custom-gray">
              <div className="pl-10 text-xl font-semibold">third</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => tokenout()}>Sign out</button>
      </div>
      <div className="w-full ml-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
