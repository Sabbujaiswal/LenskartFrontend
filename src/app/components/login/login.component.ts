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
      console.log(url);
      if (url) {
        alert('invalid crendentials');
        this.returnUrl = url;
      }
    })
  }

  onLoginWithMobile = (loginForm: NgForm) => {
    let nuser = loginForm.value;
    console.log(loginForm.value)
    this._userService
      .getUserByMobileAndPassword(nuser.mobile, nuser.password)
      .subscribe((data) => {
        // console.log(data);
        this.user = data;
        //console.log(this.user)
        this._router.navigate(['/frame']);
      });
    this._loginService.countOfLoginPage += 1

  };

  onLoginWithEmail = (form: NgForm) => {
    let nuser = form.value;
    console.log(nuser)
    this._userService
      .getUserByEmailAndPassword(nuser.email, nuser.password)
      .subscribe((data) => {
        // console.log(data);
        this.user = data;
        this._router.navigate(['/frame']);
      });
    this._loginService.countOfLoginPage += 1

  }
  onSignUp=()=>{
    this._router.navigate(['/signup']);
  }
}





