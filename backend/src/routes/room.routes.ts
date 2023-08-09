import express from "express";
import { createRoom,deleteRoom,getallrooms, getroombyid} from "../controller/room.contoller";
import { authorization, authorize } from "../middleware/auth.middleware";

const router = express.Router();
router.post(
  "/createroom",
//   authorization as any,
//   authorize as any,
  createRoom
);
router.get('/getallrooms',getallrooms)
router.get('/getallroom/:id',getroombyid)
router.post('/getallroom/:id',getroombyid)
router.delete(
  "/deleteroom/:id",
//   authorization as any,
//   authorize as any,
  deleteRoom
);

export default router;
