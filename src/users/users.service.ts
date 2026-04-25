import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id:1,
            title:'vladick brudskoe'
        },
        {
           id:2,
            title:'pidoras'
        },
        {
            id:3,
            title:'huesos'        
        }
    ]

    findById(id:number) {
        const user = this.users.find((user) => user.id === id)
        if (!user) {
            throw new NotFoundException('no user with taht name')
        }
        return user
    }

    getAll() {
        return this.users
    }


    createNew(dto:CreateUserDto) {
        const newUser = {
        id:this.users.length + 1,
        title:dto.title
    };
    this.users.push(newUser)

        return this.users
    }
    
}
