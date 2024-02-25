import { IoMdShareAlt } from "react-icons/io";
import { IoIosLink } from "react-icons/io";

function Home() {
  return (
    <div className="bg-custom-dark text-white  flex">
      <div className=" ml-16 h-screen font-serif flex justify-center flex-col ">
        <div className="text-6xl ">
          Intrust is Short
          <br />
          Links, Big Results
        </div>
        <div className="m--10 ">
          Your brand wasn't built to be hidden. Help it stand out <br />
          with branded links that drive more clicks.
        </div>
        <div className="flex inline">
          <div className="border-2 flex inline justify-center pt-2 pb-2 w-40 hover:bg-white hover:text-black font-bold mt-5 rounded-md">
            Get Started &nbsp;
            <IoMdShareAlt />
          </div>
          <div className="border-2 flex inline justify-center pt-2 pb-2 w-40 hover:bg-white hover:text-black font-bold mt-5 ml-5 rounded-md">
            Get a Quote &nbsp;
            <IoIosLink />
          </div>
        </div>
        <div className="flex inline mt-48 -ml-10">
          <div className="ml-5 font-extrabold text-3xl  opacity-20">BOSE</div>
          <div className="ml-5 font-extrabold text-3xl opacity-20">Gartner</div>
          <div className="ml-5 font-extrabold text-3xl opacity-20">
            BuzzFeeD
          </div>
          <div className="ml-5 font-extrabold text-3xl opacity-20">DAKINe</div>
        </div>
      </div>

      <div className="h-screen">
        <img src="./home.png" alt="" style={{ height: "100%" }} />
      </div>
    </div>
  );
}

export default Home;
