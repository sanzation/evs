import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventProvider {

	private footerShowSource = new Subject<string>();
//	private footerIconSource = new Subject<string>();
	
	footerShown$ = this.footerShowSource.asObservable();
//	footerIcon$ = this.footerIconSource.asObservable();

	showFooter(show: string){
		this.footerShowSource.next(show);
//		this.footerIconSource.next(icon);
	}

}
