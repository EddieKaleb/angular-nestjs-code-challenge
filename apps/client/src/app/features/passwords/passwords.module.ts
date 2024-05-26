import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordsListComponent } from './pages/passwords-list/passwords-list.component';
import { PasswordsCreateEditComponent } from './pages/passwords-create-edit/passwords-create-edit.component';
import { RouterModule } from '@angular/router';
import { passwordsRoutes } from './passwords.routes';
import { CardComponent } from '../../shared/components/card/card.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InputPasswordComponent } from '../../shared/components/input-password/input-password.component';

@NgModule({
  declarations: [PasswordsListComponent, PasswordsCreateEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(passwordsRoutes),
    CardComponent,
    ModalComponent,
    ReactiveFormsModule,
    NgbPaginationModule,
    InputPasswordComponent,
  ],
  exports: [PasswordsListComponent, PasswordsCreateEditComponent, RouterModule],
})
export class PasswordsModule {}
