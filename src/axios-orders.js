import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://react-burger-ddf01.firebaseio.com/"
});

export default instance;
