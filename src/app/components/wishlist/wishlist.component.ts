import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Frame } from 'src/app/models/frame';
import { BasketService } from 'src/app/services/basket.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  frames:Frame[]=[]
  total:number=0;
  constructor(private _wishlistService:WishlistService,private _router:Router,private _basketService:BasketService) { }

  ngOnInit(): void {
    this._wishlistService.getFrames().subscribe(data=>{
      this.frames=data;
      console.log(this.frames)
     
    })

  }
  onSubmit = (frame: Frame) => {
    //  console.log(frame)
    this._router.navigate(['/details', frame.frameId]);
  };
  
  
 remove=(frame:Frame)=>{
   this._wishlistService.removeFrame(frame);
   
 }
 addToBasket=(frame:Frame)=>{
  this._basketService.addToBasket(frame);
  this._wishlistService.removeFrame(frame);
  
}

}
