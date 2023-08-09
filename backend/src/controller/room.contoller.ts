import { Request, Response } from "express";
import Room from "../model/room.model";

export const createRoom = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const Currentroom = await Room.findOne({ name });

    if (!Currentroom) {
      const room = new Room(req.body);
      await room.save();

      return res.status(200).json({
        status: true,
        message: "Room created sucessfully",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Name of room already exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//*API to get all the hotels
export const getallrooms = async (req: Request, res: Response) => {
  try {
    const room = await Room.find({});
    if (room) {
      return res.status(200).json({
        status: true,
        data: room,
        message: "All rooms fetched successfully",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "No rooms found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//*API tp get romm by id
export const getroombyid = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log(id)
    const room = await Room.findById({ _id: id })
    if (room) {
      return res.status(200).json({
        status: true,
        data:room,
        message:`Room of id:${id} found`
      })
    } else {
      return res.status(400).json({
        status: false,
        message:`Room of this id${id} not found`
      })
    }
  } catch (error) {
    
  }};

//*APT to delete the room by id
export const deleteRoom = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const room = await Room.findById(id);
    console.log(id);
    if (!room) {
      return res.status(400).json({
        status: false,
        message: `Room not found`,
      });
    } else {
      const deleteroom = await Room.findOneAndDelete();
      if (deleteroom) {
        return res.status(200).json({
          status: true,
          data: {
            deletedId: `${id}`,
          },
          message: "Room Deleted Successfully!",
        });
      }
    }
  } catch (error) {}
};
