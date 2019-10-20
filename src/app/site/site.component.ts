import { Component, OnInit } from '@angular/core';
declare var dz_rev_slider_7: any;
declare var jQuery: any;
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})



export class SiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready(function() {
      'use strict';
      dz_rev_slider_7();
    });
  }

}
