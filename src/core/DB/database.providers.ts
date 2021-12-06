import { Sequelize } from 'sequelize-typescript';

import { dbConfig } from './database.config';
import { Cats } from '../../modules/Cats/cats.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      sequelize.addModels([Cats]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
