import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PasswordsModule } from '../passwords/passwords.module';
import { CoreModule } from '../../core/core.module';
import { homeRoutes } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PasswordsModule,
    CoreModule,
    RouterModule.forChild(homeRoutes),
  ],
  exports: [RouterModule],
})
export class HomeModule {}
