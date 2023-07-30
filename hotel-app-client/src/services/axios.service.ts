import axios from "axios";
import { errortoast } from "./tostify.service";


const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const postData = async (url: string, data: any) => {
  try {
    const resp = await axios.post(`${SERVER_URL}${url}`, data);
    console.log(resp)
    return resp.data;
  } catch (error:any) {
    // errortoast(error.resp.data.message)
  }
};
