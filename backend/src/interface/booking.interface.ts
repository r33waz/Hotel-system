import { Document } from "mongoose";

interface Bookinginterface extends Document{
    room: string,
    roomid: string,
    userid: string,
    checkindate: string,
    checkoutdate: string,
    totalprice: number,
    totalday: number,
    transactionid: number,
    status:string
}
export default Bookinginterface