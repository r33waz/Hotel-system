import mongoose from "mongoose";
import Userinterface from "../interface/user.interface";
import bcrypt from "bcrypt";

//creating user schema
const UserSchema = new mongoose.Schema<Userinterface>({
  fullname: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: Number,
  },
  password: {
    type: String,
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model<Userinterface>('User',UserSchema)
export default User;