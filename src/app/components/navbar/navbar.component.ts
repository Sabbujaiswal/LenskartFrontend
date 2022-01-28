import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  count:number=0;
  logStatus:string="Login/SignUp"
  constructor(private _router:Router) { }
  // loggingin:string="Login/SignUp";
  // logout:string="LogOut";
  ngOnInit(): void {
  }
  login=()=>{
    this.count+=1;
    if (this.count==1){
      this._router.navigate(['/login'])
      this.logStatus="LogOut"
    }  
    if(this.logStatus=="LogOut" && this.count==2){
      this._router.navigate(['/end'])
    }
  }

  
  
  onClickGif=()=>{
    this._router.navigate(['/sub-nav'])

  }
  onClickFrames=()=>{
    this._router.navigate(['/sample-frames'])
    
  }
  onClickBasket=()=>{
    this._router.navigate(['/basket'])

  }
  onClickWishlist=()=>{
    this._router.navigate(['/wishlist'])

  }
}
