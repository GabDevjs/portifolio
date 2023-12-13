import axios from "axios";
import { AxiosResponse } from "axios";

export const sendMailer = async (dataMensagem: any): Promise<AxiosResponse<any, any>> => {
  return await axios.post("/api/email", dataMensagem);
};