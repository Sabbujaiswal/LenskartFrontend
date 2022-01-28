import { Component, OnInit } from '@angular/core';
import { Frame } from 'src/app/models/frame';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  frames:Frame[]=[]
  total:number=0;
  constructor(private _wishlistService:WishlistService) { }

  ngOnInit(): void {
    this._wishlistService.getFrames().subscribe(data=>{
      this.frames=data;
      console.log(this.frames)
    })

  }

}
