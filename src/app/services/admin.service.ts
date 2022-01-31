import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frame } from '../models/frame';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _baseurl1: string = 'http://localhost:8081/user-api/users'
  private _baseurl2: string = 'http://localhost:8081/frame-api/frames'

  constructor(private _http: HttpClient) { }

  
  addFrame = (frame: Frame): Observable<Frame> => {
    return this._http.post<Frame>(this._baseurl2 + "/add-item", frame)
  }
  updateFrame = (frame: Frame): Observable<Frame> => {
    return this._http.put<Frame>(this._baseurl2, frame)
  }

  addUser=(user:User):Observable<User>=>{
    return this._http.post<User>(this._baseurl1+'/add-user',user);}

  deleteById = (frameId: number): Observable<Frame> => {
    let url = this._baseurl2 + "/id/" + frameId;
    return this._http.delete<Frame>(url);
  }

}

