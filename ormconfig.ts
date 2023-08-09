import * as dotenv from 'dotenv';

dotenv.config();

export default {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  cli: {
    migrationsDir: 'src/migrations',
  },
  migrations:
    process.env.APP_ENV === 'local'
      ? ['src/migrations/*.ts']
      : ['dist/src/migrations/*.js'],
};
