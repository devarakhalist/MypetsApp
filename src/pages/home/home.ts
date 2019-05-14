import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataStatus =[
    {
      user_name : "Kucing",
      user_photo :"https://www.catster.com/wp-content/uploads/2017/10/Cat-trilling.jpg",
      user_status : ""
    },
    {
      user_name : "Anjing",
      user_photo :"https://bowwowinsurance.com.au/wp-content/uploads/2018/10/havanese-700x700.jpg",
      user_status : ""
    },
    {
      user_name : "burung hantu",
      user_photo :"https://storage.trubus.id/storage/app/public/posts/t20181102/big_714b136f48653bce6a1a94d07e41d7f13a5fc9b2.jpg",
      user_status : ""
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public app : App) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }


}
