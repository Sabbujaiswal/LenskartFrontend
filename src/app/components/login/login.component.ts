import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  //public loginForm!:FormGroup;
  //loginDetails: any = {mobile:'',password:'',email:'',password1:''};
  //errorMessage!:string;
  
  constructor(private _userService: UserserviceService, private _router: Router, private activatedRoute: ActivatedRoute,private _loginService:LoginService,private formBuilder:FormBuilder,private http:HttpClient) { }
  // returnUrl: string = ''
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      mobile:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      password1:['',Validators.required]
    });
  }

    // this.activatedRoute.queryParamMap.subscribe(params => {
    //   let url = params.get('returnUrl');
    //   console.log(url);
    //   if (url) {
    //     alert('invalid crendentials');
    //     this.returnUrl = url;
    //   }
  //   })
  // }

  onLoginWithMobile(){
    this.http.get<any>("http://localhost:8081/user-api/users")
    .subscribe(response=>{
      const user=response.find((a:any)=>{
        return a.mobile===this.loginForm.value.mobile && a.password === this.loginForm.value.password;
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this._router.navigate(['/frame'])
      }else{
        alert("Invalid Credentials");
      }
    
  },err=>{
    alert('Oops!!! went wrong');
  })
}

onLoginWithEmail(){
  this.http.get<any>("http://localhost:8081/user-api/users")
    .subscribe(res=>{
      const nuser=res.find((a:any)=>{
        return a.mobile===this.loginForm.value.email && a.password === this.loginForm.value.password1;
      });
      if(nuser){
        alert("Login Success");
        this.loginForm.reset();
        this._router.navigate(['/frame'])
      }else{
        alert("Invalid Credentials");
      }
    
  },err=>{
    alert('Oops!!! went wrong');
  })
  
}
}



// function onLoginWithEmail() {
//   throw new Error('Function not implemented.');
// }
// onLoginWithEmail(){
//   this.http.get<any>("http://localhost:8081/user-api/users")
//   .subscribe(response=>{
//     const user=response.find((a:any)=>{
//       return a.email===this.loginForm.value.email && a.password1 === this.loginForm.value.password1;
//     });
//     if(user){
//       alert("Login Success");
//       this.loginForm.reset();
//       this._router.navigate(['/frame'])
//     }else{
//       alert("Invalid Credentials");
//     }
  
// },err1=>{
//   alert('Oops!!! went wrong');
// })
// }





  // function onLoginWithEmail() {
  //   throw new Error('Function not implemented.');
  // }
//   onLoginWithMobile = (loginForm: NgForm) => {
//     let nuser = loginForm.value;
//    // console.log(loginForm.value)
//     this._userService
//       .getUserByMobileAndPassword(nuser.mobile, nuser.password)
//       .subscribe((data) => {
//        // console.log(data);
//         this.user = data;
//         //console.log(this.user)
//        this._router.navigate(['/frame']);
//       });
//        this._loginService.countOfLoginPage+=1
      
//   };

//   onLoginWithEmail = (form: NgForm) => {
//     let nuser = form.value;
//     console.log(form.value)

//     this._userService
//       .getUserByEmailAndPassword(nuser.email, nuser.password)
//       .subscribe((data) => {
//        // console.log(data);
//         this.user = data;
//         this._router.navigate(['/frame']);
//       });
//        this._loginService.countOfLoginPage+=1

//   }

// }




