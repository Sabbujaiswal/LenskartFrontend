import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  constructor(private _userService: UserserviceService, private _router: Router, private activatedRoute: ActivatedRoute, private _loginService: LoginService) { }
  returnUrl: string = ''
  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe(params => {
      let url = params.get('returnUrl');
      // console.log(url);
      if (url) {
        
        this.returnUrl = url;
      }
    })
  }

  onLoginWithEmail = (form: NgForm) => {
    console.log("Email called")
    let nuser = form.value;

    this._userService
      .getUserByEmailAndPassword(nuser.email, nuser.password)
      .subscribe((data) => {
        this.user = data;
        this._router.navigate(['/frame']);
        if (data){
        console.log(this._loginService.countOfLoginPage)
       this._loginService.countOfLoginPage+=1
       console.log(this._loginService.countOfLoginPage)

      }
      });

  }
  onSignUp=()=>{
    this._router.navigate(['/signup']);
  }
}





