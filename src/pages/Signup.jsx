import axios from "axios";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  async function sign(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5002/signupAuth",
        data: { email: email, password: password, username: username },
      });
      setError("");
      setSuccess("verified user");
      console.log(response);
    } catch (error) {
      console.log(error);
      setSuccess("");
      setError(error.response.data);
    }
  }
  return (
    <div className="flex h-screen">
      <div className="flex w-1/2 justify-center  ">
        <form onSubmit={sign} className="w-1/2 ml-[100px]">
          <div className="bg-gray-100 shadow-2xl shadow-black  border border-black  h-[90vh] rounded-lg mt-10">
            <div className="flex justify-center text-2xl mt-9  font-bold">
              SIGN UP
            </div>
            <div className="flex items-center flex-col">
              <div className="mt-5  ">
                <input
                  className="border-2 rounded-md text-black  border-gray-400 h-10 w-[200px] shadow-lg"
                  type="text"
                  placeholder="FullName"
                />
              </div>
              <div className="mt-5">
                <input
                  className="border-2 rounded-md text-black  border-gray-400 h-10 w-[200px] shadow-lg"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-5">
                <input
                  className="border-2 rounded-md text-black  border-gray-400 h-10 w-[200px] shadow-lg"
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <input
                  className="border-2 rounded-md text-black  border-gray-400 h-10 w-[200px] shadow-lg"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <div className="text-red">{error}</div>}
              {success && <div className="text-success-green">{success}</div>}

              <div className="mt-5">
                <input
                  className="border-2 rounded-md text-black  border-gray-400 h-10 w-[200px] shadow-lg"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="ml-[70px] mt-2 font-semibold text-purple-500">
              <input type="checkbox" />
              Remember me
            </div>
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="font-bold border bg-black text-white rounded-md pt-1 pb-1 pl-2 pr-2"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <img src="signup.jpg" alt="" />
      </div>
    </div>
  );
}

export default Signup;
