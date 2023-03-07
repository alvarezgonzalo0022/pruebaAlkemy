import { IsOptional, IsString, Min } from "class-validator";

export class UpdatePostsDTO {

    @IsString()
    title: string;

    @IsString()
    description: string;


    @IsString()
    author: string;

}