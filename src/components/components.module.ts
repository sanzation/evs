import { NgModule,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { EvsCardComponent } from './evs-card/evs-card';
import { EvsHeaderComponent } from './evs-header/evs-header';
import { EvsFooterComponent } from './evs-footer/evs-footer';
@NgModule({
	declarations: [EvsCardComponent,
    EvsHeaderComponent,
    EvsFooterComponent],
	imports: [IonicPageModule.forChild(EvsFooterComponent)],
	exports: [EvsCardComponent,
    EvsHeaderComponent,
    EvsFooterComponent],
    	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
