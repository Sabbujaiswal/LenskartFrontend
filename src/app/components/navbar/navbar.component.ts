import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { LoginService } from 'src/app/services/login.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  count: number = 0;
  length1: number = 0;
  length2: number = 0;
  nlogStatus: string = ""

  constructor(private _router: Router, private _basketService: BasketService, private _wishlistService: WishlistService, private _loginService: LoginService) { }

  ngOnInit(): void {

    
    console.log("retLo "+this._loginService.returnLogStatus())
    this.nlogStatus = this._loginService.logStatus;
    console.log(this._loginService.countOfLoginPage);
    console.log("Hi")
    if (this._loginService.countOfLoginPage == 1) {
      this.nlogStatus = "LogOut"
    }
    this._wishlistService.getFrames().subscribe(data => {
      this.length1 = data.length
      console.log(this.length1)
    })
    this._basketService.getFrames().subscribe(data => {
     
      this.length2 = data.length
    })



  }


  // login=()=>{
  //   this.count+=1;
  //   if (this.count==1){
  //     this._router.navigate(['/login'])
  //     this.logStatus="LogOut"
  //   }  
  //   if(this.logStatus=="LogOut" && this.count==2){
  //     this._router.navigate(['/end'])
  //   }
  // }

  login = () => {

    // if (!this._loginService.isUserLoggedIn()) {
    //   let user = this._router.navigate(['/login'])


    // }


    this.count += 1;
    if (this._loginService.countOfLoginPage == 0 && this._loginService.logStatus == "Login/SignUp") {
      let user = this._router.navigate(['/login'])

      //console.log("Hi")
      // console.log(this._loginService.countOfLoginPage+=1)
      console.log(this._loginService.countOfLoginPage)
      setTimeout(() => {
      console.log(this._loginService.countOfLoginPage)

        if (this._loginService.countOfLoginPage == 1) {
          this._loginService.logStatus = "LogOut";
            
          this.nlogStatus=this._loginService.logStatus;

          

        }
      }, 10000)

    }

    else if (this._loginService.logStatus == "LogOut") {
      this._loginService.countOfLoginPage = 0;
     
      this._loginService.logStatus = "Login/SignUp"
      this.nlogStatus=this._loginService.logStatus;
      this._router.navigate(['/end'])
      .then(() => {
        window.location.reload();
      });
    }

  }

  onClickGif = () => {
    this._router.navigate(['/sub-nav'])

  }
  onClickFrames = () => {
    //console.log(this._loginService.countOfLoginPage+=1)
    this._router.navigate(['/sample-frames'])

  }
  onClickBasket = () => {
    this._router.navigate(['/basket'])

  }
  onClickWishlist = () => {
    this._router.navigate(['/wishlist'])

  }
}
