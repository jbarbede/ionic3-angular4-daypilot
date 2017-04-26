import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DayPilot } from 'daypilot-pro-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DpPage } from '../pages/dp/dp';
import { DpComponent } from '../components/dp/dp';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DpPage,
    DpComponent,
    DayPilot.Angular.Scheduler
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DpPage,
    DpComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
