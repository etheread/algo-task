import { IsOptional,IsString,IsNumber } from "class-validator";

export class UpdateSpendDto {
    @IsString()
    @IsOptional()
    spend?:string

    @IsNumber()
    @IsOptional()
    spendPrice?:number

    @IsString()
    @IsOptional()
    spendCategory?:string
}