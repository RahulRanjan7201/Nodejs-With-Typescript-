import * as mongoose from 'mongoose';
import {RegistrationSchema} from '../models/registration';
import {Request, Response, NextFunction} from 'express';
import HttpException from '../exceptions/HttpException';
const Registration = mongoose.model('user', RegistrationSchema,'user');
export class RegistrationService {
    public async addNewUser (req: Request, res: Response,  next: NextFunction) {
        try{
        const newUser = new Registration(req.body);
        await newUser.save();
        res.status(200).json({message:"Registration Completed"})
        } catch(err) {
            next(new HttpException(404,'Something Went Wrong'))
        }
    }
}