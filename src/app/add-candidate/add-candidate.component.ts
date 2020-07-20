import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../candidate/user';


@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  popUpTitle = 'Add Candidate';
  submitted = false;

  model: any = {  };
  errorMessage: string;
  users: Observable<User[]>;
  allComplete: boolean = false;
  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.users = this.userService.users;
    this.users.subscribe(data => {
      console.log(data);
    })
  }

  skills = [
    {name: 'C#', completed: false},
    {name: '.Net', completed: false},
    {name: 'Angular 6', completed: false},
    {name: 'Java', completed: false}
  ]
  saveProduct(){

  }
  onSubmit() {
    alert('Candidate Added \n\n' + JSON.stringify(this.model));
  }
  setAll(){
    this.allComplete= true;
  }

}
