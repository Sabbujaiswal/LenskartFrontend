import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Frame } from '../../models/frame';
import { FrameService } from '../../services/frame.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sample-frames',
  templateUrl: './sample-frames.component.html',
  styleUrls: ['./sample-frames.component.css']
})
export class SampleFramesComponent implements OnInit {

  frames: Frame[] = []
  brand = ''
  constructor(private _frameService: FrameService, private _router: Router, private _activatedRoute: ActivatedRoute, private _loginService: LoginService) { }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe(map => {
      let fbrand = map.get('brand');
      if (fbrand)
        this.brand = fbrand;
      this._frameService.getAllFrames().subscribe({
        next: (data) => {

          for (let i = 1; i <= 6; i++) {
            console.log(i)
            this.frames.push(data[i])
           // console.log(data[i])
          }

          //console.log(data[0]);
        },
        error: error => console.log(error),
        complete: () => console.log('completed')
      })
    });
  }

  onSubmit = (frame: Frame) => {
    if (this._loginService.countOfLoginPage==0 && this._loginService.logStatus=="Login/SignUp"){
      this._router.navigate(['/login']);
     // console.log(this._loginService.countOfLoginPage);
     
     console.log( this._loginService.logStatus)
     setTimeout(()=>{
      if ( this._loginService.countOfLoginPage==1){
        this._loginService.logStatus="LogOut"
       
      }
    },9000)
    
    }else{
      this._router.navigate(['/frame'])
    }
   
  };

  seeAll = () => {
   
    if (this._loginService.countOfLoginPage==0 && this._loginService.logStatus=="Login/SignUp"){
     // console.log(this._loginService.countOfLoginPage)
      this._router.navigate(['/login']);
      //console.log(this._loginService.countOfLoginPage);
      console.log( this._loginService.logStatus)
      setTimeout(()=>{
        if ( this._loginService.countOfLoginPage==1){
          this._loginService.logStatus="LogOut"
  
        }
      },10000)

    }else{
      this._router.navigate(['/frame'])
    }

  }
}
