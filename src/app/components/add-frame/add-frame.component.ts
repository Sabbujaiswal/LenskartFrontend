import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-frame',
  templateUrl: './add-frame.component.html',
  styleUrls: ['./add-frame.component.css']
})
export class AddFrameComponent implements OnInit {

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
  }
  onAdd=(addForm:NgForm)=>{
    console.log(addForm.value)
    let frame=addForm.value
    this._adminService.addFrame(frame).subscribe(data=>console.log(data))
  }
  
}



