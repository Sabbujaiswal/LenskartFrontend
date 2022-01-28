import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { BasketComponent } from './components/basket/basket.component';
import { EndComponent } from './components/end/end.component';
import { FrameDetailsComponent } from './components/frame-details/frame-details.component';
import { FrameComponent } from './components/frame/frame.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SampleFramesComponent } from './components/sample-frames/sample-frames.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'frame',component:FrameComponent},
  {path:'basket',component:BasketComponent},
  {path:'login',component:LoginComponent},
  {path:'sub-nav',component:SubNavComponent},
  {path:'end',component:EndComponent},

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


