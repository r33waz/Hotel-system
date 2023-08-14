import axios from "axios";
import { errortoast } from "./tostify.service";


const SERVER_URL:any = import.meta.env.VITE_SERVER_URL;
export const postDataJwt = async (url: string,jwt:string, data: any) => {
  try {
    const resp = await axios.post(`${SERVER_URL}${url}`, data, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
    console.log(resp)
    return resp.data;
  } catch (error:any) {
    // errortoast(error.resp.data.message)
  }
};



export const getData = async (url: string,jwt:string) => {
  try {
    const res = await axios.get(`${SERVER_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (error: any) {
    errortoast(error.response.data.message);
  }
}

export const deletedata = async (url:any,jwt:any) => {
  try {
    const response = await axios.delete(`${SERVER_URL}${url}`, {
      headers: {
        Authorization:`Bearer ${jwt}`,
      }
    })
    return response.data
  } catch (error) {
    
  }
}
