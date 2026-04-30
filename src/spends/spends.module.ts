import { Module } from '@nestjs/common';
import { SpendsService } from './spends.service';
import { SpendsController } from './spends.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spend } from './entity/spends.entity';

@Module({
  controllers: [SpendsController],
  providers: [SpendsService],
  imports:[TypeOrmModule.forFeature([Spend])]
})
export class SpendsModule {}
