import { Body, Controller,Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  private vladickMode():object{
    return this.usersService.getAll()
  }
  @Get('/:id')
  findById(@Param('id') id:string) {
    return this.usersService.findById(Number(id))
    
  }
  @Post()
  createNewUser(@Body() dto:CreateUserDto) {
    return this.usersService.createNew(dto)
  }
}
