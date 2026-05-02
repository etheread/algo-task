import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SpendsService } from './spends.service';
import { CreateSpendDto } from './dto/createSpend.dto';

@Controller('spends')
export class SpendsController {
  constructor(private readonly spendsService: SpendsService) {}
  @Get()
  async getAll() {
    return this.spendsService.getAllSpend
  }
  @Get(':id') 
  async getOne(@Param('id') id:number) {
    return this.spendsService.findSpendId(id)
  }
  @Post('create')
  async createSpend(@Body() dto:CreateSpendDto) {
    return this.spendsService.createSpend(dto)
  }

}
