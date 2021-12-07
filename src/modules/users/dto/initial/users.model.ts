import { Field, ObjectType, ID } from '@nestjs/graphql';
import {
  Column,
  Table,
  Model,
  PrimaryKey,
  Default,
  DataType,
  AllowNull,
} from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'Users' })
@ObjectType()
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field(() => ID)
  id: String;

  @Column
  @Field(() => String)
  name: String;

  @AllowNull(true)
  @Column
  @Field(() => Number, { nullable: true })
  age?: Number;
}
