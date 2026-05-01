import { Controller,Get, Param,Post,Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/users.entity';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
    findAll () {
     return this.usersService.getAllUsers()
    }

    @Get(':id')
    async getById(@Param('id') id:number) {
      return this.usersService.getByParam(id)
    }
    @Post('create')
    async createNew(@Body() dto:CreateUserDto) {
      return this.usersService.createUser(dto)
    }
}
