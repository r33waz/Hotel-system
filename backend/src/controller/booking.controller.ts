import { Request, Response } from "express";
import Booking from "../model/booking.model";
import { identifierToKeywordKind } from "typescript";
import Room from "../model/room.model";

export const bookRoom = async (req: Request, res: Response) => {
  try {
    const { room, roomid, checkindate, checkoutdate, totalprice, totalday } =
      req.body;
    const booking = await Booking.findOne({ roomid });
    if (!booking) {
      const newBooking = new Booking({
        room: room,
        roomid: roomid,
        checkindate,
        checkoutdate,
        totalprice,
        totalday,
        transactionid: "4451236",
      });
      await newBooking.save();
      const currentRoom:any = await Room.findOne({_id:roomid});
      currentRoom.bookings.push({
        bookingid: newBooking._id,
        checkinDate: checkindate,
        checkoutDate: checkoutdate,
        price: totalprice,
        status: newBooking.status,
      });
      await currentRoom.save();
      return res.status(400).json({
        status: false,
        message: "New booking created successfully",
      });
    } else {
      console.log("Room already booked");
      return res.status(400).json({
        status: false,
        message: "Room is already booked",
      });
    }
  } catch (error) {
    //   return res.status(500).json({
    //     status: false,
    //     message: "Internal server error",
    //   });
    console.log(error);
  }
};
