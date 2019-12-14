import {Request, Response, NextFunction} from 'express';
import {RegistrationService} from '../service/registration';
import validationMiddleware from '../middleware/registration-validation.middleware';
import CreateUserDto from '../dtos/registration';
export class Registration {
    public registrationService: RegistrationService = new RegistrationService();
    public routes(app) : void {
        //https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-2-98c34e3513a2?
        app.route('/').post((req: Request, res: Response, next: NextFunction)=> {
            console.log(req.body)
            if(req.query.key !== 'a65aba16b4035268d20f69877a0f9ca0b9b3ba2b'){
                res.status(401).json({'message':'You shall not pass!'});
               } else {
                next();
               }     
        },validationMiddleware(CreateUserDto),this.registrationService.addNewUser) 
    }
}