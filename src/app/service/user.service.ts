import { Injectable } from '@angular/core';
import { User } from '../candidate/user';
//import user from '../../assets/user.json';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError, BehaviorSubject } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
//import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users : BehaviorSubject<User[]>;
  private dataStore: {
    users: User[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  //userURL =  user;

  get users(): Observable<User[]>{
    return this._users.asObservable();
  }

  // getUsers() : Observable<User[]>{

  //   return this.http.get<User[]>('https://run.mocky.io/v3/864da3a5-0817-49c9-8073-50eee310e7ed')
  //     .pipe(
  //       tap(data =>console.log('All'+ JSON.stringify(data))),
  //       tap(data => this.dataStore.users = data)
  //     );
  // }

  loadAll(){
    return this.http.get<User[]>('https://run.mocky.io/v3/23d70f04-939c-4177-a332-68d82b6a5803')
     .subscribe(data => {
      this.dataStore.users = data;
      this._users.next(
        Object.assign({},this.dataStore).users);
    }, error => {
        console.log("Failed to fetch data");
    }

    );
  }
}
