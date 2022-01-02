import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { Category } from './models/category.model';
import { CategoryService } from './category.service';
import { CategoryCreateInput } from './inputs/create-category.input';

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => Category)
  async categoryById(@Args('categoryId') categoryId: string) {
    return await this.categoryService.getCategoryById(categoryId);
  }

  @Mutation(() => Category)
  async createCategory(@Args('input') input: CategoryCreateInput) {
    return await this.categoryService.createCategory(input);
  }
}
