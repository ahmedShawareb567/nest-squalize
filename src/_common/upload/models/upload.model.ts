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

@Table({ timestamps: true, tableName: 'UploadFiles' })
@ObjectType()
export class upload extends Model<upload> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field(() => ID)
  id: String;

  @AllowNull(false)
  @Column
  @Field(() => String)
  name: String;

  @AllowNull(false)
  @Column
  @Field(() => String)
  path: String;

  @AllowNull(false)
  @Column
  @Field(() => String)
  size: String;

  @AllowNull(false)
  @Column
  @Field(() => String)
  mimeType: String;
}
