import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CategoryCreateInput {
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  parentId?: string;
}
