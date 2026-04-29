import { Injectable } from '@nestjs/common';
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
    getAll() {
        if (!this.userRepo) {
            return 'sosal'
        }
        return this.userRepo.find()
    }

    async getByParam(id:number) {
       const user = await this.userRepo.findOne({where:{
        id:id
       }})

       if(!user) {
        return
       }
        return user
    
    
    }

    createUser(dto:CreateUserDto) {
        const newUser = this.userRepo.create(dto)
        if(!newUser) {
            return
        }
        return this.userRepo.save(newUser)
    }
}
