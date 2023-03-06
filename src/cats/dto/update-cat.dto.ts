import { IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class UpdateCatDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  age: number;

  @IsNumber()
  @IsPositive()
  @Min(1)
  @IsOptional()
  legs: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  weight: number;
}