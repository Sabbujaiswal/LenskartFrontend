import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Frame } from 'src/app/models/frame';
import { AdminService } from 'src/app/services/admin.service';
import { FrameService } from 'src/app/services/frame.service';

@Component({
  selector: 'app-admin-frames',
  templateUrl: './admin-frames.component.html',
  styleUrls: ['./admin-frames.component.css']
})
export class AdminFramesComponent implements OnInit {

  userSearch = ''
  searchOption = 'Search '
  selected = 'domain';
  nframes: Frame[] = []
  options = [
    { id: 1, title: 'Brand', searchContent: 'Search based on brand' },
    { id: 2, title: 'Category', searchContent: 'Search based on category' },
    { id: 3, title: 'Size', searchContent: 'Search based on Size like small,medium' },
    { id: 4, title: 'Color', searchContent: 'Search based on color' },

  ]
  frames: Frame[] = []
  choice = ''
  constructor(private _frameService: FrameService, private _router: Router, private _activatedRoute: ActivatedRoute,private _adminServices:AdminService) { }

  ngOnInit(): void {
    console.log(this.userSearch)
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
  changeValue(value: any) {
    this.searchOption = value.searchContent
    this.choice = value.title.toLowerCase()
    console.log(this.choice)
  }
  showFrames = () => {

  }
  onSubmitForm(form: NgForm) {
    console.log("Choce " + this.choice)
    console.log("initial form value " + form.value);
    const formValue = form.value.search;
    console.log("B " + formValue)


    this._frameService.getAllFrames().subscribe(data => {
      // this.frames=data.filter(t=>{ 
      //   console.log(t.frameSize.toLowerCase())
      //   console.log(formValue)
      //   t.frameSize.toLowerCase()==formValue
      //   console.log(t.frameSize.toLowerCase()==formValue)
      // this.frames=data.filter(t=> t.frameSize.toLowerCase()==formValue )
      if (this.choice === "category") {
        this.frames = data.filter(t => {
          const listOfCategories = [...t.categories]
          return listOfCategories.some(value => value.categoryName.toLowerCase() === formValue.toLowerCase())

        }
        )


      }
      else if (this.choice === "size") {
        this.frames = data.filter(t => t.frameSize.toLowerCase() == formValue)
      }
      else if (this.choice === "brand") {
        this.frames = data.filter(t => {
          const listOfBrands = [t.brand]
          return listOfBrands.some(value => value.brandName.toLowerCase() === formValue.toLowerCase())
        })
      }
      else if(this.choice==="color"){
        this.frames=data.filter(t=>t.color.toLowerCase()===formValue)
      }
      else{
        this.frames=[]
      }

    })
    //this.frames=data.filter(t=>{t.categories.forEach(cat=>{cat.categoryName.toLowerCase()=="reading"
    //  console.log(cat.categoryName.toLowerCase())})})
    console.log(this.frames)

  }
  onDelete=(frame:Frame)=>{
    const frameId=frame.frameId;
    this._adminServices.deleteById(frameId).subscribe(data=>this.ngOnInit())
    

  }
  
}
