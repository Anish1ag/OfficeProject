import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WebApp() {
  const [app, setApp] = useState("");
  const params = useParams();
  console.log(params.webapp);
  async function website() {
    try {
      const data = await axios({
        method: "get",
        url: `http://localhost:5002/web/${params.webapp}`,
      });
      setApp(data.data);
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
        <div className="text-white">
          {app.application} <br />
          {app.status}
        </div>
        <img src={app.url} />
      </div>
    </>
  );
}

export default WebApp;
