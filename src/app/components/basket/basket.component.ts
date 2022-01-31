import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frame } from 'src/app/models/frame';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  frames:Frame[]=[]
  total:number=0;
  
  constructor(private _basketService:BasketService,private _router:Router) { }

  ngOnInit(): void {
    this._basketService.getFrames().subscribe(data=>{
      this.frames=data;
      this.total=this._basketService.getTotalPrice();
      console.log(this.total)
      console.log(this.frames)
      
    })


  }
  remove=(frame:Frame)=>{
    this._basketService.removeFrame(frame);

  }
  onSubmit = (frame: Frame) => {
    //  console.log(frame)
    this._router.navigate(['/details', frame.frameId]);
  };

}
