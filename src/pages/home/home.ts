import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataUpload = [
    {
      foto:"https://www.rd.com/wp-content/uploads/2018/05/shutterstock_1076294222-760x506.jpg"
    },
    {
      foto:"https://mencari.info/wp-content/uploads/2018/10/Harga-Kucing-Anggora.png"
    },
    {
      foto:"https://daftarharga.top/wp-content/uploads/2018/06/Harga-Anjing-Golden.png"
    },
    {
      foto:"http://hargakucing.com/wp-content/uploads/2017/03/harga-kucing-bengal.png"
    },
    {
      foto:"http://majalahhewan.com/wp-content/uploads/2017/07/Bichon-Frise-640x482.jpg"
    },
    {
      foto:"https://mymirrormaze.files.wordpress.com/2014/04/persia.jpg"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  tambahFoto(){
    alert("tambah foto")
  }


}
