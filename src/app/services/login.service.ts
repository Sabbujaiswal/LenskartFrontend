import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  countOfLoginPage:number=0;
  logStatus:string="Login/SignUp";
  user: User | undefined;
  users:User[]|undefined=[];
  isUserLoggedIn:boolean=false;
  private _baseurl1:string='http://localhost:8081/user-api/users'

  constructor(private http:HttpClient) { }

  loginWithEmail=(email:string,password:string):Observable<User>=>{
    let url=`${this._baseurl1}/email/${email}/password/${password}`;
    const user = this.http.get<User>(url)
    return user;
  }
  
  loginWithMobile=(mobile:string,password:string):Observable<User>=>{
    let url=`${this._baseurl1}/mobile/${mobile}/password/${password}`;
    const user = this.http.get<User>(url)
    user.subscribe(data => this.user = data);
    return user;
  }

}
