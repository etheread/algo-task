import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SpendsService } from './spends.service';
import { CreateSpendDto } from './dto/createSpend.dto';
import { User } from 'src/users/entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Controller('spends')
export class SpendsController {
  constructor(private readonly spendsService: SpendsService) {}
  @Get(':userId')
  async getAll(@Param('userId') userId:number) {
    return this.spendsService.getAllSpend(userId)
  }
  @Get(':id') 
  async getOne(@Param('id') id:number) {
    return this.spendsService.findSpendId(id)
  }


  @Post('create,:userId')
  async createSpend(@Body() dto:CreateSpendDto,@Param('userId') userId:number) {
    
    return this.spendsService.createSpend(dto,userId)
  }

}
