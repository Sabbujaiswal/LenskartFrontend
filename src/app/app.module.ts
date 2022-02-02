import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './components/frame/frame.component';
import { FrameDetailsComponent } from './components/frame-details/frame-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './components/login/login.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { SampleFramesComponent } from './components/sample-frames/sample-frames.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddFrameComponent } from './components/add-frame/add-frame.component';
import { UpdateFrameComponent } from './components/update-frame/update-frame.component';
import { DeleteFrameComponent } from './components/delete-frame/delete-frame.component';
import { EndComponent } from './components/end/end.component';
import { BasketComponent } from './components/basket/basket.component';
import { FrameChoiceComponent } from './components/frame-choice/frame-choice.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DetailsComponent } from './components/details/details.component';
import { AdminFramesComponent } from './components/admin-frames/admin-frames.component';
import { UsersComponent } from './components/users/users.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    FrameDetailsComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarouselComponent,
    LoginComponent,
    SubNavComponent,
    SampleFramesComponent,
    CartComponent,
    WishlistComponent,
    AddFrameComponent,
    UpdateFrameComponent,
    DeleteFrameComponent,
    EndComponent,
    BasketComponent,
    FrameChoiceComponent,
    AdminComponent,
    SignupComponent,
    DetailsComponent,
    AdminFramesComponent,
    UsersComponent,
    AdminLoginComponent
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
