import { Component, OnInit } from '@angular/core';
import { PasswordsService } from '../../services/passwords.service';
import { Password } from '../../domain/password.model';
import { DELETE_PASSWORD_MESSAGE } from '../../helpers/passwords-constant';
@Component({
  selector: 'app-passwords-list',
  templateUrl: './passwords-list.component.html',
  styleUrl: './passwords-list.component.scss',
})
export class PasswordsListComponent implements OnInit {
  public passwords: Password[] = [];

  public page = 1;
  public pageSize = 8;
  public collectionSize = 0;

  constructor(private passwordsService: PasswordsService) {}

  public ngOnInit(): void {
    this.init();
  }

  public onPageChange(event: any) {
    this.fetchAllPasswords(event);
  }

  public init(): void {
    this.fetchAllPasswords(this.page);

    this.passwordsService.currentSearch$.subscribe((search) => {
      !search || !search.length
        ? this.fetchAllPasswords()
        : this.filterPasswords(search);
    });
  }

  public onRemove(id: number | any): void {
    if (!id) return;

    if (confirm(DELETE_PASSWORD_MESSAGE)) {
      this.passwordsService.deleteOne(id).subscribe({
        next: () => {
          this.fetchAllPasswords(this.page);
        },
        error: () => {
          throw 'Error trying to delete password';
        },
      });
    }
  }

  public fetchAllPasswords(page: number = this.page): void {
    this.passwordsService.getAll({ page, limit: +this.pageSize }).subscribe({
      next: (res) => {
        this.passwords = res.data;
        this.collectionSize = res.total;
      },
      error: () => {
        throw 'Error trying to fetch passwords';
      },
    });
  }

  public filterPasswords(search: string): void {
    this.passwordsService
      .filter(search, { page: this.page, limit: +this.pageSize })
      .subscribe({
        next: (res) => {
          this.passwords = res.data;
          this.collectionSize = res.total;
        },
        error: () => {
          throw 'Error trying to fetch passwords';
        },
      });
  }
}
