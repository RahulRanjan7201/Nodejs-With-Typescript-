import * as mongoose from 'mongoose';
import {RegistrationSchema} from '../models/registration';
import {Request, Response, NextFunction} from 'express';
import HttpException from '../exceptions/HttpException';
import {Notification} from '../Notification/publisher'
const Registration = mongoose.model('user', RegistrationSchema,'user');

export class RegistrationService {
    public async addNewUser (req: Request, res: Response,  next: NextFunction) {
        try{
            const _data = JSON.parse(req.body.data)
        const newUser = new Registration(_data);
        await newUser.save();
        
        Notification.sendSMS(_data.mobile,'Registration',_data);
        res.status(200).json({message:"Registration Completed"})
        } catch(err) {
            console.log(err);
         next(new HttpException(404,'Something Went Wrong'))
        }
    }
}