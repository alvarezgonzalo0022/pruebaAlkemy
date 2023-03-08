import { IsArray, IsEmail, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";
import { Dog } from "src/dogs/entity/dog.entity";

export class UpdateUserDTO {

    @IsString()
    @IsOptional()
    name?: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    age?: number;

    @IsEmail()
    @IsOptional()
    email?: string;

}