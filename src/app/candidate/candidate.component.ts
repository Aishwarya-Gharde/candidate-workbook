import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { User } from './user';
//import { faPlus } from
//import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  addUserPage: boolean= false;
  users: Observable<User[]>;
  searchText;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
    this.userService.loadAll();
    //this.userService.getUsers();
    this.users.subscribe(data => {
      console.log(data);
    });
  }

  onAddUser() {
    this.addUserPage = true;
  };
}
