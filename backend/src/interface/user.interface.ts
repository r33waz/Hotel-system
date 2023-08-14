import { Document } from "mongoose";

//Creating user interface
// setting the data types of each variable
interface Userinterface extends Document {
  fullname: string;
  isAdmin: boolean;
  jwt: string;
  country: string;
  city: string;
  email: string;
  number: number;
  password: string;
}

export default Userinterface;
