import {Request, Response, NextFunction} from 'express';
import {RegistrationService} from '../service/registration';
export class Registration {
    public registrationService: RegistrationService = new RegistrationService();
    public routes(app) : void {
        app.route('/').post((req: Request, res: Response, next: NextFunction)=> {
            console.log("Come Here")
            if(req.query.key !== 'a65aba16b4035268d20f69877a0f9ca0b9b3ba2b'){
                res.status(401).json({'message':'You shall not pass!'});
               } else {
                next();
               }     
        },this.registrationService.addNewUser) 
    }
}