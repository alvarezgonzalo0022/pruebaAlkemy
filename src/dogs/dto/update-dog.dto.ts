import { IsNumber, IsPositive, IsString, Min } from "class-validator";
import { IsOptional } from "class-validator/types/decorator/decorators";

export class UpdateDogDTO {

    @IsString()
    name: string;

    @IsNumber()
    @IsPositive()
    age: number;

    @IsNumber()
    @IsPositive()
    @Min(1)
    legs: number;

    @IsNumber()
    @IsPositive()
    weight: number;

}