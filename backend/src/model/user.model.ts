import mongoose from "mongoose";
import Userinterface from "../interface/user.interface";
import bcrypt from "bcrypt";

//creating user schema
const UserSchema = new mongoose.Schema<Userinterface>(
  {
    fullname: {
      type: String,
    },
    country: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    jwt: {
      type: String,
    },
    city: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    number: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchpassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model<Userinterface>("User", UserSchema);
export default User;
