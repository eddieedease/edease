import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  BsModalService
} from 'ngx-bootstrap/modal';
import {
  BsModalRef
} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {
  Http
} from '@angular/http';
import {
  DomSanitizer
} from '@angular/platform-browser';

import {
  Observable,
  Subject
} from 'rxjs';

import {
  throttleTime
} from 'rxjs/operators';
import {
  map
} from 'rxjs/operators';

import {
  EdSerService
} from '../ed-ser.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  // Ref to modal
  modalRef: BsModalRef;

  workArray = [];
  json;

  constructor(private http_: Http, private sanitizer: DomSanitizer, private modalService: BsModalService, private edSer: EdSerService) { 
    http_.get('assets/portfolio/data.json')
    .pipe(map(res => res.json()))
    .subscribe(
      article => {
        // GET JSON Object --> change to array
        this.json = article;
        console.log(this.json);
        // this.workArray = $.map(this.json, function (el) {
        //  return el;
        // });
        this.workArray = this.json;
      },
      error => console.error(error));
  }

  ngOnInit() {

    
  }

  openModal(template: TemplateRef < any > , _which, _id) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

}
