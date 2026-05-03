import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Spend {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    spend!:string

    @Column()
    category!:string

    @Column()
    price!:number

    @Column()
    userId!:number
}