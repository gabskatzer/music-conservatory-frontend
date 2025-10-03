import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router){
    //add more validators
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        (isSuccessful) => {
          if(isSuccessful){
            this.errorMessage = '';
            this.router.navigate(['/home']);
          }else{
            this.errorMessage = 'Invalid credentials. Please try again.';
          }
        },
        (error) => {
          this.errorMessage = 'Invalid credentials. Please try again.';
          console.log(error);
        }
      );      
    }else{
      this.errorMessage = 'Invalid fields.';
    }
  }



}
