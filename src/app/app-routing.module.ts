import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameDetailsComponent } from './components/frame-details/frame-details.component';
import { FrameComponent } from './components/frame/frame.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'frame',component:FrameComponent},
  {path:'frame-details/:id',component:FrameDetailsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
