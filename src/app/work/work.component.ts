import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import {
  Observable,
  Subject
} from 'rxjs';

import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
import {
  DomSanitizer
} from '@angular/platform-browser';
import {
  Http, HttpModule
} from '@angular/http';
import {
  map
} from 'rxjs/operators';

import {
  EdSerService
} from '../ed-ser.service';


// Needed for Jquery
// declare var $: any;


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, OnDestroy {
  json;
  galloaded;
  workArray = [];

  public p;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];
  
  // the json file readings
  workContentText: String = '';
  currentTitle = '';
  currentCustomer = '';
  currentTags = [];

  subWorkNumber;
  workNumber;

  currentWorkObject;

  constructor(private http_: Http, private sanitizer: DomSanitizer, private edSer: EdSerService) {

  }



  // gets called when initializing component
  ngOnInit() {
    // window.scrollTo(0, 0);
    this.http_.get('assets/portfolio/data.json')
      .pipe(map(res => res.json()))
      .subscribe(
        article => {
          this.json = article;
          this.workArray = this.json;
          this.setUpCurrentObject();
        },
        error => console.error(error));



    this.galleryOptions = [{
        width: '500px',
        height: '400px',
        thumbnailsColumns: 4,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnails: true,
        layout:  'thumbnails-bottom',
        imageInfinityMove: true,
        previewInfinityMove: true
        /* previewFullscreen: true */
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '90%',
        height: '500px',
        imageSize: 'contain',
        imagePercent: 80,
        thumbnailsPercent: 20,
       
        previewDescription: true
      },
      // max-width 400
      {
        breakpoint: 400,
        thumbnailsColumns: 2,
        preview: false,
        height: '200px',
      }
    ];
  }

  // prev or next work
  // _direction can be 'prev' or 'next' String
  cycleWork(_direction) {

    switch (_direction) {
      case 'prev':
        if (this.edSer.cur_WorkNumber === 0) {
          this.edSer.cur_WorkNumber = this.workArray.length - 1;
          console.log(this.edSer.cur_WorkNumber);
        } else {
          this.edSer.cur_WorkNumber = this.edSer.cur_WorkNumber - 1;
        }

        this.setUpCurrentObject();

        break;
      case 'next':
        if (this.edSer.cur_WorkNumber === this.workArray.length - 1) {
          this.edSer.cur_WorkNumber = 0;
        } else {
          this.edSer.cur_WorkNumber = this.edSer.cur_WorkNumber + 1;
        }

        this.setUpCurrentObject();
        break;
    }
  }

  setUpCurrentObject() {
    console.log('setting up current object');
    this.galleryImages = [];
    this.currentWorkObject = this.workArray[this.edSer.cur_WorkNumber];

    this.currentTitle = this.workArray[this.edSer.cur_WorkNumber].title;
    this.currentCustomer = this.workArray[this.edSer.cur_WorkNumber].customer;
    this.currentTags = this.workArray[this.edSer.cur_WorkNumber].tags;

    // set content text
    switch (this.edSer.cur_Language) {
      case 'nl':
        this.workContentText = this.workArray[this.edSer.cur_WorkNumber].wysignl;
        break;
      case 'en':
        this.workContentText = this.workArray[this.edSer.cur_WorkNumber].wysigen;
        break;


    }

    this.currentWorkObject.images.forEach(element => {
      const imgobj = {
        small: element,
        medium: element,
        big: element
      };
      this.galleryImages.push(imgobj);
    });
  }

  ngOnDestroy() {

  }
}
