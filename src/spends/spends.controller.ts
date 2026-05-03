import { Body, Controller, Get, Param, ParseIntPipe, Post, Patch, Delete } from '@nestjs/common';
import { SpendsService } from './spends.service';
import { CreateSpendDto } from './dto/createSpend.dto';
import { User } from 'src/users/entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSpendDto } from './dto/updateSpend.dto';


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


  @Post('create/:userId')
  async createSpend(@Body() dto:CreateSpendDto,@Param('userId',ParseIntPipe) userId:number) {
    
    return this.spendsService.createSpend(dto,userId)
  }
  @Patch('update/:id')
  async update(@Param('id') id:number,@Body() dto:Partial<UpdateSpendDto>) {
    return this.spendsService.updateSpend(dto,id)
  }
  @Delete('delete/:id')
  async deleteSpend(@Param('id') id:number) {
    return this.spendsService.deleteSpend(id)
  }
}
