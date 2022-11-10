import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserForRegistrationDto } from 'src/app/interfaces/user/userForRegistrationDto.model';
import { AuthenticationService } from 'src/app/services/authentication.service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { PasswordConfirmationValidatorService } from 'src/app/shared/custom-validators/password-confirmation-validator.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterUserComponent {

  registerForm: FormGroup;

  constructor(private authService: AuthenticationService) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      middleName: new FormControl('', [Validators.maxLength(20)]),

      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(300)]),
      
      password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]),
      passwordConfirmation: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(300), ])
    });

    // this.registerForm.get('confirm')?.setValidators([Validators.required,
    //   this.passConfValidator.validateConfirmPassword(this.registerForm.get('password')!)]);
  }

  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName)?.hasError(errorName)
  }
  public registerUser = (registerFormValue : any) => {
    
    const formValues = { ...registerFormValue };
    const user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };

    // this.authService.registerUser("api/v1/accounts/registration", user)
    //   .subscribe({
    //     next: (_) => console.log("Successful registration"),
    //     error: (err: HttpErrorResponse) => console.log(err.error.errors)
    //   })
  }
}