import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { OpmPage } from '../pages/opm/opm';
import { DpsPage } from '../pages/dps/dps';
import { CpsPage } from '../pages/cps/cps';
import { WaPage } from '../pages/wa/wa';
import { WePage } from '../pages/we/we';
import { MiscPage } from '../pages/misc/misc';
import { EvscallProvider } from '../providers/evscall/evscall';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    OpmPage,
    DpsPage, 
    CpsPage, 
    WaPage, 
    WePage, 
    MiscPage
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
    DetailPage,
    OpmPage,
    DpsPage, 
    CpsPage, 
    WaPage, 
    WePage, 
    MiscPage

    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EvscallProvider
  ]
})
export class AppModule {}
