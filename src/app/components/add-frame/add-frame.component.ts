import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { AdminService } from 'src/app/services/admin.service';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-frame',
  templateUrl: './add-frame.component.html',
  styleUrls: ['./add-frame.component.css']
})
export class AddFrameComponent implements OnInit {
  categories:Category[]=[]
  brand!:Brand;
  totalbrands:Brand[]=[]
  constructor(private _adminService:AdminService,private categoryService:CategoryService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.brandService.getAllBrand().subscribe(data=>{
      this.totalbrands=data;
      console.log(this.totalbrands);
    }
      
      )

    this.categoryService.getAllCategories().subscribe(data=>{
      const categorySet= [...new Set<Category>(data)]
      this.categories=categorySet
      //console.log(this.categories)
    });
  }
  changeValue(e: any) {
    // console.log(e.target.value)
    for (let brand of this.totalbrands){
      if(e.target.value.toLowerCase()===brand.brandName.toLowerCase()){
       this.brand=brand;
       console.log(brand)
      }
    }
  
  }

  onAdd=(addForm:NgForm)=>{
    console.log(addForm.value)
    let frame=addForm.value
    this._adminService.addFrame(frame).subscribe(data=>{
      console.log(data)})
  }

  
  
}



