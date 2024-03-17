import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const token = Cookies.get("token");
  console.log(token);

  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;
