import { Injectable } from '@nestjs/common';
import { Password } from '../entities/password.entity';

import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PasswordsService extends TypeOrmCrudService<Password> {
  constructor(@InjectRepository(Password) repository: Repository<Password>) {
    super(repository);
  }
}
