import { Request, Response } from "express";
import Booking from "../model/booking.model";
import Room from "../model/room.model";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51NeJVjFMuaYRWZSkKNSKLA3tJCjB25eHQLSwxNQfp9gwGPQ0eZd9HFGW0eZ4Z6g6sYjn7oE5aaxYvgxjNmWzubUO00rA2I19di",
  { apiVersion: "2022-11-15" }
);

export const bookRoom = async (req: Request, res: Response) => {
  try {
    const {
      room,
      roomid,
      checkindate,
      checkoutdate,
      totalprice,
      totalday,
      token,
    } = req.body;

    const user = await stripe.customers.create({
      email: token?.email || "",
      source: token.id,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalprice * 100, // amount in cents
      currency: "npr",
      customer: user.id,
      receipt_email: token.email,
      
    });

    if (paymentIntent) {
      try {
        const booking = await Booking.findOne({ roomid });
        if (!booking) {
          const newBooking = new Booking({
            room: room,
            roomid: roomid,
            checkindate,
            checkoutdate,
            totalprice,
            totalday,
            transactionid: paymentIntent.id,
          });

          await newBooking.save();

          const currentRoom: any = await Room.findOne({ _id: roomid });
          currentRoom.bookings.push({
            bookingid: newBooking._id,
            checkinDate: checkindate,
            checkoutDate: checkoutdate,
            price: totalprice,
            status: newBooking.status,
          });

          await currentRoom.save();

          return res.status(201).json({
            status: true,
            message: "Booking created successfully",
          });
        } else {
          console.log("Room already booked");
          return res.status(400).json({
            status: false,
            message: "Room is already booked",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
          status: false,
          message: "Internal server error",
        });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};


//*API to cancel booking
// export const cancelbookroom = async (req:Request,res:Response) => {
//   try {
//     const { bookingID, roomID } = req.body
//     const booking = await Booking.findOne({ _id: bookingID })
//     bookings.status = "cancled"
//     await booking?.room.bookings

//     const room = await Room.findOne({ _id: roomID })
//     const bookings = room?.bookings
//     const secondaryRoom = bookings?.filter((booking) => {
//       booking.bokingID.toString()!==bookingID
//     })

//     room?.bookings = secondaryRoom
    
//     await room.save()

//     return res.status(200).json({
//       status: true,
//       message:"BookingCancled"
//     })
    
//   } catch (error) {
    
//   }
// }

//*API to get all bookings
export const getallBookings = async (req: Request, res: Response) => {
 try {
   const booking = await Booking.find({});
   if (booking) {
     return res.status(200).json({
       status: true,
       data: booking,
       message: "Booking fetched sucessfully",
     });
   } else {
     return res.status(400).json({
       status: false,
       message: "Booking fetched unsucessfully",
     });
   }
 } catch (error) {
  
 }
}

//*API to get bookingbyid

export const getbookingbyuserid = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const userbookings = await Booking.find({ _id: id })
    if (userbookings) {
      return res.status(200).json({
        status: true,
        data: userbookings,
        message:"Data fetched sucessfully"
      })
    } else {
      return res.status(400).json({
        status: false,
        message:'No Data found'
      })
    }
  } catch (error) {}
};