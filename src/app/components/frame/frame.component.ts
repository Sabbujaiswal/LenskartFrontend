import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frame } from 'src/app/models/frame';
import { FrameService } from 'src/app/services/frame.service';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  search=''
  frames:Frame[]=[]
  brand=''
  constructor(private _frameService:FrameService,private _router:Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this._activatedRoute.queryParamMap.subscribe(map=>{
       let fbrand=map.get('brand');
       if(fbrand)
       this.brand=fbrand;

    this._frameService.getAllFrames().subscribe({
      next:(data)=>{
        this.frames=data;
        console.log(data);
      },
      error:error=>console.log(error),
      complete:()=>console.log('completed')})
    });
  }

  onSubmit=(frame:Frame)=>{
    console.log(frame)
    this._router.navigate(['/frame-details',frame.frameId]);
  };
}
