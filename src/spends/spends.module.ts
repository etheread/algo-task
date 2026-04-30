import { Module } from '@nestjs/common';
import { SpendsService } from './spends.service';
import { SpendsController } from './spends.controller';

@Module({
  controllers: [SpendsController],
  providers: [SpendsService],
})
export class SpendsModule {}
