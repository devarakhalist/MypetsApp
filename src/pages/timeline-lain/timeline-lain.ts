import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-timeline-lain',
  templateUrl: 'timeline-lain.html',
})
export class TimelineLainPage {

  data : any;
  constructor(
    public navCtrl: NavController
    , public navParams: NavParams) {
    this.data = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelineLainPage');
  }

}
