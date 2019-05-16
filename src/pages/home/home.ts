import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dataUpload = [
    {
      id: 0,
      judul: "Ptilopsis Granti",
      deskripsi: "Burung hantu adalah kelompok burung yang merupakan anggota ordo Strigiformes Burung ini termasuk golongan burung buas (karnivora pemakan daging) dan merupakan hewan malam (nokturnal) Seluruhnya terdapat sekitar 222 spesies yang telah diketahui yang menyebar di seluruh dunia kecuali Antartika sebagian besar Greenland dan beberapa pulau-pulau terpencil Di dunia barat hewan ini dianggap simbol kebijaksanaan tetapi di beberapa tempat di Indonesia dianggap pembawa pratanda maut maka namanya Burung Hantu. Walau begitu tidak di semua tempat di Nusantara burung ini disebut sebagai burung hantu Di Jawa misalnya nama burung ini adalah darès atau manuk darès yang tidak ada konotasinya dengan maut atau hantu Di Sulawesi Utara burung hantu dikenal dengan nama Manguni",
      foto: "https://i.pinimg.com/originals/cb/2a/51/cb2a518a701487edb4dc4fd9da2208ee.jpg"
    },
    {
      id: 1,
      judul: "Rakun",
      deskripsi: "rakun adalah Mamalia berukuran sedang yang berasal dari Amerika Utara. Rakun adalah spesies terbesar dalam keluarga Procyonidae, memiliki panjang tubuh 40 hingga 70 cm (16 hingga 28 in) dan berat 3,5 hingga 9 kg (8 hingga 20 lb). Kulitnya terdiri dari rambut abu-abu yang tebal untuk mencegah masuknya hawa dingin kedalam tubuh. Hewan ini dikenal karena cakarnya yang sangat tangkas dan topeng wajahnya yang termasuk kedalam salah-satu tema mitologi beberapa suku asli Amerika. Rakun dikenal karena kecerdasannya, dengan studi menunjukan bahwa hewan ini bisa mengingat solusi berbagai permasalahan sampai 3 tahun lamanya.[2] Rakun adalah hewan omnivora, yang biasanya nokturnal, makanannya terdiri dari sekitar 40% invertebrata, 33% tumbuhan and 27% vertebrata.",
      foto: "https://cdn.pixabay.com/photo/2013/02/18/18/36/raccoon-83109_960_720.jpg"
    },
    {
      id: 2,
      judul: "Anjing Golden",
      deskripsi: "Anjing Golden Retriever merupakan anjing dengan ukuran menengah besar. Memiliki tengkorak yang luas dan moncong yang lurus. Hidung berwarna hitam atau hitam kecoklatan. Mata berukuran menengah besar berwarna coklat gelap, telinga yang pendek menggantung dekat pipi. Saat ujung telinga ditarik ke depan, maka akan tepat menutupi mata. Ekor tebal dengan bulu disepanjang bagian bawahnya. Cakar yang berada di bagian dalam kaki dan diatas kaki (disebut Dew claws) dapat dihilangkan. Bulunya yang anti air berbentuk padat, lurus, atau bergelombang. Warna bulu anjing Golden Retriever ada yang berwarna krem sampai kuning keemasan.",
      foto: "https://daftarharga.top/wp-content/uploads/2018/06/Harga-Anjing-Golden.png"
    },
    {
      id: 3,
      judul: "Kucing Bengal",
      deskripsi: "Kucing ini memiliki kaki yang panjang, bahu tegap, leher ramping, kaki panjang, mata seperti bomerang, dan bentuk hidung menyerupai cheetah.",
      foto: "http://hargakucing.com/wp-content/uploads/2017/03/harga-kucing-bengal.png"
    },
    {
      id: 4,
      judul: "Anjing Rubah",
      deskripsi: "Anjing terlalu berisik sampai banyak peminat mengurungkan niat memeliharanya.Artikel ini telah tayang di Wartakotalive dengan judul Rubah Kecil Mirip Anjing Yang Tak Terlalu Berisik, Minat Pelihara?, http://wartakota.tribunnews.com/2018/03/01/rubah-kecil-mirip-anjing-yang-tak-terlalu-berisik-minat-pelihara.Penulis: Theo Yonathan Simon Laturiuw	Editor: Theo Yonathan Simon Laturiuw",
      foto: "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2018/09/09/86473740.jpeg"
    },
    {
      id: 5,
      judul: "Sejarah Persia",
      deskripsi: "Sampai sekarang masih belum ada keterangan kongkrit asal usul dari kucing persia, berdasarkan informasi dari wikipedia, banyak yang meyakini bahwa “Kucing Persia Modern” merupakan kucing yang berasal dari daerah Provinsi Khorasan Persia negara Iran, walaupun bentuk dan ciri ciri kucing persia yang berasal dari persia tidak seperti “kucing persia” modern yang ada sekarang. Hal ini merujuk pada informasi telah ditemukannya kucing serupa pada daerah tersebut. Kucing persia dari khorasan berwajah bulat berbulu lebat dan hidung pendek tidak terlalu mancung tapi hidungnya tidak seperti kucing persia modern yang cenderung lebih pesek dan berkepala bulat.",
      foto: "https://mymirrormaze.files.wordpress.com/2014/04/persia.jpg"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  tambahFoto() {
    alert("tambah foto")
  }


}
