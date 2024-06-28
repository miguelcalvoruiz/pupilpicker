import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return of({ token: 'mock-token' });
  }

  register(user: { name: string; email: string; password: string }): Observable<any> {
    return of({ message: 'User registered successfully' });
  }
}
