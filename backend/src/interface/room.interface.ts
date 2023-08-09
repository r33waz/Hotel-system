import { Document } from "mongoose";

//* Creating a interface for Room 
interface Roominterface extends Document {
  name: string;
  address:string
  maxPeople: number;
  phoneNumber: number;
  pricePerDay: number;
  image: [];
  bookings: [];
  roomType: string;
  description:string
}

export default Roominterface;
