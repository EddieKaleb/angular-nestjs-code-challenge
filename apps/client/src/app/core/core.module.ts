import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PasswordsModule } from '../features/passwords/passwords.module';
import { PasswordsSearchComponent } from '../features/passwords/components/passwords-search/passwords-search.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, PasswordsModule, PasswordsSearchComponent],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
