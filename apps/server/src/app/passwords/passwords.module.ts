import { Module } from '@nestjs/common';
import { PasswordsService } from './services/passwords.service';
import { PasswordsController } from './controllers/passwords.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Password } from './entities/password.entity';

@Module({
  controllers: [PasswordsController],
  providers: [PasswordsService],
  imports: [TypeOrmModule.forFeature([Password])],
})
export class PasswordsModule {}
