import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  anio: number = new Date().getFullYear();

  loading = true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.loading = false;
  }, 1000);
  
  }

}
