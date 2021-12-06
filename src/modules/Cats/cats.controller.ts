import { Controller, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsServices: CatsService) {}

  @Post('create')
  create() {
    this.catsServices.create({
      name: 'test 1',
      age: 50,
      breed: 'test 1',
    });
  }
}
