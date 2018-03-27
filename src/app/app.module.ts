import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OpmPage } from '../pages/opm/opm';
import { DpsPage } from '../pages/dps/dps';
import { CpsPage } from '../pages/cps/cps';
import { WaPage } from '../pages/wa/wa';
import { WePage } from '../pages/we/we';
import { ParentPage } from '../pages/parent/parent';
import { MiscPage } from '../pages/misc/misc';
import { CamsPage } from '../pages/cams/cams';
import { CamDetailPage } from '../pages/cam-detail/cam-detail';
import { EvscallProvider } from '../providers/evscall/evscall';
import { EvstestProvider } from '../providers/evstest/evstest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OpmPage,
    DpsPage, 
    CpsPage, 
    WaPage, 
    WePage, 
    MiscPage,
    ParentPage,
    CamsPage,
    CamDetailPage	  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OpmPage,
    DpsPage, 
    CpsPage, 
    WaPage, 
    WePage, 
    MiscPage,
    ParentPage, 
    CamsPage,
    CamDetailPage

    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EvscallProvider
  ]
})
export class AppModule {}
