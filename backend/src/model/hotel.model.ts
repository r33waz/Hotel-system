import mongoose from "mongoose";
import Bookinginterface from '../interface/hotel.interface'


//Creating booking schema
const HotelSchema = new mongoose.Schema<Bookinginterface>({
    name: {
        type: String,
    },
    address: {
        type:String
    },
    distance: {
        type:String
    },
    description: {
        type:String
    },
    photo: {
        type: [String]
        
    }, rating: {
        type: Number,
        min: 0,
        max:5
    },
    room: {
        type:[Number],
    },
    featured: {
        type: Boolean,
        default:false
    }
    
   
})

const Hotel = mongoose.model<Bookinginterface>("Hotel", HotelSchema);
export default Hotel