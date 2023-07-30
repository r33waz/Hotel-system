import { Request, Response } from "express";
import Hotel from "../model/hotel.model";

//* API for creating hotel
export const createhotel = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    console.log(req.body);

    const availableHotel = await Hotel.findOne({ name });

    if (!availableHotel) {
      const room = new Hotel(req.body);
      await room.save();

      res.status(200).json({
        status: true,
        data: {
          name: room.name,
        },
        message: "Hotel added sucessfully ✅",
      });
    } else {
      res.status(409).json({
        status: false,
        message: "Hotel name already exist ❌",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "An error occurred",
    });
  }
};

//*API for updating hotel
export const updateHotel = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    console.log(id);
    const updatehotel = await Hotel.findByIdAndUpdate(
      { _id: id },

      {
        $set: {
          ...req.body,
        },
      },
      {
        new: true,
      }
    );
    console.log(updatehotel);
    res.status(200).json({
      status: true,
      data: updatehotel,
      message: "Hotel updated sucesssfully",
    });
  } catch (error) {
    console.log(error);
  }
};

//*API to delete hotel
export const deleteHotel = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletehotel = await Hotel.findByIdAndDelete({ _id: id });
    if (deletehotel) {
      return res.status(200).json({
        status: true,
        data: {
          id: deletehotel._id,
          name: deletehotel.name,
        },
        message: "Hotel deleted sucesfully ✅",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Hotel delete unsucessfull",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
