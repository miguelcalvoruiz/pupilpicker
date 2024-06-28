import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MockAuthService } from '../../../services/mock-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private mockAuthService: MockAuthService, private router: Router) { }

  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    this.mockAuthService.login(credentials).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.errorMessage = 'Invalid email or password';
        console.error('Error logging in', error);
      }
    );
  }
}
