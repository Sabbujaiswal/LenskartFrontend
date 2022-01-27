import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:User;
  constructor(private _userService:UserserviceService,private _router:Router) { }

  ngOnInit(): void {
  }

  onLoginWithMobile = (loginForm: NgForm) => {
    let nuser = loginForm.value;

    console.log(loginForm.value)

    this._userService
      .getUserByMobileAndPassword(nuser.mobile, nuser.password)
      .subscribe((data) => {
        console.log(data);
        this.user = data;
        this._router.navigate(['/frame']);
      });
  };

  onLoginWithEmail = (form: NgForm) => {
    let nuser = form.value;

    this._userService
      .getUserByEmailAndPassword(nuser.email, nuser.password)
      .subscribe((data) => {
        console.log(data);
        this.user = data;
        this._router.navigate(['/frame']);
      });
}

}
  




