import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordsModule } from './passwords/passwords.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      autoLoadEntities: true,
      entities: [__dirname + '/../**/**/*.entity.{ts,js}'],
      synchronize: true,
      logging: true,
    }),
    PasswordsModule,
  ],
})
export class AppModule {}
