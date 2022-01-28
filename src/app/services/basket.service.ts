import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basketItemList: any = [];
  public framesList = new BehaviorSubject<any>([]);
  constructor() { }

  getFrames() {
    return this.framesList.asObservable();
  }

  setFrames(frame: any) {
    this.basketItemList.push(...frame);
    this.framesList.next(frame);    
  }

  addToBasket(frame: any) {
    this.basketItemList.push(frame);
    this.framesList.next(this.basketItemList);
    this.getTotalPrice();
    console.log(this.basketItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.basketItemList.map((frame: any) => {
      grandTotal += frame.total;
    })
    return grandTotal;
  }


}
