import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../components/Spinner";

function ReactHookForm() {
  const [data, setData] = useState(null);
  const [submitclicked, setSubmitclicked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [tabledata, setTabledata] = useState([]);
  const [twdata, setTwdata] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function tailwinddata() {
    try {
      const tailwinddata = await axios({
        method: "get",
        url: "http://localhost:5002/tailwindtable",
      });
      setTwdata(tailwinddata.data);
      console.log(tailwinddata);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    tailwinddata();
  }, []);
  async function table() {
    try {
      const tdata = await axios({
        method: "get",
        url: "http://localhost:5002/table",
      });
      setTabledata(tdata.data);
      console.log(tdata.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    table();
  }, []);

  async function formSubmit(data) {
    console.log(data);

    try {
      setLoader(true);
      const resp = await axios({
        method: "post",
        url: "http://localhost:5002/reacthookform",
        data: data,
      });
      setData(resp.data);
      console.log(resp);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoader(false);
    }
  }

  const handleClick = () => {
    setSubmitclicked(true);
  };
  return (
    <div className="flex container-sm w-full  items-center flex-col bg-gray-200 px-4 md:px-10 lg:px-20">
      <div className="pr-[13%] mt-[2%]">
        <h1 className="font-bold text-3xl">Contact us</h1>
        <div className="font-semibold">
          Reach out and we'll get in touch with you within 24 hours.
        </div>
      </div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="flex mt-5">
          <div>
            <div className="flex flex-col">
              <div>
                <label className="font-semibold">First name</label>
              </div>
              <div>
                <input
                  className="h-10 w-72"
                  {...register("Firstname", {
                    required: true,
                    maxLength: 30,
                    minLength: 2,
                  })}
                  placeholder="First name"
                  type="text"
                />
                <div>
                  {submitclicked && errors.Firstname && (
                    <span style={{ color: "red" }}>Name is required</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5">
            <div className="flex ">
              <label className="font-semibold">Last name</label>
            </div>
            <div>
              <input
                className="h-10 w-72 "
                {...register("Lastname", {
                  required: true,
                  maxLength: 30,
                  minLength: 2,
                })}
                placeholder="Last name"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-5 flex-col">
          <div>
            <label className="font-semibold">Email</label>
          </div>
          <div>
            <input
              className="h-10 w-[100%] "
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
              type="email"
            />
          </div>
        </div>
        <div className="flex mt-5">
          <div className="flex flex-col">
            <div>
              <label className="font-semibold">Business Category</label>
            </div>
            <div>
              <select
                className="h-10 w-72"
                {...register("business")}
                placeholder="select a business category"
              >
                <option value="IT">IT</option>
                <option value="Sales">Sales</option>
                <option value="Import Export">Import Export</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col ml-5">
            <div className="flex ">
              <label className="font-semibold">Location</label>
            </div>
            <div>
              <select className="h-10 w-72" {...register("location")}>
                <option value="Nepal">Nepal</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label className="font-semibold">Select Gender:</label>&nbsp; &nbsp;
          <input {...register("gender")} type="radio" value="male" />
          <label>Male</label>
          &nbsp; &nbsp;
          <input {...register("gender")} type="radio" value="female" />
          <label>Female</label>
          &nbsp; &nbsp;
          <input {...register("gender")} type="radio" value="others" />
          <label>Others</label>
        </div>
        <div className="flex flex-col">
          <div className="flex mt-5">
            <label className="font-semibold">Message</label>
          </div>
          <div className="flex">
            <textarea
              {...register("message")}
              cols="79"
              rows="5"
              placeholder="Leave us a message"
            ></textarea>
          </div>
        </div>
        <div>
          <input {...register("check")} type="checkbox" value="checked" />
          <label className="font-semibold">
            &nbsp; I agree to the privacy policy.
          </label>
        </div>
        <div className="flex justify-center mt-5 mb-2">
          <button
            className="border-2 border-gray-500 h-8 w-[90%] font-bold text-white bg-black rounded-lg"
            type="submit"
            onClick={handleClick}
            disabled={loader}
          >
            <div className="flex  justify-center ">
              Send message{loader && <Spinner />}
            </div>
          </button>
        </div>
      </form>
      <div className="flex overflow-x-auto items-start justify-start w-full">
        {data ? (
          <div className=" border-2 border-gray-400">
            <h2 className=" flex font-bold text-xl items-start">
              Data of the form:
            </h2>
            <ul>
              {Object.entries(data).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="w-full">
        <table className=" border-2 border-gray-500">
          <thead>
            <tr className="border-2 border-gray-500">
              <th className="border-2 border-gray-500">SN</th>
              <th className="border-2 border-gray-500">NAME</th>
              <th className="border-2 border-gray-500">ADDRESS</th>
              <th className="border-2 border-gray-500">GPA</th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map((item) => (
              <tr key={item.sn}>
                <td className="border-2 border-gray-500">{item.sn}</td>
                <td className="border-2 border-gray-500">{item.name}</td>
                <td className="border-2 border-gray-500">{item.address}</td>
                <td className="border-2 border-gray-500">{item.gpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="relative overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                phone no
              </th>
            </tr>
          </thead>
          <tbody>
            {twdata.map((value, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{value.name}</td>
                <td className="px-6 py-4">{value.email}</td>
                <td className="px-6 py-4">{value.address}</td>
                <td className="px-6 py-4">{value.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="border-2 border-gray-500 mt-2">
          <thead>
            <tr>
              <th className="border-2 border-gray-500">id</th>
              <th className="border-2 border-gray-500">name</th>
              <th className="border-2 border-gray-500">email</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default ReactHookForm;
