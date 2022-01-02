import { Field, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Table,
  Model,
  PrimaryKey,
  Default,
  DataType,
  AllowNull,
  BelongsTo,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'Categories' })
@ObjectType()
export class Category extends Model<Category> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field(() => ID)
  id: String;

  @AllowNull(false)
  @Column
  @Field(() => String)
  name: String;

  @AllowNull(true)
  @ForeignKey(() => Category)
  @Field(() => String, { nullable: true })
  @Column({ type: DataType.UUID, onDelete: 'SET NULL', onUpdate: 'SET NULL' })
  parentId?: string;

  @BelongsTo(() => Category)
  @Field(() => Category, { nullable: true })
  parent?: Category;

  @HasMany(() => Category, 'parentId')
  @Field(() => [Category], { nullable: 'itemsAndList' })
  childs: Category[];
}
