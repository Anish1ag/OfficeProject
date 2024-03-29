import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MobileApp() {
  const [model, setModel] = useState("");
  const params = useParams();
  console.log(params.model);
  async function mobile() {
    try {
      const data = await axios({
        method: "get",
        url: `http://localhost:5002/mobile/${params.model}`,
      });
      setModel(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    mobile();
  }, []);
  return (
    <div className="text-white">
      {model.mob} <br />
      {model.sta}
      <img src={model.url} />
    </div>
  );
}

export default MobileApp;
