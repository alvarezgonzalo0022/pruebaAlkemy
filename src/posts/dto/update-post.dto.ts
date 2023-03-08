import { IsOptional, IsString, Min } from "class-validator";

export class UpdatePostsDTO {

    @IsString()
    @IsOptional()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    author?: string;

}