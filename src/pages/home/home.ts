import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import { WelcomePage} from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  load(){
      this.navCtrl.push(RegisterPage,{
        val:'Abdouroihamane'
      })
  }

  connect(){
      this.navCtrl.push(WelcomePage,{
        val:'Welcome'
      })
  }

}
