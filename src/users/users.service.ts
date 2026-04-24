import { Get, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    users() {
        return [{
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
    }]
    }

    findById(id:number) {
        const user = this.users().find((user) => user.id === id)
        if (!user) {
            throw new NotFoundException('no user with taht name')
        }
        return user
    }
    
}
