import { Request, Response } from "express";
import User from "../model/user.model";
import jwt from "jsonwebtoken";

//*API for signup
export const Signup = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const CurrentUser = await User.findOne({ email });

    //checking if there is already the user or not
    //if there no any user
    if (!CurrentUser) {
      const user = new User(req.body);
      await user.save();

      res.status(200).json({
        status: true,
        data: user,
        message: "signup successfull ✅",
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "User already exist ❌",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//*API for login checking user email and password

export const Login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)
    const user: any = await User.findOne({ email });
    console.log(user);
    if (!user) {
      res.status(400).json({
        status: false,
        message: "Invalid Credentials ❌",
      });
    } else {
      //using matchpassword function to match the user password
      const matchpass = await user.matchpassword(password);
      // if password matches user will be loged in sucessfully
      if (matchpass) {
        const jwtkey = process.env.JWT_WEB_TOKEN || "";
        const token = jwt.sign({ email: user.email }, jwtkey, {
          expiresIn: "3d",
        });
        const Updateduser = await User.findByIdAndUpdate(
          {
            _id: user._id,
          },
          {
            $set: {
              jwt: token,
            },
          },
          {
            new: true,
          }
        );
        return res.cookie("acess_token", token, {
          httpOnly:true
        }).status(200).json({
          status: true,
          data: {
            token: Updateduser?.jwt,
          },
          message: "User LogedIn Sucessfully ✅",
        });
      } else {
        return res.status(400).json({
          status: false,
          data: {
            token: "",
          },
          message: "Invalid Username or Password",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

//*API for user logout
export const Logout = async (req: Request, res: Response) => {
  try {
    const id= req.params.id;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json({
        status: true,
        data: {
          token: "",
        },
        message: "User Logout sucessfully",
      });
    } else {
    }
  } catch (error) {}
};

//*API to delete user

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id  = req.params.id;
    const user = await User.findById(id)
    if (!user) {
      return res.status(400).json({
        status: false,
        message:"No such user found"
      })
    } else {
      const deleteduser = await User.findByIdAndDelete(id)
      if (deleteduser) {
        return res.status(200).json({
          status: true,
          message:'User deleted sucessfully ✅'
        })
      }
    }
  } catch (error) {}
};


//* API to find all users

export const getusers = async (req:Request,res:Response) => {
  try {
    const user = await User.find({})
    if (user) {
      return res.status(200).json({
        status: true,
        data: user,
        message:'Fetched all user'
      })
    } else {
      return res.status(400).json({
        status: false,
        message:'Canot fetched users'
      })
    }
  } catch (error) {
    
  }
}