import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/DB/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { usersModule } from './modules/users/users.module';
import { CategoryModule } from './modules/category/category.module';
import { UploadModule } from './_common/upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads/',
    }),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    usersModule,
    DatabaseModule,
    CategoryModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
