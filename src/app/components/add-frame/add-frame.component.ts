import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { AdminService } from 'src/app/services/admin.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-frame',
  templateUrl: './add-frame.component.html',
  styleUrls: ['./add-frame.component.css']
})
export class AddFrameComponent implements OnInit {
  categories:Category[]=[]

  constructor(private _adminService:AdminService,private categoryService:CategoryService) { }

  ngOnInit(): void {
    
    this.categoryService.getAllCategories().subscribe(data=>{
      const categorySet= [...new Set<Category>(data)]
      this.categories=categorySet
      console.log(this.categories)
    });
  }
  
  onAdd=(addForm:NgForm)=>{
    console.log(addForm.value)
    let frame=addForm.value
    this._adminService.addFrame(frame).subscribe(data=>{
      console.log(data)})
  }

  
  
}



