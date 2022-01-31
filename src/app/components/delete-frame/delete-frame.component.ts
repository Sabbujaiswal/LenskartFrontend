import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-delete-frame',
  templateUrl: './delete-frame.component.html',
  styleUrls: ['./delete-frame.component.css']
})
export class DeleteFrameComponent implements OnInit {

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {

  }

  onSubmitForm=(form:NgForm)=>{
    const formValue=form.value.text
    console.log(typeof(parseInt(formValue)))
    this._adminService.deleteById(parseInt(formValue))
  }

}
