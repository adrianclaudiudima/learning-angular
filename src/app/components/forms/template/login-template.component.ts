import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {UserCredential} from '../user.model';
import {Observable, of, Subscription} from 'rxjs';
import {catchError, concatMap, debounce, debounceTime, map, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-template',
  templateUrl: 'login-template.component.html',
  styleUrls: ['login-template.component.scss']
})
export class LoginTemplateComponent implements AfterViewInit, OnDestroy {

  isError = false;
  domainModel: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.domainModel = this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      concatMap(id => this.httpClient.get('http://localhost:8080/api-path/' + id)),
      catchError(err => {
        // todo add errorHandling
        this.isError = true;
        return of(undefined);
      }),
      tap(v => {
        if (v !== undefined) {
          this.isError = false;
        }
      })
    );


    this.activatedRoute.params.subscribe(value => {
      console.log(value);
    });

  }

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
