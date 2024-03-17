import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DynamicRoute() {
  const [name, setName] = useState("");
  const params = useParams();
  console.log(params.id);
  async function dynamic() {
    try {
      const data = await axios({
        method: "get",
        url: `http://localhost:5002/droute/${params.id}`,
      });
      setName(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    dynamic();
  }, []);
  return (
    <div>
      <div> {name.name} </div>
      <div>{name.address}</div>
    </div>
  );
}

export default DynamicRoute;
