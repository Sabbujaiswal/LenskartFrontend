import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _baseurl1:string='http://localhost:8081/user-api/users'


  constructor(private _http:HttpClient) { }
 

  addUser=(user:User):Observable<User>=>{
    return this._http.post<User>(this._baseurl1,user);
  }
}

