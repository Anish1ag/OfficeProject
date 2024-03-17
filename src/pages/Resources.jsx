import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { API_URL, CAT_FACT } from "../config/EnvironmentVariables";
import GlobalContext from "../GlobalContext";

function Resources() {
  const contextValues = useContext(GlobalContext);
  const { theme, setTheme } = contextValues;
  const { backgroundColor, color } = theme;
  console.log(theme);
  const [data, setData] = useState("");
  const [back, setBack] = useState("");
  const [bike, setBike] = useState("");
  const [car, setCar] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [post, setPost] = useState("");
  const [salary, setSalary] = useState("");
  const changeStyle = (e) => {
    const value = e.target.value;
    if (value === "Theme1") {
      setTheme({ backgroundColor: "black", color: "white" });
    } else if (value === "Theme2") {
      setTheme({ backgroundColor: "blue", color: "white" });
    } else if (value === "Theme3") {
      setTheme({ backgroundColor: "yellow", color: "black" });
    } else {
      setTheme({ backgroundColor: "#031a1b", color: "white" });
    }
  };
  async function asynchronous() {
    try {
      let a = await axios.get(`${CAT_FACT}fact`);
      setData(a.data);
      console.log(a);
    } catch (error) {
      console.log(error);
      alert("Error occured while rendering data");
    }
  }
  useEffect(() => {
    asynchronous();
    backend();
    bikes();
    cars();
    addresses();
    posts();
    contacts();
    salaries();
  }, []);

  async function backend() {
    let b = await axios.get(`${API_URL}backend`);
    setBack(b.data);
    console.log(b.data);
  }
  async function bikes() {
    let a = await axios.get("http://localhost:5002/bikes");
    setBike(a.data);
  }
  async function cars() {
    let a = await axios.get("http://localhost:5002/car");
    setCar(a.data);
  }
  async function contacts() {
    let a = await axios.get("http://localhost:5002/contact");
    setContact(a.data);
  }
  async function addresses() {
    let a = await axios.get("http://localhost:5002/address");
    setAddress(a.data);
  }
  async function posts() {
    let a = await axios.get("http://localhost:5002/post");
    setPost(a.data);
  }
  async function salaries() {
    let a = await axios.get("http://localhost:5002/salary");
    setSalary(a.data);
  }

  return (
    <div
      style={{ backgroundColor: backgroundColor, color: color }}
      className=" bg-custom-dark text-white "
    >
      <label>Select Theme</label>
      <select onChange={changeStyle} className="text-black" name="" id="">
        <option value=""></option>
        <option value="Theme1">Theme1</option>
        <option value="Theme2">Theme2</option>
        <option value="Theme3">Theme3</option>
      </select>
      <div className="flex">
        <div className="flex flex-col justify-center items-center w-1/2">
          <div>{data.fact}</div>
          <button
            className="border rounded-md pt-1 pb-1 pl-3 pr-3"
            onClick={asynchronous}
            type="submit"
          >
            Change Quote
          </button>
        </div>
        <div className="ml-10">
          <img src="cat.jpg" alt="" />
        </div>
      </div>
      <div className="flex">
        <div className="ml-5 text-black bg-gray-500 border w-1/6 bg-[url('https://picsum.photos/200/300')]">
          <button
            onClick={backend}
            className="text-black text-xl bg-white font-bold text-center rounded-md pl-2 pr-2"
          >
            Backend Data
          </button>
          <div>
            {back.name} <br />
            {back.surname} <br />
            {back.address} <br />
            {back.status}
            <br />
            {back.status}
            <br />
            {back.fname}
            <br />
            {back.secondname} <br />
            {back.aaddress} <br />
            {back.sstatus}
          </div>
        </div>
        <div className="ml-5 bg-gray-500 text-black border w-1/6 bg-[url('https://picsum.photos/200/300')]">
          <button
            onClick={bikes}
            className="text-black text-xl bg-white font-bold text-center rounded-md pl-2 pr-2"
          >
            Bikes
          </button>
          <div className="">
            {bike.name} <br />
            {bike.model} <br />
            {bike.makeyear} <br />
            {bike.status}
          </div>
        </div>
        <div className="ml-5  bg-gray-500 text-black border w-1/6 bg-[url('https://picsum.photos/200/300')]">
          <button
            onClick={cars}
            className="text-black text-xl bg-white font-bold text-center rounded-md pl-2 pr-2"
          >
            Cars
          </button>
          <div>
            {car.name} <br />
            {car.model} <br />
            {car.makeyear} <br />
            {car.status}
          </div>
        </div>
        <div className="ml-5  bg-gray-500 text-black border w-1/6 bg-[url('https://picsum.photos/200/300')]">
          <button
            onClick={contacts}
            className="text-black text-xl bg-white font-bold text-center rounded-md pl-2 pr-2"
          >
            Contact
          </button>
          <div>
            {contact.email} <br />
            {contact.phone} <br />
            {contact.status} <br />
          </div>
        </div>
        <div className="ml-5  bg-gray-500 text-black border w-1/6 bg-[url('https://picsum.photos/200/300')]">
          <button
            onClick={addresses}
            className="text-black text-xl bg-white font-bold text-center rounded-md pl-2 pr-2"
          >
            Address
          </button>
          <div>
            {address.paddress} <br />
            {address.taddress} <br />
          </div>
        </div>
        <div className="ml-5  bg-gray-500 text-black border w-1/6 bg-[url('https://picsum.photos/200/300')]">
          <button
            onClick={posts}
            className="text-black text-xl bg-white font-bold text-center rounded-md pl-2 pr-2"
          >
            Post
          </button>
          <div>
            {post.designation} <br />
            {post.authority} <br />
          </div>
        </div>
        <div className="ml-5  bg-gray-500 text-black border w-1/6 bg-[url('https://picsum.photos/200/300')]">
          <button
            onClick={salaries}
            className="text-black text-xl bg-white font-bold text-center rounded-md pl-2 pr-2"
          >
            Salary
          </button>
          <div>
            {salary.amount} <br />
            {salary.status} <br />
          </div>
        </div>
      </div>
      <div>
        <iframe className="w-full h-96  " src="h2r.mp4"></iframe>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.4394636228053!2d85.56364617425143!3d27.644077228281333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb08c83bc3942d%3A0x489ca66da4228c0d!2sRavi%20Opi!5e1!3m2!1sen!2snp!4v1708684538555!5m2!1sen!2snp"
          className="w-full h-96"
        ></iframe>
      </div>
    </div>
  );
}

export default Resources;
