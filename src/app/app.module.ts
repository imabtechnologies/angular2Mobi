import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ShareServiceProvider } from '../providers/share-service/share-service';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ValidateLoginPage } from '../pages/validate-login/validate-login';
import { RegisterPage } from '../pages/register/register';
import { EvaluationPage } from '../pages/evaluation/evaluation';
import { LoanapplicationPage } from '../pages/loanapplication/loanapplication';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {File} from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ValidateLoginPage,
    RegisterPage,
    HomePage,
    EvaluationPage,
    LoanapplicationPage,
    AboutPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ValidateLoginPage,
    RegisterPage,
    HomePage,
    EvaluationPage,
    LoanapplicationPage,
    AboutPage,
    ContactPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ShareServiceProvider
  ]
})
export class AppModule {}
