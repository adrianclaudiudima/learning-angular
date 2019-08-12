import {Component, OnInit} from '@angular/core';
import {listOfUsers, User} from '../user.model';

@Component({
    selector: 'app-user-administration',
    templateUrl: 'user-administration.component.html',
    styleUrls: ['user-administration.component.scss']
  }
)
export class UserAdministrationComponent implements OnInit {

  currentUsers: Array<User>;

  user: User = {
    name: 'Some name',
    email: 'Some email'
  };

  ngOnInit(): void {
    this.currentUsers = listOfUsers;
  }

}
