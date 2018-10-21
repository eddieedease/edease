import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';
import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';



// import evironment for current dev bunlde
import {
  environment
} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class EdSerService {

  cur_WorkNumber = 0;
  cur_Language = 'nl';

  constructor() {
    console.log('Service is linked');
  }

  serSetWorkNumber(_value) {
    this.cur_WorkNumber = _value;
  }

 

}
