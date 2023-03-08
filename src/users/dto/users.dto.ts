import { IsArray, IsEmail, IsIn, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";
import { Dog } from "src/dogs/entity/dog.entity";

export class UsersDTO {

    @IsString()
    name: string;

    @IsNumber()
    @IsPositive()
    age: number;

    @IsEmail()
    email: string;

    @IsArray()
    @IsOptional()
    dogs?: Dog[];
}