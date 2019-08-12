import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../user.model';


@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['user-details.component.scss']
})
export class UserDetailsComponent {

  @Input()
  username: string;

  @Input()
  email: string;

  @Input()
  user: User;

  @Output()
  usernameChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  emailChange: EventEmitter<string> = new EventEmitter<string>();

  resetValues() {
    this.username = 'RESET ';
    this.email = 'RESET';
    this.usernameChange.emit(this.username);
    this.emailChange.emit(this.email);
  }

  resetUserValue() {
    this.user.email = 'USER EMAIL CHANGED';
    this.user.name = 'USER NAME CHANGED';
  }
}
