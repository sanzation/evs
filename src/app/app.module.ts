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
import { DpsPage } from '../pages/dps/dps';
import { DpswrapPage } from '../pages/dpswrap/dpswrap';
import { CpsPage } from '../pages/cps/cps';
import { CpswrapPage } from '../pages/cpswrap/cpswrap';
import { WaPage } from '../pages/wa/wa';
import { WawrapPage } from '../pages/wawrap/wawrap';
import { WePage } from '../pages/we/we';
import { WewrapPage } from '../pages/wewrap/wewrap';
import { ParentPage } from '../pages/parent/parent';
import { OpparentPage } from '../pages/opparent/opparent';
import { MiscPage } from '../pages/misc/misc';
import { MiscwrapPage } from '../pages/miscwrap/miscwrap';
import { CamsPage } from '../pages/cams/cams';
import { CamDetailPage } from '../pages/cam-detail/cam-detail';
import { OpdetailPage } from '../pages/opdetail/opdetail';
import { MasterdataPage } from '../pages/masterdata/masterdata';
import { StockPage } from '../pages/stock/stock';
import { ExpendablePage } from '../pages/expendable/expendable';
import { MaterialflowPage } from '../pages/materialflow/materialflow';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { EvscallProvider } from '../providers/evscall/evscall';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
   // OpmPage,
    DpsPage, 
    DpswrapPage, 
    CpsPage, 
    CpswrapPage, 
    WaPage, 
    WawrapPage, 
    WePage, 
    WewrapPage,  
    MiscPage,
    MiscwrapPage,
    ParentPage,
    OpparentPage,  
    CamsPage,
    CamDetailPage,
    MasterdataPage,
    StockPage,
    ExpendablePage,
    MaterialflowPage,
    OpdetailPage,
    DashboardPage
	

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    OpmwrapPageModule,
    OpmPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DpswrapPage, 
    CpswrapPage, 
    WawrapPage, 
    WewrapPage, 
    MiscwrapPage,
    ParentPage, 
    OpparentPage,	  
    CamsPage,
    CamDetailPage,
    MasterdataPage,
    StockPage,
    ExpendablePage,
    MaterialflowPage,	  
    OpdetailPage,
    DashboardPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EvscallProvider
  ]
})
export class AppModule {}
