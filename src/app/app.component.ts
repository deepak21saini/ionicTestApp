import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import { Storage } from '@ionic/storage';
import { AuthService } from '../providers/auth.service';
import { Config } from '../providers/config';

@Component({
  templateUrl: 'app.html'                               
})  

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  isLoggedIn = false;
  rootPage: any = "HomePage";  
  accountMenuItems: Array<any>;
  pages: Array<{title: string, component, icon: any}>;
  username:any;
  image: any;
  // pages: Array<{title: string, icon: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage,
    private auth:AuthService
    ) {

      this.initializeApp();
      this.storage.get('user').then((val) => {
        if(val){
          this.username = val.first_name;
          
          if(val.image){
            this.image = Config.SITE_URL+'/public/upload/user/'+val.image;
          }
          this.auth.setLoggedInStatus(true);
        }
      });
      this.auth.isLoggedIn().subscribe(status => {
          this.isLoggedIn = status;
          if(this.isLoggedIn){
            this.nav.setRoot('AssetPage');
          }
      });
  
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', icon:'home', component: 'HomePage'  },
  	    { title: 'Login', icon:'contact', component: 'LoginPage' },
  	    { title: 'Register', icon:'person-add', component: 'RegisterPage' },
      ];

      this.accountMenuItems = [
 
          {title: 'My Assets', component: 'AssetPage', icon: 'briefcase'},
          {title: 'My Requests', component: 'AssetPage', icon: 'list'},
          {title: 'Help', component: 'AssetPage', icon: 'help-circle'},
          {title: 'Feedback', component: 'AssetPage', icon: 'star'}
 
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

  logout(){
     this.auth.logout();
  }

  goToProfile(){
     this.nav.setRoot('ProfilePage');
  }
}
