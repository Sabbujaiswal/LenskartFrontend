import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private _baseurl:string='http://localhost:8081/brand-api/brands'

  constructor(private http:HttpClient) { }

  getByBrandName=(brand:string):Observable<Brand> =>{
    let url=`${this._baseurl}/brand`+brand;
    return this.http.get<Brand>(url);

  }

  getAllBrand=():Observable<Brand[]>=>{
    let url="http://localhost:8081/brand-api/totalbrands";
    return this.http.get<Brand[]>(url);
  }
}
