import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
  login=()=>{
=======
  onClickGif=()=>{
>>>>>>> 25842e8d93ac66d169d23eeb4fe3af28d18920dc
    this._router.navigate(['/login'])
  }
}
