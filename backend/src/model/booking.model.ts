import mongoose from "mongoose";
import Bookinginterface from "../interface/booking.interface";

const BookingSchema = new mongoose.Schema<Bookinginterface>(
    {
        room: {
            type: String,
            required: true
        },
        roomid: {
            type: String,
            required:true
        },
        userid: {
            type: String,
            required : true
        },
        checkindate: {
            type: String,
            required: true
        },
        checkoutdate: {
            type: String,
            required: true
        },
        totalprice: {
            type: Number,
            required: true
        },
        totalday: {
            type: Number,
            required:true
        },
        transactionid: {
            type: Number,
            required:true
        },
        status: {
            type: String,
            default:'Booked'
        }
    }, {
        timestamps:true,
    }
)

const Booking = mongoose.model<Bookinginterface>("Booking", BookingSchema)
export default Booking;