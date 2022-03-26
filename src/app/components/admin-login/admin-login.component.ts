import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
   isAdmin:boolean=false;
  admins=[
    {email:'divya123@gmail.com',password:'divya1000'},
    {email:'sabbu123@gmail.com',password:'sabbu1000'},
    {email:'malli123@gmail.com',password:'malli1000'}

  ]

  constructor(private _userService: UserserviceService, private _router: Router, private activatedRoute: ActivatedRoute, private _loginService: LoginService) { }


  ngOnInit(): void {
  }
  onLoginWithEmail=(form:NgForm)=>{
    let nadmin = form.value;
    const email=nadmin.email;
    const password=nadmin.password;
   
    for (let admin of this.admins){
      if ((admin.email===email)&&(admin.password===password)){
        this._router.navigate(['/admin'])
        this.isAdmin=true;
        
      }
    
    }
if (!this.isAdmin){
  alert("Invalid Credentials")
}


  }
  onSignUp=()=>{

  }
}
