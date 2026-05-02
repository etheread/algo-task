import { Injectable } from '@nestjs/common';
import { CreateSpendDto } from './dto/createSpend.dto';
import { Spend } from './entity/spends.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindRelationsNotFoundError, Repository } from 'typeorm';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';


@Injectable()
export class SpendsService {
    constructor(
        @InjectRepository(Spend)

        private spends :Repository<Spend>
    ){}

    async getAllSpend() {
        if (!this.spends) {
            throw new reportUnhandledError('we got a problem')
        }
        return this.spends.find()
    }

    async findSpendId(id:string) {
        const finalId = Number(id)

        const spend = await this.spends.findOne({
            where:{id:finalId}
        })

        return spend
    }
}
