import { Sequelize } from 'sequelize-typescript';

import { dbConfig } from './database.config';
import { User } from '../../modules/users/dto/initial/users.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
