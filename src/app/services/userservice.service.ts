import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private _baseurl1:string='http://localhost:8081/user-api/users'


  constructor(private http:HttpClient) { }
  getUserByEmailAndPassword=(email:string,password:string):Observable<User>=>{
    let url=`${this._baseurl1}/email/${email}/password/${password}`;
    return this.http.get<User>(url);
  }
  
  getUserByMobileAndPassword=(mobile:string,password:string):Observable<User>=>{
    let url=`${this._baseurl1}/mobile/${mobile}/password/${password}`;
    return this.http.get<User>(url);
  }
  getAllUsers=():Observable<User[]>=>{
    let url=`${this._baseurl1}/all-users`;
    return this.http.get<User[]>(url);
  }
}
