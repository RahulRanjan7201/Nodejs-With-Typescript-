import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RegistrationSchema = new Schema({
    name: {
        type: String,
        required:"Enter Name"
    },
    emailId : {
        type:String,
        required:"Enter email Id"
    },
    mobile: {
        type:Number,
        unique: true, 
        required:"Enter Mobile Number"
    },
    password:{
        type: String,
        required:"Enter the password"
    },
    created_At : {
        type:Date,
        default:Date.now
    },
    status: {
        type: String,
        default:"Active",
    }
})