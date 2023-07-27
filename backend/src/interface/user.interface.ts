import  { Document } from "mongoose";

//Creating user interface
// setting the data types of each variable
interface Userinterface extends Document{
    fullname: string,
    roles: string,
    jwt:string,
    country: string,
    city: string,
    email: string,
    number:Number,
    password:string
}

export default Userinterface 