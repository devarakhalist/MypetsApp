import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pet : any = "Tokopedia"

  barang = [
    {
      "id" : 0,
      "image" : "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/29/2598895/2598895_0d960978-8cee-43b8-af8a-97d72c091387_1560_1560.jpg",
      "nama" : "Pro Balance / Probalance Dog Food Lamb Flavor 400gr",
      "price" : "22.000",
      "favorit" : false
    },
    {
      "id" : 1,
      "image" : "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/12/94007/94007_e6bbc13f-8e18-4f6b-8e01-6b3c4c2cee95_992_992.jpg",
      "nama" : "Origin dog food lamb 18.14kg super premium khusus gojek n grab",
      "price" : "350.000",
      "favorit" : false
    },
    {
      "id" : 2,
      "image" : "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/10/165009001/165009001_f2f1b6aa-3ddc-4cbb-80ba-e4597c3bc672_1003_1003.jpg",
      "nama" : "SmartHeart makanan Anjing Snack Dog Food Peliharaan Pedigree Recipea",
      "price" : "59.950",
      "favorit" : false
    },
    {
      "id" : 3,
      "image" : "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/22/47647003/47647003_0bf36a9a-8438-4967-8393-3996ddb0a623_700_525.jpg",
      "nama" : "Makanan Anjing Bolt Repack 1kg Beef Dog Food",
      "price" : "16.800",
      "favorit" : false
    },
    {
      "id" : 4,
      "image" : "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/4/18/2847550/2847550_eb27c3ed-4814-438b-bd47-4e5b0bcf0b51_700_700.jpg",
      "nama" : "DOG FOOD CESAR BEEF",
      "price" : "10.000",
      "favorit" : false
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public app: App) {


  }  

  ubahFav(data){
    this.barang[data.id].favorit = !this.barang[data.id].favorit 
  }


}
