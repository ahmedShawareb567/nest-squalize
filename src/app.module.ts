import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/DB/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { usersModule } from './modules/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    usersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
