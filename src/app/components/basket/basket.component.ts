import { Component, OnInit } from '@angular/core';
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
  constructor(private _basketService:BasketService) { }

  ngOnInit(): void {
    this._basketService.getFrames().subscribe(data=>{
      this.frames=data;
      this.total=this._basketService.getTotalPrice();
      console.log(this.frames)
    })

  }

}
