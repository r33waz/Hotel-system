import { Document } from "mongoose";

interface Bookinginterface extends Document {
  name: string;
  address: string;
  distance: string;
  description: string;
  photo:[]
  rating: number;
  room: [];
  featured:boolean
}

export default Bookinginterface;
