import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef
} from '@angular/core';
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
  WorkComponent
} from '../work/work.component';

import {
  EdSerService
} from '../ed-ser.service';


declare var dz_rev_slider_7: any;
declare var jQuery: any;


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  anio: number = new Date().getFullYear();

  @ViewChild(WorkComponent, {
    static: true
  }) workComponent: WorkComponent;


  loading = false;

  // Ref to modal
  modalRef: BsModalRef;

  workArray = [];
  public p = 1;
  json;

  itemsOnWork = 8;

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
          console.log(this.workArray);
        },
        error => console.error(error));
  }

  ngOnInit() {

    setTimeout(() => {
      this.loading = false;
    }, 1000);

  }

  openModal(template: TemplateRef < any > , _index) {
    const calcprojnumber = (this.itemsOnWork * (this.p - 1)) + _index;
    this.edSer.serSetWorkNumber(calcprojnumber);
    // this.workComponent.setUpCurrentObject();
    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });
  }

}
