import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class ContactDto {

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsPhoneNumber("BR")
    phone: string;

    @IsString()
    about: string;

    @IsString()
    message: string;
}