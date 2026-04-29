import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"


export class CreateUserDto  {
    @IsNumber()
    id!:number

    @IsString()
    @IsEmail()
    email!:string

    @IsString()
    @IsNotEmpty()
    password!:string

    @IsString()
    @IsNotEmpty()
    name!:string
}