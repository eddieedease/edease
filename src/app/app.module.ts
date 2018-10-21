import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import 'hammerjs';

import { HttpModule, JsonpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { WorkComponent } from './work/work.component';

const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  { path: '**', component: LandingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WorkComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ButtonsModule.forRoot(),
    HttpModule,
    JsonpModule,
    NgxPaginationModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
