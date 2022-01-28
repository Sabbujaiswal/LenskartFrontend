import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Frame } from 'src/app/models/frame';
import { FrameService } from 'src/app/services/frame.service';

@Component({
  selector: 'app-frame-details',
  templateUrl: './frame-details.component.html',
  styleUrls: ['./frame-details.component.css']
})
export class FrameDetailsComponent implements OnInit {
  
  frameId!:number;
  frame!:Frame;
  constructor(private _activatedRoute:ActivatedRoute,
    private _frameService:FrameService) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(map=>{
    
      this.frameId= parseInt(map.get('id')!);
      console.log(this.frameId);
     
     })
     this._frameService.getById(this.frameId).subscribe(data=>this.frame=data);
   }
  }


