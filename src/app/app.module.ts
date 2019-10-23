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


import { NgxLoadingModule } from 'ngx-loading';

import 'hammerjs';

import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {  NgxPaginationModule} from 'ngx-pagination';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxGalleryModule } from 'ngx-gallery';


import {
  EdSerService
} from './ed-ser.service';

import { AppComponent } from './app.component';
// import { LandingComponent } from './landing/landing.component';
import { WorkComponent } from './work/work.component';
import { SiteComponent } from './site/site.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  // { path: 'landing', component: LandingComponent },
  { path: 'site', component: SiteComponent },
  { path: '',
    redirectTo: '/site',
    pathMatch: 'full'
  },
  // { path: '**', component: LandingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    // LandingComponent,
    WorkComponent,
    SiteComponent
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
    NgxLoadingModule.forRoot({}),
    HttpModule,
    HttpClientModule,
    JsonpModule,
    NgxPaginationModule,
    NgxGalleryModule,
    NgxPageScrollModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [EdSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
