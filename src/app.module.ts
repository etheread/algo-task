import dotenv from "dotenv"
dotenv.config()
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpendsModule } from './spends/spends.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule,TypeOrmModule.forRoot({
    type:"postgres",
    url:process.env.DATABASE_URL,
    ssl:{rejectUnauthorized:false},
    synchronize:true,
    entities: [__dirname + '/**/*.entity{.ts,.js}']
  }), SpendsModule],
})
export class AppModule {}
