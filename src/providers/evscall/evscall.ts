import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EvscallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EvscallProvider {
url;
  constructor(public http: Http) {
    console.log('der provider juckt');
	  this.url=
	'http://localhost:8100/api/distancematrix/json?units=metric&origins=Washington,DC&destinations=New+York+City,NY';
  }
	getData(){
	return this.http.get(this.url)
		.map(res => res.json());
	
	}

}
