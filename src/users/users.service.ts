import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    vladickMode():object {
        return {
            id:1,
            title:'vladick brudskoe'
        }
    }
}
