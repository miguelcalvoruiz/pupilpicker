import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MockAuthService } from '../../../services/mock-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private mockAuthService: MockAuthService, private router: Router) { }

  onSubmit() {
    const user = { name: this.name, email: this.email, password: this.password };
    this.mockAuthService.register(user).subscribe(
      response => {
        this.successMessage = 'Registration successful! Redirecting to login...';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error => {
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Error registering', error);
      }
    );
  }
}
