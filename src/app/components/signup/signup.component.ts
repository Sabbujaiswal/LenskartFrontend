import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _adminService:AdminService,private _router:Router) { }

  ngOnInit(): void {
  }

  onAdd=(addForm:NgForm)=>{
    console.log(addForm.value)
    let user=addForm.value;
    if (user.mobile.length===10&&(user.email.endsWith("@gmail.com")||user.email.endsWith("@email.com"))){
      this._router.navigate(['/sample-frames'])
      
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
    else{
      alert("Please give the Proper Mobile number and email to signup")
    }
};

}
