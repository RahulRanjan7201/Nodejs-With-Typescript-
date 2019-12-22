import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Registration} from './controllers/resgistration';
import * as mongoose from "mongoose";
import errorMiddleware from './middleware/error.middleware';
class App {
    public mongoUrl : string = 'mongodb://localhost:27017/suraksha'
    public app =express.application;
    public registrationRoute : Registration = new Registration();

    constructor() {
        this.mongoSetUp();
        this.app = express();
        this.config();
       
        this.registrationRoute.routes(this.app);
        this.initializeErrorHandling();
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
      }
    private mongoSetUp(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

    private config() : void {
        
        this.app.use(bodyParser.json({
            limit:"50mb"
        }));
       this.app.use(bodyParser.urlencoded());
        
    }
}

export default new App().app;