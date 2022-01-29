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
  searchOption = 'Search '
  options=[
    {id:1,title:'Brand',searchContent:'Search based on brand'},
    {id:2,title:'Category',searchContent:'Search based on category'},
    {id:3,title:'Gender',searchContent:'Search based on gender'}
   ]
  frames: Frame[] = []
  choice = ''
  constructor(private _frameService: FrameService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this._activatedRoute.queryParamMap.subscribe(map => {
      
      this._frameService.getAllFrames().subscribe({
        next: (data) => {
          this.frames = data
         // this.frames = data.filter(t=>{t.categories.forEach(cat=>{cat.categoryName==this.choice})})
         //  console.log(data);
        },
        error: error => console.log(error),
        // complete:()=>console.log('completed')
      })


    });
  }

  onSubmit = (frame: Frame) => {
    //  console.log(frame)
    this._router.navigate(['/frame-details', frame.frameId]);
  };
  changeValue(value:any){
    this.searchOption=value.searchContent
    this.choice=value.title.toLowerCase()
  }
}
