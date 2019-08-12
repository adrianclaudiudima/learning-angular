import {Component} from '@angular/core';
import {User} from '../user.model';

@Component({
    selector: 'app-user-administration',
    templateUrl: 'user-administration.component.html',
    styleUrls: ['user-administration.component.scss']
  }
)
export class UserAdministrationComponent {

  parentUsername = 'First username';
  parentUserEmail = 'First email';

  user: User = {
    name: 'Some name',
    email: 'Some email'
  };

  resetParentValues() {
    this.parentUserEmail = 'CHANGED';
    this.parentUsername = 'CHANGED';
  }

  handleUsernameChanged(username: string) {
    this.parentUsername = username;
  }

  handleEmailChanged(email: string) {
    this.parentUserEmail = email;
  }

}
