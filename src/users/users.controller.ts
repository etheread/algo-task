import { Controller,Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  private vladickMode():object{
    return this.usersService.users()
  }
  @Get('/:id')
  findById(@Param('id') id:string) {
    return this.usersService.findById(Number(id))
    
  }
}
