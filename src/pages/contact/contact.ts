import { Component } from '@angular/core';
import { NavController, App, AlertController } from 'ionic-angular';
import { MasukPage } from '../masuk/masuk';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavController,
    public app: App,
    public alertCtrl: AlertController  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  keluar() {
    this.app.getRootNav().setRoot(MasukPage)
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'keluar?',
      message: 'anda akan kehilangan konsep anda  ',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Setuju',
          handler: () => {
            this.keluar()
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


}
