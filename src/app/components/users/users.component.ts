import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  constructor(private _userService:UserserviceService ,private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe(map => {

      this._userService.getAllUsers().subscribe({
        next: (data) => {
          console.log(data)
          this.users=data
          // this.frames = data.filter(t=>{t.categories.forEach(cat=>{cat.categoryName==this.choice})})
          //  console.log(data);
        },
        error: error => console.log(error),
        // complete:()=>console.log('completed')
      })


    });
  }

}
