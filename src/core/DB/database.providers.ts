import { upload } from './../../_common/upload/models/upload.model';
import { Sequelize } from 'sequelize-typescript';

import { dbConfig } from './database.config';
import { User } from '../../modules/users/dto/initial/users.model';
import { Category } from '../../modules/category/models/category.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      sequelize.addModels([User, Category, upload]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
