import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Spend {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @Column()
    category!:string

    @Column()
    price!:number
}