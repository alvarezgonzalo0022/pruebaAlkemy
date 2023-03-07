import { IsEmail, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class UpdateUserDTO {

    @IsString()
    name: string;

    @IsNumber()
    @IsPositive()
    age: number;

    @IsEmail()
    email: string;

}