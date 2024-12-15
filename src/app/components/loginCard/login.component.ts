import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      console.log('Login successful', this.loginData);
    } else {
      console.log('Please fill in both fields');
    }
  }

  onForgotPassword() {
    alert("OMG!! He forgot the password");
  }
}
