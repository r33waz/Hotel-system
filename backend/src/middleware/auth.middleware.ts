import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../model/user.model";

// Creating custom requests
interface CustomRequestUserRole extends Request {
  user: {
    roles: string;
  };
}

interface CustomRequestUser extends Request {
  user: object;
}

// Creating a custom request
export const authorization = async (
  req: CustomRequestUser,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      // Get the token using split method to access the token only
      const token: string = req.headers.authorization.split(' ')[1];
      const validuser: any = jwt.verify(token, process.env.JWT_WEB_TOKEN ?? '');
      
      // Now validate a user by their emails
      const user: any = await User.findOne({ email: validuser.email });
      req.user = user;
        next();
    } else {
      // Handle case where there is no authorization header
        return res.status(400).json({
            status: false,
            message:"Unathorized user"
        })
    }
  } catch (error) {
    // Handle errors appropriately
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const authorize = (...roles: any) =>async (req:CustomRequestUserRole,res:Response,next:NextFunction) => {
  console.log(roles)
  if (roles.includes(req.user.roles)) {
    next()
  } else {
    return res.status(403).json({
      status: false,
      message:"UnathorizedUser"
    })
  }
}
