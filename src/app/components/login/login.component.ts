import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:User;
  constructor(private _userService:UserserviceService,private _router:Router,private activatedRoute:ActivatedRoute) { }
  returnUrl:string=''
  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe(params=>{
      let url=params.get('returnUrl');
      console.log(url);
      if(url){
        alert('invalid crendentials');
        this.returnUrl=url;
      }
    
     
    })
 
  }

  onLoginWithMobile = (loginForm: NgForm) => {
    let nuser = loginForm.value;

    console.log(loginForm.value)

    this._userService
      .getUserByMobileAndPassword(nuser.mobile, nuser.password)
      .subscribe(response=>{
        if(!response){
          alert('invalid credentials');
          this._router.navigate(['/login']);
        }else if(this.returnUrl !=null){
          this._router.navigate([this.returnUrl]);
        }else{
          this._router.navigate(['/home']);
        }

      })

        
}

  onLoginWithEmail = (form: NgForm) => {
    let nuser = form.value;

    this._userService
      .getUserByEmailAndPassword(nuser.email, nuser.password)
      .subscribe((response) => {
        if(!response){
          alert('invalid credentials');
          this._router.navigate(['/login']);
        }else if(this.returnUrl !=null){
          this._router.navigate([this.returnUrl]);
        }else{
          this._router.navigate(['/home']);
        }

      })

        
}
}