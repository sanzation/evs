import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { con } from '../../utils/api';

/*
  Generated class for the EvscallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class EvscallProvider {

	
	test : string= con.url;
	ent : string="/getDataEnt";
	list : string="/getDataList";
	rou : string="/getRouList";
	fill : string="/getFillList";
	cam : string="/getCamList";
	op : string="/getOpList";
	cnt : string="/getOpCnt";

  constructor(public http: Http) {
  }
	getData(){
	return this.http
		.get(`${this.test}${this.ent}`)
		.map(res => res.json())
		;
	
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
	getOpCnt(){
	return this.http.get(`${this.test}${this.cnt}`)
		.map(res => res.json());
	}
	getOp(area: string){
	return this.http.get(`${this.test}${this.op}?area=${area}`)
		.map(res => res.json());
		
									
	}

}

