import { Injectable, Inject } from '@nestjs/common';
import { Cats } from './cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cats,
  ) {}

  async findAll(): Promise<Cats[]> {
    return this.catsRepository.findAll<Cats>();
  }

  async create(user: any) {
    await this.catsRepository.create(user);
  }
}
