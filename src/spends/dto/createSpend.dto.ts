import { IsNumber,IsString } from "class-validator";

export class CreateSpendDto {
    

    @IsString()
    spend!:string

    @IsString()
    category!:string

    @IsString()
    price!:number

}