import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth.service';
 

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
  email: any;
  image: any;
  // pages: Array<{title: string, icon: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private auth:AuthService
    ) {

      this.initializeApp();
      this.auth.getUser().subscribe(data => {

        this.nav.setRoot('EventsPage');

        if(data){
          this.auth.setLoggedInStatus(true);
          if(!data.first_name){
             data.first_name = '';
          }
          if(!data.last_name){
             data.last_name = '';
          }

          this.username = data.first_name+' '+data.last_name;
          this.email = data.email;
          this.image = '';
          
          if(data.image){
            this.image = data.image;
          } 
           
        }
      });

      this.auth.isLoggedIn().subscribe(status => {
          this.isLoggedIn = status;
          if(this.isLoggedIn){
            this.nav.setRoot('EventsPage');
          }
      });
  
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', icon:'home', component: 'HomePage'  },
  	    { title: 'Login', icon:'contact', component: 'LoginPage' },
  	    { title: 'Register', icon:'person-add', component: 'RegisterPage' },
      ];

      this.accountMenuItems = [
 
          {title: 'My Events', component: 'EventsPage', icon: 'briefcase'},
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
