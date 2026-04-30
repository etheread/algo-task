import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entity/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()

export class UsersService {
    constructor(
    @InjectRepository(User)
    private userRepo:Repository<User>
    ){}
    async getAll() {
        if (!this.userRepo) {
            return new NotFoundException('')
        }
        return this.userRepo.find()
    }

    async getByParam(id:number) {
       const user = await this.userRepo.findOne({where:{
        id:id
       }})

       if(!user) {
        return new NotFoundException('cant find account with this id')
       }
        return user
    
    
    }

   async createUser(dto:CreateUserDto) {
        const newUser = this.userRepo.create(dto)
        if(!newUser) {
            return new NotFoundException('cant create user')
        }
        return this.userRepo.save(newUser)
    }
}
