import { Controller,Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
    findAll () {
     return this.usersService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id:number) {
      return this.getById(id)
    }
}
