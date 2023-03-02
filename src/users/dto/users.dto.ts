import { IsEmail, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class UsersDTO {

    @IsString()
    name: string;

    @IsNumber()
    @IsPositive()
    age: number;

    @IsEmail()
    email: string;

}