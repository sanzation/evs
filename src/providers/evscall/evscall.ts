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

	
	//test : string="http://localhost:8100/api";
	test : string="http://evs.sbs07wmsdom.local:38317/EvsDataServiceWeb";

	ent : string="/getDataEnt";
	list : string="/getDataList";
	rou : string="/getRouList";
	fill : string="/getFillList";
	cam : string="/getCamList";

  constructor(public http: Http) {
  }
	getData(){
	return this.http.get(`${this.test}${this.ent}`)
		.map(res => res.json());
	
	}
	
	getList(){
	return this.http.get(`${this.test}${this.list}`)
		.map(res => res.json());
	
	}
	
	getRou(){
	return this.http.get(`${this.test}${this.rou}`)
		.map(res => res.json());
	
	}
	getCam(){
	return this.http.get(`${this.test}${this.cam}`)
		.map(res => res.json());
	
	}
	getFill(){
	return this.http.get(`${this.test}${this.fill}`)
		.map(res => res.json());
	
	}
}

