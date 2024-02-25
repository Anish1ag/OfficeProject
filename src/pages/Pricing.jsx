import { FaAngleDown } from "react-icons/fa6";
function Pricing() {
  return (
    <div className="bg-custom-dark text-white">
      <div className="flex text-2xl font-bold ml-16">
        Our Top Selling Products🔥
      </div>
      <div className="flex ml-8 mt-3 border-b pb-5">
        <div className="border-2 border-red-500">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
          Price:$100
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200/300?grayscale" alt="" />
          Price:$70
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200/300?grayscale" alt="" />
          Price:$70
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200/300?grayscale" alt="" />
          Price:$70
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200/300" alt="" />
          Price:$200
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200/300" alt="" />
          Price:$200
        </div>
      </div>
      <div className="flex text-2xl font-bold ml-16 mt-5 items-center">
        For You <FaAngleDown />
      </div>
      <div className="flex mt-3">
        <div className="ml-8 border-2 border-red-500">
          <img src="https://picsum.photos/200" alt="" />
          Price:$20
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200" alt="" />
          Price:$20
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200" alt="" />
          Price:$20
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200" alt="" />
          Price:$20
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200" alt="" />
          Price:$20
        </div>
        <div className="ml-3 border-2 border-red-500">
          <img src="https://picsum.photos/200" alt="" />
          Price:$20
        </div>
      </div>
    </div>
  );
}

export default Pricing;
