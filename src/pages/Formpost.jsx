import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../components/Spinner";

function Formpost() {
  const [dataprisma, setDataprisma] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  async function formpost(data) {
    try {
      const formdata = await axios.post("http://localhost:5002/prisma", data);
      prisma();
      console.log(formdata.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteData(id) {
    try {
      await axios.delete(`http://localhost:5002/prisma/${id}`);
      prisma();
    } catch (error) {
      console.log(error);
    }
  }

  async function updatedata(id) {
    try {
      const response = await axios.get(`http://localhost:5002/prisma/${id}`);
      setSelectedData(response.data);
      setValue("name", response.data.name);
      setValue("email", response.data.email);
      setLoader(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  async function prisma() {
    try {
      const pdata = await axios.get("http://localhost:5002/prisma");
      setDataprisma(pdata.data);
      console.log(pdata.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    prisma();
  }, []);

  const handleFormSubmit = async (data) => {
    if (selectedData) {
      handleUpdate(data);
    } else {
      await formpost(data);
    }
  };

  const handleUpdate = async (data) => {
    try {
      await axios.put(`http://localhost:5002/prisma/${selectedData.id}`, data);
      prisma();
      setSelectedData(null);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-2 ">
      <div className="mb-2 ">
        <form
          className="border-2 border-black px-2 py-2"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="mb-2">
            <label className="font-bold">Name:</label>
            <input
              className="border border-black"
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
            />
            <div>{errors.name && <span>{errors.name.message}</span>}</div>
          </div>

          <div className="mb-2">
            <label className="font-bold">Email:</label>
            <input
              className="border border-black"
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
            <div>{errors.email && <span>{errors.email.message}</span>}</div>
          </div>

          <button
            type="submit"
            className="border-2 border-gray-700 px-3 rounded-lg font-semibold bg-gray-500 hover:bg-gray-600 hover:text-white"
          >
            {selectedData ? "Update" : "Submit"}
          </button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th className="border-2 border-gray-500">ID</th>
            <th className="border-2 border-gray-500">Name</th>
            <th className="border-2 border-gray-500">Email</th>
            <th colSpan="2" className="border-2 border-gray-500">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dataprisma.map((value, index) => (
            <tr key={index}>
              <td className="border-2 border-gray-500">{value.id}</td>
              <td className="border-2 border-gray-500">{value.name}</td>
              <td className="border-2 border-gray-500">{value.email}</td>
              <td className="border-2 border-gray-500">
                <button onClick={() => deleteData(value.id)}>Delete</button>
              </td>
              <td className="border-2 border-gray-500">
                <button onClick={() => updatedata(value.id)}>
                  <div className="flex">Update {loader && <Spinner />}</div>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Formpost;
