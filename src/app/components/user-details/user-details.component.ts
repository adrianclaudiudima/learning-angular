import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../user.model';


@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['user-details.component.scss']
})
export class UserDetailsComponent {

  @Input()
  user: User;

  resetUserValue() {
    this.user.email = 'USER EMAIL CHANGED';
    this.user.name = 'USER NAME CHANGED';
  }
}
