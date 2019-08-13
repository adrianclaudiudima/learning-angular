import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {UserCredential} from '../user.model';
import {Subscription} from 'rxjs';
import {debounce, debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-login-template',
  templateUrl: 'login-template.component.html',
  styleUrls: ['login-template.component.scss']
})
export class LoginTemplateComponent implements AfterViewInit, OnDestroy {

  @ViewChild('usernameInputFormControl', {static: true})
  usernameInput: NgModel;
  usernameInputSubscription: Subscription;
  user: UserCredential = {
    username: '',
    password: ''
  };

  submitForm(loginForm: NgForm) {
    console.log(loginForm);
  }

  ngAfterViewInit(): void {
    this.usernameInputSubscription = this.usernameInput.valueChanges
      .pipe(
        debounceTime(300),

      )
      .subscribe(value => {
        console.log(value);
      });
  }

  ngOnDestroy(): void {
    this.usernameInputSubscription.unsubscribe();
  }


}
