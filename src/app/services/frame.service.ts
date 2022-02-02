import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frame } from '../models/frame';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FrameService {
  private _baseurl:string='http://localhost:8081/frame-api/frames'
  

  constructor(private http:HttpClient) { }

  getAllFrames=():Observable<Frame[]> =>{
    return this.http.get<Frame[]>(this._baseurl)
  }
getById=(frameId:number):Observable<Frame>=>{
  let url=this._baseurl+"/id/"+frameId;
return this.http.get<Frame>(url);;
}

getByFrameBrand=(brand:string):Observable<Frame[]>=>{
  let url=`${this._baseurl}/brand/${brand}`;
  return this.http.get<Frame[]>(url);
}

getByLessPrice=(price:number):Observable<Frame[]>=>{
  let url=`${this._baseurl}/price/${price}`;
  return this.http.get<Frame[]>(url);
}



// getDistinctCategory=():Observable<string[]>=>{
//   let url=`${this._baseurl}/category/distinct`;

// return this.http.get<string[]>(url);
// }


 

}





