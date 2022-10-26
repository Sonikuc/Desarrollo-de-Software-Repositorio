import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'desarrollo',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    retryDelay: 3000,
    retryAttempts: 10
}