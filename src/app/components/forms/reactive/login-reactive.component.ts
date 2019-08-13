import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {HarryPotterService} from '../../../services/harry-potter.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-login-reactive',
  templateUrl: 'login-reactive.component.html',
  styleUrls: ['login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {

  loginFormGroup: FormGroup;
  usernameChangeSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private applicationService: HarryPotterService,
    private activatedRoute: ActivatedRoute
  ) {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.email, forbiddenNameValidator(/Adrian/i)])],
      password: ['', Validators.required]
    });
    this.usernameChangeSubscription = this.loginFormGroup.get('username').valueChanges.subscribe(value => {

    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(
      tap(v => console.log(v))
    ).subscribe(value => {

    });
  }

  submitForm() {
    if (this.loginFormGroup.valid) {
      this.applicationService
        .loginUser(this.loginFormGroup.get('username').value, this.loginFormGroup.get('password').value)
        .subscribe(value => {

        }, error => {
          this.loginFormGroup.setErrors({invalidUser: true});
        });
    } else {
      console.log('Form is invalid');
    }

  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
