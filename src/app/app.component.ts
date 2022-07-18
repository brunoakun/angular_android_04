import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import Validation from './providers/CustomValidators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted = false;
  constructor(private formBuilder: UntypedFormBuilder) { }

  registerForm = this.formBuilder.group({
    fullname: ['', ''],
    edad: ['', [Validators.required,Validation.ageValidator]],
    username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    confirmPassword: ['', Validators.required],
    url: ['', [Validators.required, Validation.urlValidator]],
    acceptTerms: [false, Validators.requiredTrue]
  },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    }
  );

  get f() {
    return this.registerForm.controls;
  }



  onSubmit() {
    //   alert("onSubmit");
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
  }

  onReset() {
    alert("onReset");
    this.submitted = false;
    this.registerForm.reset();
  }
}