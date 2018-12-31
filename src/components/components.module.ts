import { NgModule,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { EvsCardComponent } from './evs-card/evs-card';
import { EvsHeaderComponent } from './evs-header/evs-header';
import { EvsFooterComponent } from './evs-footer/evs-footer';
import { EvsBarfooterComponent } from './evs-barfooter/evs-barfooter';
@NgModule({
	declarations: [EvsCardComponent,
    EvsHeaderComponent,
    EvsFooterComponent,
    EvsBarfooterComponent],
	imports: [
			IonicPageModule.forChild(EvsFooterComponent),
			IonicPageModule.forChild(EvsBarfooterComponent)
			],
	exports: [EvsCardComponent,
    EvsHeaderComponent,
    EvsFooterComponent,
    EvsBarfooterComponent],
    	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
