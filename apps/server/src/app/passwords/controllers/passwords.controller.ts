import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';
import { Password } from '../entities/password.entity';
import { PasswordsService } from '../services/passwords.service';

@Crud({
  model: {
    type: Password,
  },
})
@Controller('/password-cards')
export class PasswordsController implements CrudController<Password> {
  constructor(public service: PasswordsService) {}
}
