import { FaAngleRight } from "react-icons/fa6";
function About() {
  return (
    <div className="bg-custom-dark">
      <div className=" flex text-white">
        <div className="flex flex-col w-1/2">
          <div className="flex justify-center items-center text-6xl font-bold h-1/2">
            Where Leaders <br /> Communicate <br /> Better
          </div>
          <div className="flex justify-center items-center -mt-14 -ml-16">
            Here Innovation Takes Flight in Code. <br /> Elevating Software
            Solutions Beyond Boundaries. <br /> Welcome to AG: Where Software
            Dreams Ascend.
          </div>
          <div className="ml-56 flex inline justify-center items-center mt-10 text-2xl border-2 w-60 h-16 rounded-full bg-white text-black  hover:bg-white hover:bg-opacity-80 hover:text-black hover:cursor-pointer font-bold  ">
            Watch Video &nbsp;
            <FaAngleRight />
          </div>
        </div>
        <div className="h-screen w-1/2">
          <img src="./about.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col h-52 bg-white bg-opacity-90">
        <div className="text-5xl font-bold text-custom-dark">
          We Listened & Made Changes
        </div>
        <div className="mt-5 font-bold opacity-70 text-center">
          We listened to leaders from all types of organizations <br />
          and implemented features to meet their needs.
        </div>
      </div>
      <div className="">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default About;
