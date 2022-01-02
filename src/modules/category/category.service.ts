import { Category } from './models/category.model';
import { Injectable, Inject } from '@nestjs/common';
import { CategoryCreateInput } from './inputs/create-category.input';

@Injectable({})
export class CategoryService {
  constructor(
    @Inject('CATEGORIES_REPOSITORY') private catRepo: typeof Category,
  ) {}

  async getCategoryById(categoryId: string): Promise<Category> {
    return await this.catRepo.findOne({
      where: {
        id: categoryId,
      },
    });
  }

  async createCategory(input: CategoryCreateInput): Promise<Category> {
    return await this.catRepo.create(input);
  }
}
