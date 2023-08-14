import express from "express";
import { createRoom,deleteRoom,getallrooms, getroombyid} from "../controller/room.contoller";


const router = express.Router();
router.post(
  "/createroom",
  createRoom
);
router.get('/getallrooms',getallrooms)
router.get('/getallroom/:id',getroombyid)
router.post('/getallroom/:id',getroombyid)
router.delete(
  "/deleteroom/:id",

  deleteRoom
);

export default router;
