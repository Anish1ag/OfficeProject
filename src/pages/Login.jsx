import axios from "axios";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Cookies from "js-cookie";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const cookie = Cookies.get("token");
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState("false");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  async function postdata(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5002/loginAuth",
        data: { email: email, password: password },
      });
      setError("");
      setSuccess("verified user");
      Cookies.set("token", response.data.token, { path: "" });
      console.log(response);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      setSuccess("");
      setError(error.response.data);
    }
  }
  return (
    <>
      {!cookie ? (
        <div className=" bg-gray-300">
          <div className="flex ml-36 mr-36 pt-1 pb-1 ">
            <div className="flex w-1/2 h-auto bg-cover bg-[url('./Moon.jpg')]"></div>
            <div className="flex flex-col  border-l-8 border-purple-950 bg-white w-1/2  pt-5">
              <div className="pl-14 ">
                <img
                  src="logo.png"
                  alt=""
                  height="80"
                  width="80"
                  style={{ borderRadius: "90px" }}
                />
              </div>
              <div className="flex flex-col pl-14 mt-14">
                <div className="text-3xl font-bold">
                  <h1>Welcome Back!</h1>
                </div>
                <div className="font-bold opacity-70">
                  Please Log in to your account.
                </div>
                <form onSubmit={postdata}>
                  <div className="mt-5">
                    <input
                      type="email"
                      value={email}
                      placeholder=" Email Address"
                      className="border border-gray-300 w-80 h-[50px]"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-5  flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      placeholder=" Password"
                      className="border border-gray-300 w-80 h-[50px]"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      className="hover:cursor-pointer absolute ml-[290px] "
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  {error && <div className="text-red-600">{error}</div>}
                  {success && (
                    <div className="text-success-green">{success.msg}</div>
                  )}
                  <div className="flex">
                    <div className="mt-5 font-bold text-purple-700 ">
                      <input type="checkbox" className="bg-black " />
                      <label
                        htmlFor="checkbox"
                        className="hover:cursor-pointer"
                      >
                        &nbsp; Remember me
                      </label>
                    </div>
                    <div className="mt-5 text-red-600 font-semibold ml-16 hover:cursor-pointer">
                      Forgot password?
                    </div>
                  </div>
                  <div className="flex gap-14 mt-5">
                    <div>
                      <button
                        type="submit"
                        className="border-2 border-gray-500 font-semibold pt-2 pr-8 pl-8 pb-2 rounded-md hover:cursor-pointer hover:text-white hover:bg-custom-green"
                      >
                        Login
                      </button>
                    </div>
                    <div>
                      <button className="border-2 border-gray-500 font-semibold pt-2 pr-8 pl-8 pb-2 rounded-md hover:cursor-pointer hover:text-white hover:bg-custom-green">
                        Create account
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 font-semibold mt-14 pb-7">
                  By sign up you agree to our term and you <br /> have read our
                  data policy
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/admin"} />
      )}
    </>
  );
}

export default Login;
