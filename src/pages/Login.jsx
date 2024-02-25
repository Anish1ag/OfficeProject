function Login() {
  return (
    <div className="bg-gray-300">
      <div className="flex ml-36 mr-36 pt-3 ">
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
            <div className="mt-5">
              <input
                type="email"
                placeholder=" Email Address"
                className="border border-gray-300 w-80 h-[50px]"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder=" Password"
                className="border border-gray-300 w-80 h-[50px]"
              />
            </div>
            <div className="flex">
              <div className="mt-5 font-bold text-purple-700 ">
                <input type="checkbox" className="bg-black " />
                <label htmlFor="checkbox" className="hover:cursor-pointer">
                  Remember me
                </label>
              </div>
              <div className="mt-5 text-red-600 font-semibold ml-16 hover:cursor-pointer">
                Forgot password?
              </div>
            </div>
            <div className="flex gap-14 mt-5">
              <div>
                <button className="border-2 border-gray-500 font-semibold pt-2 pr-8 pl-8 pb-2 rounded-md hover:cursor-pointer hover:text-white hover:bg-custom-green">
                  Login
                </button>
              </div>
              <div>
                <button className="border-2 border-gray-500 font-semibold pt-2 pr-8 pl-8 pb-2 rounded-md hover:cursor-pointer hover:text-white hover:bg-custom-green">
                  Create account
                </button>
              </div>
            </div>
            <div className="text-gray-400 font-semibold mt-14 pb-7">
              By sign up you agree to our term and you <br /> have read our data
              policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
