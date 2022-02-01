import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public wishList: any = [];
  public framesList = new BehaviorSubject<any>([]);
  constructor() { }

  getFrames() {
    return this.framesList.asObservable();
  }

  setFrames(frame: any) {
    this.wishList.push(...frame);
    this.framesList.next(frame);    
  }

  addToWishlist(frame: any) {
    this.wishList.push(frame);
    this.framesList.next(this.wishList);
    console.log(this.wishList);
  }


  removeFrame(frame:any){
  //  this.basketItemList.map((f:any,index:any)=>{
  //    if (frame.frameId==f.frameId){
  //      this.basketItemList.splice(index,1);
  //    }
  //  })
  //  this.framesList.next(this.basketItemList);
    this.wishList.map((f:any,index:any)=>{
      if (frame.frameId===f.frameId){
        this.wishList.splice(index,1)
      }
    })
    this.framesList.next(this.wishList)


}
  

  
}
