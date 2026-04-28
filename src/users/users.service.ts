import { Injectable } from '@nestjs/common';
import { User } from './entity/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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

    getByParam(id:number) {
       const user =  this.userRepo.find({where:{
        id:id
       }})

       if(!user) {
        return
       }
        return this.userRepo
    }
}
