import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { opData } from '../../utils/types';
import { url } from '../../utils/api.json';

/*
  Generated class for the EvscallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class EvscallProvider {

	
	test : string= url;
	ent : string="/getDataEnt";
	list : string="/getDataList";
	rou : string="/getRouList";
	fill : string="/getFillList";
	cam : string="/getCamList";
	op : string="/getOpList";

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

	getOp(area: string){
	return this.http.get(`${this.test}${this.op}?area=${area}`)
		.map(res => res.json());
		
         //let opL : Array<opData>= new Array<opData>();	
	//opL.push(new opData('Like-Item Gruppenfehler','close-circle','ZMA1050','Like-Item Gruppenfehler Strategie OPM auf Lagerbestand',434,'19.03.1234 23:24'));
	//opL.push(new opData('Artikelanzahl','stats','script','Artikelanzahl: \n OPM - 1234 \n DPS - 1233 \n CPS - 12344 \n CPSMAN 21344',1434,'19.03.1234 23:24'));

	//return	opL;
									
	}

}

