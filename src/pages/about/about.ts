import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pet : any = "Galley"

  constructor(public navCtrl: NavController) {

  }

}
