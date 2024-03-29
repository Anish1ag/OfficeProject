import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Websites() {
  const [name, setName] = useState("");
  const params = useParams();
  console.log(params.name);
  async function website() {
    try {
      const data = await axios({
        method: "get",
        url: `http://localhost:5002/website/${params.name}`,
      });
      setName(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    website();
  }, []);
  return (
    <>
      <div>
        {name.title} <br />
        {name.status}
      </div>
      <div className="flex mt-2 ">
        <div className=" border-2 ml-3">
          <img src="https://picsum.photos/200/300" alt="" />
          Website-1
        </div>

        <div className=" border-2 ml-3">
          <img src="https://picsum.photos/200/300" alt="" />
          Website-2
        </div>
        <div className=" border-2 ml-3">
          <img src="https://picsum.photos/200/300" alt="" />
          Website-3
        </div>
        <div className=" border-2 ml-3 rounded-md">
          <img src="https://picsum.photos/200/300?grayscale" alt="" />
          Website-4
        </div>
        <div className=" border-2 ml-3 rounded-md">
          <img src="https://picsum.photos/200/300?grayscale" alt="" />
          Website-5
        </div>
      </div>
      <div className="flex mt-2 ">
        <div className=" border-2 ml-3">
          <img src="https://picsum.photos/200" alt="" />
          Website-6
        </div>
        <div className=" border-2 ml-3">
          <img src="https://picsum.photos/200" alt="" />
          Website-7
        </div>
        <div className=" border-2 ml-3">
          <img src="https://picsum.photos/200" alt="" />
          Website-8
        </div>
        <div className=" border-2 ml-3 rounded-md">
          <img src="https://picsum.photos/200" alt="" />
          Website-9
        </div>
        <div className=" border-2 ml-3 rounded-md">
          <img src="https://picsum.photos/200" alt="" />
          Website-10
        </div>
      </div>
    </>
  );
}

export default Websites;
