import { IsOptional,IsString,IsNumber } from "class-validator";

export class UpdateSpendDto {
    @IsString()
    @IsOptional()
    spend?:string

    @IsNumber()
    @IsOptional()
    price?:number

    @IsString()
    @IsOptional()
    category?:string
}