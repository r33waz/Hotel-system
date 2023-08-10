import mongoose from "mongoose";
import Roominterface from "../interface/room.interface";

//* Creating a schema for room 
const RoomSchema = new mongoose.Schema<Roominterface>(
  {
    name: {
      type: String,
      required:true
    },
    address: {
      type:String
    },
    maxPeople: {
      type: Number,
      required:true
    },
    phoneNumber: {
      type: Number,
      unique: true,
      required:true
    },
    pricePerDay: {
      type: Number,
      required: true,
    },
    image: {
      type:[String]
    },
    bookings: {
      type: [] 
    },
    roomType: {
      type: String,
      required:true
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
