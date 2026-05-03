import { IsNumber,IsString } from "class-validator";

export class CreateSpendDto {
    @IsNumber()
    id!:number

    @IsString()
    spend!:string

    @IsString()
    spendCategory!:string

    @IsString()
    spendPrice!:string

    @IsNumber()
    userId!:string
}