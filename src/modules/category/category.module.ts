import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { categoriesProviders } from './category.provider';

@Module({
  imports: [],
  providers: [CategoryService, CategoryResolver, ...categoriesProviders],
})
export class CategoryModule {}
