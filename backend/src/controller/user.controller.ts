import { Request, Response } from "express";
import User from "../model/user.model";



//API for signup
export const Signup = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        console.log(req.body)
        const CurrentUser = await User.findOne({ email })
        
        //checking if there is already the user or not 
        //if there no any user 
        if (!CurrentUser) {
            const user = new User(req.body)
            await user.save()

            res.status(200).json({
                status: true,
                data:user,
                message:'signup successfull ✅',
            })
        } else {
            return res.status(400).json({
                status: false,
                message:'User already exist ❌'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

//API for login

export const Login = async (req:Request,res:Response) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        console.log(user)
        if (user) {
            res.status(200).json({
                status: true,
                data: user,
                message:'User Login in sucessfull'
            })
        } else {
            res.status(400).json({
                status: false,
                message:'Invalid email or password'
            })
        }
    } catch (error) {
        
    }
}

