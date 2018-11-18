import { NgModule } from '@angular/core';
import { EvsCardComponent } from './evs-card/evs-card';
import { EvsHeaderComponent } from './evs-header/evs-header';
import { EvsFooterComponent } from './evs-footer/evs-footer';
@NgModule({
	declarations: [EvsCardComponent,
    EvsHeaderComponent,
    EvsFooterComponent],
	imports: [],
	exports: [EvsCardComponent,
    EvsHeaderComponent,
    EvsFooterComponent]
})
export class ComponentsModule {}
