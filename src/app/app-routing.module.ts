import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { AddFrameComponent } from './components/add-frame/add-frame.component';
import { AdminFramesComponent } from './components/admin-frames/admin-frames.component';
import { AdminComponent } from './components/admin/admin.component';
import { BasketComponent } from './components/basket/basket.component';
import { DeleteFrameComponent } from './components/delete-frame/delete-frame.component';
import { DetailsComponent } from './components/details/details.component';
import { EndComponent } from './components/end/end.component';
import { FrameDetailsComponent } from './components/frame-details/frame-details.component';
import { FrameComponent } from './components/frame/frame.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SampleFramesComponent } from './components/sample-frames/sample-frames.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdateFrameComponent } from './components/update-frame/update-frame.component';
import { UsersComponent } from './components/users/users.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'frame',component:FrameComponent},
  {path:'basket',component:BasketComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'login',component:LoginComponent},
  {path:'sub-nav',component:SubNavComponent},
  {path:'end',component:EndComponent},
  {path:'signup',component:SignupComponent},
  

  {path:'admin',component:AdminComponent,
  children:[
    {path:'add-product',component:AddFrameComponent},
    {path:'update-product',component:UpdateFrameComponent},
    {path:'delete-product',component:DeleteFrameComponent},
    {path:'admin-frame',component:AdminFramesComponent},
    {path:'users',component:UsersComponent},
  ]},
  
  {path:'details/:id',component:DetailsComponent},

  {path:'sample-frames',component:SampleFramesComponent},
  {path:'frame-details/:id',component:FrameDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


