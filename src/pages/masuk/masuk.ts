import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Tabs } from 'ionic-angular';
import { DaftarPage } from '../daftar/daftar';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-masuk',
  templateUrl: 'masuk.html',
})
export class MasukPage {

  email: any
  password: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasukPage');
  }

  pindah() {
    this.navCtrl.push(DaftarPage)
  }

  masuk() {
    if (this.email && this.password) {
      if (this.password.length >= 8)
        this.navCtrl.setRoot(TabsPage)
      else {
        this.errorPassword()
      }
    }
    else {
      this.showConfirm()
    }
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Kredensial Salah',
      message: 'Nama pengguna atau kata sandi tidak valid',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
      ]
    });
    confirm.present();
  }

  errorPassword() {
    const confirm = this.alertCtrl.create({
      title: 'Password salah',
      message: 'Minimal & huruf ',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
      ]
    });
    confirm.present();
  }

}
