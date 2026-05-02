import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpendDto } from './dto/createSpend.dto';
import { Spend } from './entity/spends.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindRelationsNotFoundError, Repository } from 'typeorm';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';
import { NotFoundError } from 'rxjs';


@Injectable()
export class SpendsService {
    constructor(
        @InjectRepository(Spend)

        private spends :Repository<Spend>
    ){}

    async getAllSpend() {
        
        if(await this.spends.count() === 0) {
            throw new NotFoundException('no spends were found')
        }
        return this.spends.find()
    }

    async findSpendId(id:number) {

        const spend = await this.spends.findOne({
            where:{id:id}
        })

        return spend
    }
}
