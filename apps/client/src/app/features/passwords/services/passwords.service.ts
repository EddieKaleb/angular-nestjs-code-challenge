import { Injectable } from '@angular/core';
import { PasswordsConstant } from '../helpers/passwords-constant';
import { Password } from '../domain/password.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { PaginationParams, ReponsePayload } from '../../../core/helpers/types';

@Injectable({
  providedIn: 'root',
})
export class PasswordsService {
  private readonly BASE_URL = PasswordsConstant.PASSWORDS_ENDPOINT;

  private search = new BehaviorSubject('');

  public currentSearch$ = this.search.asObservable();

  constructor(private apiService: ApiService) {}

  public getOne(id: number): Observable<Password> {
    const url = `${this.BASE_URL}/${PasswordsConstant.METHODS.GET_PASSWORD}/${id}`;
    return this.apiService.get<Password>(url);
  }

  public getAll(
    params: PaginationParams
  ): Observable<ReponsePayload<Password[]>> {
    const url = `${this.BASE_URL}${PasswordsConstant.METHODS.GET_ALL_PASSWORDS}`;
    return this.apiService.get<ReponsePayload<Password[]>>(url, { params });
  }

  public filter(
    search: string,
    params: PaginationParams
  ): Observable<ReponsePayload<Password[]>> {
    const url = `${this.BASE_URL}${PasswordsConstant.METHODS.GET_PASSWORD}?filter=name||$cont||${search}`;
    return this.apiService.get<ReponsePayload<Password[]>>(url, { params });
  }

  public createNew(password: Password): Observable<Password> {
    const url = `${this.BASE_URL}${PasswordsConstant.METHODS.POST_PASSWORD}`;
    return this.apiService.post<Password>(url, password);
  }

  public updateOne(id: number, password: Password): Observable<Password> {
    const url = `${this.BASE_URL}${PasswordsConstant.METHODS.PUT_PASSWORD}/${id}`;
    return this.apiService.put<Password>(url, password);
  }

  public deleteOne(id: number): Observable<void> {
    const url = `${this.BASE_URL}${PasswordsConstant.METHODS.DELETE_PASSWORD}/${id}`;
    return this.apiService.delete<void>(url);
  }

  public updateSearch(search: string): void {
    this.search.next(search);
  }
}
