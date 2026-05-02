import { Controller, Get, Param } from '@nestjs/common';
import { SpendsService } from './spends.service';

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

}
