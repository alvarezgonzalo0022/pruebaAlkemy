import { IsNumber, IsPositive, IsString, Min } from "class-validator";

export class PostsDTO {

    @IsString()
    title: string;

    @IsString()
    description: string;


    @IsString()
    author: string;

}