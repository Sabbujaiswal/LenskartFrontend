import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Frame } from 'src/app/models/frame';
import { BasketService } from 'src/app/services/basket.service';
import { FrameService } from 'src/app/services/frame.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  frameId!:number;
  frame!:Frame;
  constructor(private _activatedRoute:ActivatedRoute,
    private _frameService:FrameService,private _basketService:BasketService,private _wishlistService:WishlistService) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(map=>{
    
      this.frameId= parseInt(map.get('id')!);
      console.log(this.frameId);
     
     })
     this._frameService.getById(this.frameId).subscribe(data=>this.frame=data);
   }


}
