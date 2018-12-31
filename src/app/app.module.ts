import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OpmPageModule} from '../pages/opm/opm.module';
import { OpmwrapPageModule } from '../pages/opmwrap/opmwrap.module';
import { DpsPageModule} from '../pages/dps/dps.module';
import { DpswrapPageModule } from '../pages/dpswrap/dpswrap.module';
import { CpsPageModule} from '../pages/cps/cps.module';
import { CpswrapPageModule } from '../pages/cpswrap/cpswrap.module';
import { WaPageModule} from '../pages/wa/wa.module';
import { WawrapPageModule } from '../pages/wawrap/wawrap.module';
import { WePageModule} from '../pages/we/we.module';
import { WewrapPageModule } from '../pages/wewrap/wewrap.module';
import { MiscPageModule} from '../pages/misc/misc.module';
import { MiscwrapPageModule } from '../pages/miscwrap/miscwrap.module';
import { ParentPage } from '../pages/parent/parent';
import { OpparentPage } from '../pages/opparent/opparent';
import { CamsPage } from '../pages/cams/cams';
import { CamDetailPage } from '../pages/cam-detail/cam-detail';
import { OpdetailPage } from '../pages/opdetail/opdetail';
import { MasterdataPage } from '../pages/masterdata/masterdata';
import { StockPage } from '../pages/stock/stock';
import { ExpendablePage } from '../pages/expendable/expendable';
import { MaterialflowPage } from '../pages/materialflow/materialflow';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { EvscallProvider } from '../providers/evscall/evscall';
import { EventProvider } from '../providers/eventprovider/eventprovider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParentPage,
    OpparentPage,  
    CamsPage,
    CamDetailPage,
    MasterdataPage,
    StockPage,
    ExpendablePage,
    MaterialflowPage,
    OpdetailPage
	

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    OpmwrapPageModule,
    OpmPageModule,
    DpswrapPageModule,
    DpsPageModule,
    CpswrapPageModule,
    CpsPageModule,
    WawrapPageModule,
    WaPageModule,
    WewrapPageModule,
    WePageModule,
    MiscwrapPageModule,
    MiscPageModule,
    DashboardPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParentPage, 
    OpparentPage,	  
    CamsPage,
    CamDetailPage,
    MasterdataPage,
    StockPage,
    ExpendablePage,
    MaterialflowPage,	  
    OpdetailPage,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EvscallProvider,
    EventProvider
  ]
})
export class AppModule {}
