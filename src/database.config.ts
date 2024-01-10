import { TypeOrmModuleOptions } from '@nestjs/typeorm';

let configLoaded: TypeOrmModuleOptions;
if (process.env.NODE_ENV === 'test') {
  configLoaded = {
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    dropSchema: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  };
} else {
  configLoaded = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '',
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  };
}
export const databaseConfig: TypeOrmModuleOptions = configLoaded;
