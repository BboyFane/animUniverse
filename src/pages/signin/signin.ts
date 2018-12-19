import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { SignupPage } from '../signup/signup';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  } 
 signup(){
    this.navCtrl.push(SignupPage);
    }


}
