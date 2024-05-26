import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordsService } from '../../services/passwords.service';

@Component({
  selector: 'app-passwords-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './passwords-search.component.html',
  styleUrl: './passwords-search.component.scss',
})
export class PasswordsSearchComponent {
  public searchName!: string;

  constructor(private passwordsService: PasswordsService) {}

  public search(): void {
    this.passwordsService.updateSearch(this.searchName);
  }

  public clear(): void {
    this.searchName = '';
    this.search();
  }
}
