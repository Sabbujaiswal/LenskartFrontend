import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  onClickShop=()=>{
    this._router.navigate(['/sample-frames'])
  }

}
