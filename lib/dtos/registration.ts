//https://wanago.io/2018/12/17/typescript-express-error-handling-validation/
import { IsString, IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
 
class CreateUserDto {
@IsNotEmpty({message:"Name can not be empty"})
@IsString()
  public name: string;
  @IsNotEmpty({message:"Email can not be empty"})
  @IsEmail()
  public emailId: string;
  @IsNotEmpty({message:"Mobile Number is required"})
  @MinLength(10, {
    message: "Mobile Number Should be atleast 10 digit"
})
@MaxLength(10, {
    message: "Mobile Number Should be atleast 10 digit"
})
  public mobile: number;
  @IsNotEmpty({message:"Password is required"})
  @IsString()
  password:string
}
 
export default CreateUserDto;