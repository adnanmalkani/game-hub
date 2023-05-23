import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ea3d345b0e2146a4b059e5acbae08370",
  },
});
