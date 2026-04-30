import { Controller } from '@nestjs/common';
import { SpendsService } from './spends.service';

@Controller('spends')
export class SpendsController {
  constructor(private readonly spendsService: SpendsService) {}
}
