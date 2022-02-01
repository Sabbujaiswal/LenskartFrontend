import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _baseurl:string='http://localhost:8081/category-api/category'

  constructor(private http:HttpClient) { }

  getAllCategories=()=>{
    return this.http.get<Category[] >(this._baseurl);

  }
}
