import mongoose from "mongoose";
import Roominterface from "../interface/room.interface";

//* Creating a schema for room 
const RoomSchema = new mongoose.Schema<Roominterface>(
  {
    name: {
      type: String,
    },
    address: {
      type:String
    },
    maxPeople: {
      type: Number,
     
    },
    phoneNumber: {
      type: Number,
      unique: true,

    },
    pricePerDay: {
      type: Number,

    },
    image: {
      type:[String]
    },
    bookings: {
      type: [] 
    },
    roomType: {
      type: String,

    },
    description: {
      type: String,
      maxlength: 1024
      },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model<Roominterface>("Room", RoomSchema);
export default Room;
