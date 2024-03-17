import axios from "axios";
import { useContext, useState } from "react";
import GlobalContext from "../GlobalContext";

function Contact() {
  const data = useContext(GlobalContext);

  const { theme, setTheme } = data;
  const { backgroundColor, color } = theme;
  console.log(theme);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState("");
  const changeStyle = () => {
    setTheme({
      color: "white",
      backgroundColor: "black",
    });
  };

  async function contact(e) {
    e.preventDefault();

    try {
      const data = await axios({
        method: "post",
        url: "http://localhost:5002/contactAuth",
        data: { name, email, phone, feedback },
      });
      setSuccess("Form data submitted!");
      setEmail("");
      setName("");
      setPhone("");
      setFeedback("");
      console.log(data);
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{ backgroundColor: backgroundColor, color: color }}
      className=" mx-auto mt-8"
    >
      <div className="flex">
        <div className="flex flex-col w-full">
          <h2 className="text-2xl font-bold mb-4 ">Contact Us</h2>
        </div>
        <div className="flex justify-end w-full pr-9">
          <button
            onClick={changeStyle}
            className="border-2 border-gray-500 pl-3 pr-3 rounded-xl text-xl font-bold hover:bg-slate-300"
          >
            Select Theme
          </button>
        </div>
      </div>
      <form onSubmit={contact} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="userName" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block mb-2">
            Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        {success}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
