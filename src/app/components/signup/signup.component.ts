import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _adminService:AdminService) { }

  ngOnInit(): void {
  }

  onAdd=(addForm:NgForm)=>{
    console.log(addForm.value)
    let user=addForm.value;
   if(user.mobile.length===10){
    this._adminService.addUser(user).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log('complete');
      },
  
  });

   }
};

}
