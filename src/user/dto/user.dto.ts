import { IsEmail, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class UserDto {

    @IsString({message: "Firstname must be a string"})
    @MinLength(1, {
        message: "Firstname is too short, minimum length is 1 character",
    })
    firstName: string;

    @IsString({message: "Lastname must be a string"})
    @MinLength(1, {
        message: "The LastName is too short, minimum length is 1 character",
    })
    lastName: string;

    @IsEmail({}, { message: "Invalid Email address" })
    emailId: string;

    @IsPhoneNumber('IN', {message: 'Invalid mobilenumber'})
    mobileNumber: string;

    @IsString({message: "Password must be a string"})
    @MinLength(8, {
        message: "Password length should be minimum of 8 characters",
    })
    password: string;
}