import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockAuthService } from './mock-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private mockAuthService: MockAuthService) {}

  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.mockAuthService.login(credentials);
  }

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return this.mockAuthService.register(user);
  }
}
