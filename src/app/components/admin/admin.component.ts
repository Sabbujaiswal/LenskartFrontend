import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //tabs=["Add Frame","Update Frame","Delete Frame","All Users"]
  tabs=[
    {
      label:"Add Frame",route:"/add-product",active:true
    },
    {
      label:"Update Frame",route:"/update-product",active:true
    },
    {
      label:"Delete Frame",route:"/delete-product",active:true
    },
    {
      label:"All Frames",route:"/admin-frame",active:true
    },
    {
      label:"All Users",route:"/user",active:true
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
