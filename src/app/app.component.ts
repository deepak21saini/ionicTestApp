import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AssetPage } from '../pages/asset/asset';
import { LoginPage } from '../pages/auth/login/login';
import { RegisterPage } from '../pages/auth/register/register';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
import { Storage } from '@ionic/storage';
import {AuthService} from '../providers/auth.service';

@Component({
  templateUrl: 'app.html'                               
})  

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  isLoggedIn = false;
  rootPage: any = HomePage;  
  accountMenuItems: Array<any>;
  pages: Array<{title: string, component, icon: any}>;
  username:any;
  // pages: Array<{title: string, icon: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage,
    private auth:AuthService
    ) {

    this.storage.get('user').then((val) => {
        if(val){
          this.username = val.first_name+' '+val.last_name;
          this.auth.setLoggedInStatus(true);
        }
    });

    this.auth.isLoggedIn().subscribe(status => {
        this.isLoggedIn = status;
    });

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon:'home', component: HomePage  },
	    { title: 'Login', icon:'contact', component: LoginPage },
	    { title: 'Register', icon:'person-add', component: RegisterPage },
    ];

    this.accountMenuItems = [
        {title: 'My Assets', component: AssetPage, icon: 'briefcase'},
        {title: 'My Requests', component: AssetPage, icon: 'list'},
        {title: 'Help', component: AssetPage, icon: 'help-circle'},
        {title: 'Feedback', component: AssetPage, icon: 'star'},
        {title: 'Logout', component: LogoutPage, icon: 'log-out'}
      ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logoutPage(){
     this.nav.setRoot(LogoutPage);
  }

  goToProfile(){
     this.nav.push(ProfilePage);
  }
}
