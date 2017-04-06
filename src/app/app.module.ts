import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import {PrayerPage} from '../pages/prayer/prayer';
import {OthersPage} from '../pages/others/others';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [ 
    MyApp,
    HomePage,
   RegisterPage,
   PrayerPage,
   OthersPage,
   WelcomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ], 
  bootstrap: [IonicApp],
  entryComponents: [ 
    MyApp,
    HomePage,
    RegisterPage,
    PrayerPage,
    OthersPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
