import { IsEmail, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class LoginDto {

    @IsEmail({}, { message: "Invalid Email address" })
    emailId: string;

    password: string;
}