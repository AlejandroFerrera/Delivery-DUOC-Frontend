import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl: string = 'http://localhost:8000/api/login';
  private loginSuccess$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  private setSession(context: Client) {
    try {
      const token = context.token;
      const id = context.id;

      localStorage.setItem('token', token);
      localStorage.setItem('id', id.toString());
      this.loginSuccess$.next(true);
    } catch (error) {
      this.loginSuccess$.next(false);
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<Client>(this.loginUrl, { email, password })
      .pipe(tap((response) => this.setSession(response)));
  }

  getToken(): string {
    return localStorage.getItem('token')!;
  }

  isLogedIn() {
    return this.loginSuccess$.value;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.loginSuccess$.next(false);
  }
}
