import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { Frame } from 'src/app/models/frame';
import { AdminService } from 'src/app/services/admin.service';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-frame',
  templateUrl: './add-frame.component.html',
  styleUrls: ['./add-frame.component.css']
})
export class AddFrameComponent implements OnInit {
  categories: Category[] = []
  brand!: Brand;
  category!: Category
  totalbrands: Brand[] = []
  constructor(private _adminService: AdminService, private categoryService: CategoryService, private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getAllBrand().subscribe(data => {
      this.totalbrands = data;
    }
    )

    this.categoryService.getAllCategories().subscribe(data => {
      const categorySet = [...new Set<Category>(data)]
      this.categories = categorySet
    });
  }
  changeValue(e: any) {
    // console.log(e.target.value)
    for (let brand of this.totalbrands) {
      if (e.target.value.toLowerCase() === brand.brandName.toLowerCase()) {
        this.brand = brand;
        console.log(brand)
      }
    }

  }

  changeCategoryValue(e: any) {
    for (let cat of this.categories) {
      if (e.target.value.toLowerCase() === cat.categoryName.toLowerCase()) {
        this.category = cat;
        console.log(cat)
      }
    }
  }

  onAdd = (addForm: NgForm) => {
    console.log(addForm.value)

    const frame = {
      name: addForm.value.name,
      frameSize: addForm.value.frameSize,
      color: addForm.value.color,
      gender: addForm.value.gender,
      price: addForm.value.price,
      lens: {
        brand: addForm.value.lens.brand,
        lensPower: addForm.value.lens.lensPower
      },
      rating: addForm.value.rating,
      brand: this.brand,
      frameImg: addForm.value.frameImg,
      categories: [this.category]
    }

    console.log(frame)

    // @ts-ignore:next-line
    this._adminService.addFrame(frame).subscribe(data => {
      console.log(data)
    })
  }
}



