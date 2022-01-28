import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frame } from '../../models/frame';
import { FrameService } from '../../services/frame.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sample-frames',
  templateUrl: './sample-frames.component.html',
  styleUrls: ['./sample-frames.component.css']
})
export class SampleFramesComponent implements OnInit {

  frames: Frame[] = []
  brand = ''
  constructor(private _frameService: FrameService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe(map => {
      let fbrand = map.get('brand');
      if (fbrand)
        this.brand = fbrand;



      this._frameService.getAllFrames().subscribe({


        next: (data) => {

          for (let i = 1; i <= 3; i++) {
            console.log(i)
            this.frames.push(data[i])
            console.log(data[i])
          }

          //console.log(data[0]);
        },
        error: error => console.log(error),
        complete: () => console.log('completed')
      })
    });
  }
  onSubmit = (frame: Frame) => {
    console.log(frame)
   // if (this.count<1)
    this._router.navigate(['/login']);
  };
  seeAll = () => {
   // if (this._login.count<1)
    this._router.navigate(['/login']);

  }
}
