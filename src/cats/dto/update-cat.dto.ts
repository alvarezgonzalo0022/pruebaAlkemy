import { IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class UpdateCatDto {
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