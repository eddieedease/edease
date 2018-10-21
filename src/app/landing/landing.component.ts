import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
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

import { WorkComponent } from '../work/work.component';

import {
  EdSerService
} from '../ed-ser.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild(WorkComponent) workComponent: WorkComponent;
  // Ref to modal
  modalRef: BsModalRef;

  workArray = [];
  public p = 1;
  json;

  itemsOnWork = 12;

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

  openModal(template: TemplateRef < any > , _index) {
    const calcprojnumber = (this.itemsOnWork * (this.p - 1)) + _index;
    this.edSer.serSetWorkNumber(calcprojnumber);
    // this.workComponent.setUpCurrentObject();
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
}
