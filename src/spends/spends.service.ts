import {  Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpendDto } from './dto/createSpend.dto';
import { Spend } from './entity/spends.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindRelationsNotFoundError, Repository } from 'typeorm';
import { UpdateSpendDto } from './dto/updateSpend.dto';
import { User } from 'src/users/entity/users.entity';



@Injectable()
export class SpendsService {
    constructor(
        @InjectRepository(Spend)

        private spends :Repository<Spend>,

        @InjectRepository(User)
        private user: Repository<User>
    ){}
    

    async getAllSpend(userId:number) {
        
        if(await this.spends.count() === 0) {
            throw new NotFoundException('no spends were found')
        }
        return this.spends.find({where:{userId:userId}})
    }

    async findSpendId(id:number) {

        const spend = await this.spends.findOne({
            where:{id:id}
        })

        return spend
    }
    async createSpend(dto:CreateSpendDto,userId:number) {
        const lastId = await this.spends.findOne({
            where:{},
            order:{ id :'DESC'}
        })
        
        const lastUserId = await this.user.findOne({
            where:{id:userId},
        })
        if(!lastUserId) {
            throw new NotFoundException('no user was found')
        }
        console.log(dto)
        const newSpend = await this.spends.create({
            spend:dto.spend,
            category:dto.category,
            price:dto.price,
            userId:lastUserId.id
        })
        if(!newSpend) {
            throw new NotFoundException('cant create user')
        }
        return this.spends.save(newSpend)
    }

    async updateSpend(dto: Partial<UpdateSpendDto>,id:number) {
        const spend = await this.findSpendId(id)
        if(!spend) {
            throw new NotFoundException('cant find this spend')
        }
        Object.assign(spend,dto)

        
        return this.spends.save(spend)
    }
    async deleteSpend(id:number) {
        const spend = await this.spends.findOne({where:{id:id}})

        if(!spend) {
            throw new NotFoundException('no spends with that id was found')
        }        

        await this.spends.delete(spend)
    }
}
