(window.webpackJsonp=window.webpackJsonp||[]).push([[9],Array(66).concat([function(a,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return l})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return b})),t.d(e,"default",(function(){return m}));var n=t(2),i=t(6),r=(t(0),t(90)),l={id:"tutorial",title:"Bikin Game Lomba Balap Karung Dengan Spark AR",sidebar_label:"Bikin Game Lomba Balap Karung Dengan Spark AR"},s={unversionedId:"tutorial",id:"tutorial",isDocsHomePage:!1,title:"Bikin Game Lomba Balap Karung Dengan Spark AR",description:"Pengenelanan Spark AR",source:"@site/docs/tutorial.md",slug:"/tutorial",permalink:"/docs/tutorial",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial.md",version:"current",sidebar_label:"Bikin Game Lomba Balap Karung Dengan Spark AR"},b=[{value:"Pengenelanan Spark AR",id:"pengenelanan-spark-ar",children:[]},{value:"Hal-hal yang dibutuhkan",id:"hal-hal-yang-dibutuhkan",children:[]},{value:"Memulai Projek",id:"memulai-projek",children:[]}],u={rightToc:b};function m(a){var e=a.components,l=Object(i.a)(a,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,l,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"pengenelanan-spark-ar"},"Pengenelanan Spark AR"),Object(r.b)("p",null,"Halo semuanya kita akan membahas cara membuat game lomba balap karung menggunakan spark AR, sebelum masuk ke tahap membuat gamenya sebaiknya kita berkenalan dengan spark AR terlebih dahulu. Apasih Spark AR itu?. Spark AR sendiri merupakan sebuah aplikasi untuk membuat Augmented Reality yang bertujuan untuk berkreasi dengan membuat Filter, visual effect , serta memungkinkan untuk membuat game dan dapat dibagikan pula secara publik hasil karya mereka di Instagram maupun Facebook. Aplikasi ini Kompatibel dengan sistem operasi Windows dan Mac, dan kamu juga dapat mencoba langsung filter yang telah kamu buat di Spark Ar langsung ke hpmu dengan cara mendownload Spark Ar Player yang bisa kamu download di Play Store atau di App Store atau bisa melalui Instagram camera atau facebook camera secara langsung."),Object(r.b)("p",null,"Berikut ini merupakan contoh yang telah dibuat menggukanan Spark AR tersebut\n",Object(r.b)("img",{alt:"img",src:t(125).default})),Object(r.b)("p",null,"Adapun game yang kita ingin dibuat akan menampilkan tampilan intro judul game, dan gameplay gamenya itu sendiri yang akan menyerupai lomba balap karung dengan mengkedipkan mata untuk menggerakan karakter didalam gamenya. Berikut ini merupakan hasil akhir yang akan dibuatnya:"),Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZHPvbqmsbf0",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(r.b)("h2",{id:"hal-hal-yang-dibutuhkan"},"Hal-hal yang dibutuhkan"),Object(r.b)("p",null,"Sebelum memulai membuat game tersebut, mari kita siapkan hal-hal yang dibutuhkannya terlebih dahulu, seperti :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Mendownload aplikasi Spark AR Studio di situs resminya ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://sparkar.facebook.com/ar-studio/download/"}),"disini"),", tersedia dua pilihan Operasi Sistem ada Windows dan MacOS. download sesuai dengan sistem operasi perangkat yang kamu gunakan. Serta lakukan installasi aplikasi spark Ar tersebut agar dapat mengikuti tutorial ini."),Object(r.b)("li",{parentName:"ul"},"Jika sudah terinstall kemudian login ke aplikasi Spark AR Studio dengan akun. Facebook yang telah terhubung dengan akun Instagram yang ada di ponsel masing-masing."),Object(r.b)("li",{parentName:"ul"},"Download assets gambar yang akan kita gunakan ","[disini]"," (",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Hamaar/BalapKarungSparkAr/tree/main/textures"}),"https://github.com/Hamaar/BalapKarungSparkAr/tree/main/textures"),")."),Object(r.b)("li",{parentName:"ul"},"Download Visual Studio Code ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://code.visualstudio.com/download"}),"disini")," untuk melakukan edit script.")),Object(r.b)("h2",{id:"memulai-projek"},"Memulai Projek"),Object(r.b)("p",null,"Jika sudah mengikuti tahap sebelumnya, mari kita mulai untuk membuat game lomba balap karungnya pada Spark AR."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Buka aplikasi spark AR yang sudah terinstall. Pada tahap ini kita akan membuat projek baru dengan cara pilih menu Create New dan kemudian pilih New Project.\n",Object(r.b)("img",{alt:"img",src:t(126).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian akan muncul tampilan untuk memilih projek seperti apa yang ingin kita buat. Pada tutorial ini kita pilih Blank Project karena disitu dijelaskan dapat membuat tipe projek jenis apa pun.\n",Object(r.b)("img",{alt:"img",src:t(127).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Setelah memilih Blank Project di halaman awal Spark AR Studio, akan dibawa pada tampilan berikut :\n",Object(r.b)("img",{alt:"img",src:t(128).default}),"\nUntuk membantu kalian terbiasa dengan tampilan/navigasi di Spark AR, berikut beberapa fitur yang perlu kalian ketahui:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Simulator : Garis yang berwarna merah yang menunjukkan bagaimana efek kalian pada perangkat seluler. Kalian juga dapat mengubah device (Android dan iOS) yang diinginkan dengan cara klik tanda panah ke bawah di sebelah tulisan iPhone 8."),Object(r.b)("li",{parentName:"ul"},"Viewport : garis yang berwarna orange ini berada pada area di tengah Spark AR, disini kalian dapat memvisualisasikan efek Anda."),Object(r.b)("li",{parentName:"ul"},"Panel Scene : garis yang berwarana biru ini kalian dapat mengontrol objek yang akan kalian gunakan."),Object(r.b)("li",{parentName:"ul"},"Panel Asset : garis yang berwarna kuning ini kalian dapat menambahkan dan melihat semua aset yang telah kalian tambahkan ke projek."),Object(r.b)("li",{parentName:"ul"},"Inspector : garis yang berwana hijau ini untuk melihat dan mengubah properti elemen dalam scene."),Object(r.b)("li",{parentName:"ul"},"Toolbar dan Menu Bar : garis yang berwarna ungu ini untuk mengakses semua jenis fitur dengan cepat.")),Object(r.b)("p",{parentName:"li"},"Kalian sudah mengenal beberapa tampilan/navigasi yang sudah dijelaskan diatas, mari kita lanjut ketahap berikutnya.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Mari kita memulai dari pembuatan objek Face Tracker terlebih dahulu, dengan cara klik kanan pada Focal Distance yang berada pada panel scene kemudian pilih Add dan pilih Face Tracker.\n",Object(r.b)("img",{alt:"img",src:t(129).default}),"\nJika kita telah membuat sebuah objek Face Tracker maka akan tampil seperti berikut.\n",Object(r.b)("img",{alt:"img",src:t(130).default}),"\nFace tracker ini nantinya akan berfungsi untuk mendeteksi wajah kita untuk membuat efek yang dapat merespon ketika kita melakukan kedipan mata pada tahap lainnya.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita buat objek canvas dengan cara klik kanan pada faceTracker0 kemudian pilih Add dan pilih Canvas.\n",Object(r.b)("img",{alt:"img",src:t(131).default}),"\nUbah nama canvas tersebut menjadi intro, dengan cara klik kanan pada canvas0 kemudian pilih rename\n",Object(r.b)("img",{alt:"img",src:t(132).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita buat objek rectangle dengan cara klik kanan pada intro kemudian pilih Add dan pilih Rectangle.\n",Object(r.b)("img",{alt:"img",src:t(133).default}),"\nUbah nama rectangle0 tersebut menjadi bgintro, dengan cara klik kanan pada rectangle0 kemudian pilih rename\n",Object(r.b)("img",{alt:"img",src:t(134).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita unggah semua assets yang sudah didownload kedalam panel assets dengan cara klik menu Add Asset terus pilih import From Computer.\n",Object(r.b)("img",{alt:"img",src:t(135).default}),"\nPilih semua file asset yang sudah di download sebelumnya kemudian klik open.\n",Object(r.b)("img",{alt:"img",src:t(136).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Setelah semua file asset sudah berada pada panel asset, kemudian pada panel inspector asset tersebut kita beri centang pada bagian No compression yang berada pada Menu Compression.\n",Object(r.b)("img",{alt:"img",src:t(137).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita buat 3 material dengan cara klik pada menu Add Asset terus pilih Material.\n",Object(r.b)("img",{alt:"img",src:t(138).default}),"\nBeri nama masing-masing material dengan bgintro_mat, bggameplay_mat, dan karakter1_mat. Sehingga hasilnya akan seperti ini.\n",Object(r.b)("img",{alt:"img",src:t(139).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Klik pada bgintro_mat, bggameplay_mat, dan karakter1_mat kemudian pada inspector bagian shader type di ubah menjadi Flat dikarenakan tipe material ini tidak dapat menerima pencahayaan, lebih cocok untuk diterapkan pada objek 2D seperti Plane atau Rectangle.\n",Object(r.b)("img",{alt:"img",src:t(140).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian masih pada inspector yang sama pada bagian Advanced Render Options terus Use Depth Test kita unceklis bagian tersebut supaya objek tersebut tidak terhalang oleh objek lain.\n",Object(r.b)("img",{alt:"img",src:t(141).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita masukan texture yang sudah di upload tadi kedalam material, dengan cara klik pada bgintro_mat kemudian klik bagian tanda panah pada inspector bagian Textures yang ada pada Shader Properties lalu pilih bgintro, seperti berikut ini\n",Object(r.b)("img",{alt:"img",src:t(142).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita masukan texture yang lain kedalam material, dengan cara klik pada bggameplay_mat kemudian klik bagian tanda panah pada inspector bagian Textures yang ada pada Shader Properties lalu pilih bggameplay, seperti berikut ini\n",Object(r.b)("img",{alt:"img",src:t(143).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita masukan texture yang lain tadi kedalam material, dengan cara klik pada karakter1_mat kemudian klik bagian tanda panah pada inspector bagian Textures yang ada pada Shader Properties lalu pilih karakter1, seperti berikut ini\n",Object(r.b)("img",{alt:"img",src:t(144).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita akan melakukan Duplikat pada karakter1_mat dengan cara klik kanan pada karakter1_mat lalu pilih Duplicate.\n",Object(r.b)("img",{alt:"img",src:t(145).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian ubah Namanya menjadi karakter2_mat dengan cara klik kanan pada karakter1_mat menjadi karakter2_mat\n",Object(r.b)("img",{alt:"img",src:t(146).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita masukan texture yang lain tadi kedalam material, dengan cara klik pada karakter2_mat kemudian klik bagian tanda panah pada inspector bagian Textures yang ada pada Shader Properties lalu pilih karakter2, seperti berikut ini\n",Object(r.b)("img",{alt:"img",src:t(147).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita Kembali pada panel scene dengan mengklik pada bagian bgintro, lalu klik tombol plus (+) pada bagian Material dan memilih bgintro_mat, hal ini bertujuan untuk memasukan material yang telah dibuat sebelumnya kedalam scene.\n",Object(r.b)("img",{alt:"img",src:t(148).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita atur posisinya hingga memenuhi layar, pertama kita atur bagian width terlebih dahulu dengan cara klik pada angka 100 bagian width pada propertis Size, kemudian pilih fill width seperti gambar berikut\n",Object(r.b)("img",{alt:"img",src:t(149).default}),"\nMaka ukuran bgintro akan berubah menjadi full melebar ke samping."),Object(r.b)("p",{parentName:"li"},"Lalu kita atur bagian heght dengan cara klik pada angka 100 bagian width pada propertis Size, kemudian pilih Fill Height seperti gambar berikut"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"img",src:t(150).default}),"\nMaka ukuran bgintro akan berubah menjadi menutupi keseluruhan layar, seperti berikut.\n",Object(r.b)("img",{alt:"img",src:t(151).default}),"\nKita telah selesai membuat bagian intro dalam game balap karung ini.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita buat bagian gameplaynya, sebelum itu kita perlu menonaktifnya terlebih dahulu bagian intro yang sudah selesai dibuatnya dengan cara klik bgintro kemudian pada inspector bagian propertis Visible kita unceklis.\n",Object(r.b)("img",{alt:"img",src:t(152).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Untuk membuat gameplay kita hanya perlu mengulang cara nomer 5 dan memberi nama gameplay, sehingga jadi seperti berikut.\n",Object(r.b)("img",{alt:"img",src:t(153).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita buat rectangle pada bagian gameplay, dengan cara klik kanan gameplay pilih Add lalu pilih Rectangle\n",Object(r.b)("img",{alt:"img",src:t(154).default}),"\nUbah nama rectangle0 tersebut menjadi bggameplay, dengan cara klik kanan pada rectangle0 kemudian pilih rename\n",Object(r.b)("img",{alt:"img",src:t(155).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik bagian bggameplay dan kemudian klik pada bagian tombol plus (+) pada bagian Material dan pilih bggameplay_mat, hal ini bertujuan untuk memasukan material yang telah dibuat sebelumnya kedalam scene.\n",Object(r.b)("img",{alt:"img",src:t(156).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita atur lebar dan tingginya, pertama kita atur lebarnya terlebih dahulu dengan cara klik pada angka 100 bagian width pada propertis Size, kemudian pilih fill width seperti gambar berikut\n",Object(r.b)("img",{alt:"img",src:t(157).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita atur tingginya sebesar 330, dengan cara klik pada angka 100 bagian height pada propertis Size, kemudian masukan 330 seperti gambar berikut\n",Object(r.b)("img",{alt:"img",src:t(158).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita atur posisinya menjadi dibawah, dengan cara menggesernya melalui layar viewport hingga menjadi seperti ini\n",Object(r.b)("img",{alt:"img",src:t(159).default}),"\nKita bisa masukan sendiri nilainya agar sama seperti pada gambar diatas dengan nilai width 0,28568 dan nilai height -243,92856 pada inspector bagian Position, atau bisa atur sesuai keinginan sendiri.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Setelah selesai menyiapkan lapangannya, sekarang kita menyiapkan karakternya, pertama player 1 terlebih dahulu dengan cara membuat Rectangle baru pada gameplay\n",Object(r.b)("img",{alt:"img",src:t(160).default}),"\nUbah nama rectangle0 tersebut menjadi karakter1, dengan cara klik kanan pada rectangle0 kemudian pilih rename\n",Object(r.b)("img",{alt:"img",src:t(161).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik bagian bggameplay dan kemudian klik pada bagian tombol plus (+) pada bagian Material dan pilih karakter1_mat, hal ini bertujuan untuk memasukan material yang telah dibuat sebelumnya kedalam scene.\n",Object(r.b)("img",{alt:"img",src:t(162).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita atur posisinya menjadi dibawah, dengan cara menggesernya melalui layar viewport hingga menjadi seperti ini\n",Object(r.b)("img",{alt:"img",src:t(163).default}),"\nKita bisa masukan sendiri nilainya agar sama seperti pada gambar diatas dengan nilai x -166 dan nilai y -228 pada inspector bagian Position, atau bisa atur sesuai keinginan sendiri.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian tambahkan plane yang berfungsi untuk identitas wajah siapa yang mendapatkan karakter tersebut dengan cara klik kanan pada faceTracker0 kemudian pilih Add lalu pilih Plane.\n",Object(r.b)("img",{alt:"img",src:t(164).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Ubah namanya menjadi char1 dengan cara klik kanan pada plane0 kemudian pilih Rename\n",Object(r.b)("img",{alt:"img",src:t(165).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian pada inspector char 1, klik tombol plus (+) pada bagian Material dan memilih karakter1_mat, hal ini bertujuan untuk memasukan material yang telah dibuat sebelumnya kedalam scene.\n",Object(r.b)("img",{alt:"img",src:t(166).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian ubah ukurannya seperti berikut supaya tidak terlalu besar.\n",Object(r.b)("img",{alt:"img",src:t(167).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian pindahkan canvas intro dan gameplay hingga seperi ini, dengan cara menggesernya lalu arahkan pada Focal Distance\n",Object(r.b)("img",{alt:"img",src:t(168).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik faceTracker0 , pada inspector bagian patch yang ada pada Interaction kemudian klik Create dan pilih Blink\n",Object(r.b)("img",{alt:"img",src:t(169).default}),"\nMaka akan muncul sebagai berikut pada bagian Patch Editor, Patch Editor sendiri dapat menambahkan lebih banyak kompleksitas pada efek Anda menggunakan pemrograman visual atau scripting lainnya. Pada tahap ini akan berfungsi untuk memberi efek lompat Ketika sedang berkedip\n",Object(r.b)("img",{alt:"img",src:t(170).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian tambahkan animation dengan cara klik kiri dan tahan arah panah kanan yang ada pada Blink kemudian arahkan kemana saja lalu pilih animation. Dengan memilih animation dapat berfungsi untuk memulai menganimasikan objek.\n",Object(r.b)("img",{alt:"img",src:t(171).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian tambahkan garis pada blink dan arahkan kedalam Animation bagian Reset, seperti gambar berikut\n",Object(r.b)("img",{alt:"img",src:t(172).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian tambahkan delay dengan cara klik kiri dan tahan arah panah kanan yang ada pada Blink kemudian arahkan kemana saja lalu pilih Delay.\n",Object(r.b)("img",{alt:"img",src:t(173).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian sambungkan output delay kedalam animation bagian reverse dan isikan value delay sebesar 0,3 dan value Duration pada Animation sebesar 0,3 hingga menjadi seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(174).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian tambahkan trasition dengan cara klik kiri dan tahan bagian progress yang ada pada Animation atau tanda panah arah kanan bagian atas dan arahkan kemana saja lalu pilih Transition\n",Object(r.b)("img",{alt:"img",src:t(175).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik pada Transition kemudian ubah vector 3 menjadi vector 2, dengan cara klik arah bawah dengan tulisan vector 3 lalu pilih vector 2\n",Object(r.b)("img",{alt:"img",src:t(176).default}),"\n",Object(r.b)("img",{alt:"img",src:t(177).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian ubah Curve dari Linear menjadi Quadratic-In-Out, hal ini bertujuan untuk merubah supaya mirip dengan transisi melompat.\n",Object(r.b)("img",{alt:"img",src:t(178).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian ubah value Start pada Transition dengan nilai value x : -166 dan value y : -198, dan value End dengan nilai value x : -166 dan value y : -228 hingga seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(179).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian Klik karakter1 yang ada di panel scene lalu klik tombol arah panah pada Position yang ada di inspector\n",Object(r.b)("img",{alt:"img",src:t(180).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Maka akan muncul 2d Position karakter1 pada Patch Editor, kemudian arahkan progress Transition kedalam 2D Position Karakter1\n",Object(r.b)("img",{alt:"img",src:t(181).default}),"\nPada tahap ini kita sudah bisa melakukan percobaan mengedipkan mata, kemudian karakter1 akan bertransisi seolah olah melakukan lompatan.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sekarang kita akan membuat transisi seolah olah melakukan gerakan maju kedepan menggunakan scripts.js yang merupakan Bahasa pemrograman javascript. Pertama kita membuat scripts.js tersebut dengan cara klik Add Asset pilih Script.\n",Object(r.b)("img",{alt:"img",src:t(182).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik Script, lalu klik edit untuk membut beberapa kode supaya dapat melakukan bergerak kedepan\n",Object(r.b)("img",{alt:"img",src:t(183).default}),"\nMaka akan tampil seperti berikut apabila sudah terinstall aplikasi visual studio code sebelumnya\n",Object(r.b)("img",{alt:"img",src:t(184).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Hapus semua baris kode, dan ketikan dengan kode baru sebagai berikut\n",Object(r.b)("img",{alt:"img",src:t(185).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Karakter1 sudah berfungsi dengan baik, sekarang kita bisa membuat karakter2 supaya bisa bermain berduaan dengan teman, pertama duplikat terlebih dahulu faceTracker 0 dengan cara seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(186).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik faceTracker1 dan ubah value Tracked Face yang ada di inspector dengan cara pilih Face 2\n",Object(r.b)("img",{alt:"img",src:t(187).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian pada inspector bagian patch yang ada pada Interaction klik Create dan pilih Blink\n",Object(r.b)("img",{alt:"img",src:t(188).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian ubah nama char1 yang ada pada faceTracker1 menjadi char2, dengan cara klik kanan pada char1 kemudian pilih rename\n",Object(r.b)("img",{alt:"img",src:t(189).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian ubah materialnya menjadi karakter2_mat dengan cara Klik pada arah panah bawah kemudian pilih karakter2_mat\n",Object(r.b)("img",{alt:"img",src:t(190).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Penanda wajah sebagai karakter2 sudah selesai dibuat, sekarang kita buat karakter2 untuk bermain balap karungnya dengan cara menduplikat karakter1 yang sudah dibuat dengan cara klik kanan pada Karakter1 lalu pilih Duplicate\n",Object(r.b)("img",{alt:"img",src:t(191).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik pada Karakter2 dan ubah Materials dengan meng klik pada arah panah lalu pilih karakter2_mat\n",Object(r.b)("img",{alt:"img",src:t(192).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian atur posisi karakter2 dengan cara menggesernya hingga seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(193).default}),"\nAtau bisa juga menyamakan nilai position x : -166 dan nilai position y : -272 atau atur dengan posisi yang anda suka.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian kita ke patch editor dan blok bagian delay, animation dan transition seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(194).default}),"\nKemudian lalukan copy dengan menekan command + c pada mac atau ctrl + c pada windows, jika sudah lakukan paste Kembali dengan menekan command + v atau ctrl + c, dan geser hingga seperti ini atau sesuaikan aja supaya tidak mepet\n",Object(r.b)("img",{alt:"img",src:t(195).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian hapus semua jalur yang ada pada blink bagian faceTracker0 yang menyambung dengan hasil pindah tadi, dan susun seperti pada tahap faceTracker0, hingga menjadi seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(196).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian ubah value Start pada Transition dengan nilai value x : -166 dan value y : -272, dan value End dengan nilai value x : -166 dan value y : -242 hingga seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(197).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian pada inspector karakter2 klik arah panah pada Position\n",Object(r.b)("img",{alt:"img",src:t(198).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian sambungkan progress transition pada 2d position karakter hingga seperti ini\n",Object(r.b)("img",{alt:"img",src:t(199).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kita Kembali pada scripts.js dan lakukan klik edit Kembali untuk memfungsikan Gerakan karakter2\n",Object(r.b)("img",{alt:"img",src:t(200).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian tambahkan beberapa kode untuk karakter2 seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(201).default}),"\n",Object(r.b)("img",{alt:"img",src:t(202).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kita telah membuatnya gameplay untuk bermain berduaan, sekarang kita akan membuat intro game muncul selama 1 detik kemudian pindah ke gameplaynya setelah menekan tombol recording pada Instagram, pertama susun terlebih dahulun canvas intro berada dibawah canvas gameplay menjadi seperti ini\n",Object(r.b)("img",{alt:"img",src:t(203).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik Camera dan klik tombol Create pada Producer Patch\n",Object(r.b)("img",{alt:"img",src:t(204).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Pada patch editor Tarik bagian video recoding kemanapun lalu pilih Delay, seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(205).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian ubah value duration menjadi 1\n",Object(r.b)("img",{alt:"img",src:t(206).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian pada Output delay Tarik kemanapun dan pilih pulse\n",Object(r.b)("img",{alt:"img",src:t(207).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian pada Turned On atau arah panah bagian atas Pulse Tarik kemanapun lalu pilih switch\n",Object(r.b)("img",{alt:"img",src:t(208).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian pada on/off switch Tarik kemanapun dan pilih not\n",Object(r.b)("img",{alt:"img",src:t(209).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sebelum itu aktifkan terlebih Kembali visible yang ada pada bgintro, dengan cara centang Visible pada inspector\n",Object(r.b)("img",{alt:"img",src:t(210).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik canvas intro, lalu klik arah panah pada visible\n",Object(r.b)("img",{alt:"img",src:t(211).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sambungkan output not pada visible canvas intro, seperti berikut\n",Object(r.b)("img",{alt:"img",src:t(212).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian klik gameplay, lalu klik arah panah yang ada pada Visible\n",Object(r.b)("img",{alt:"img",src:t(213).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Kemudian sambungkan on/off switch ke visible gameplay\n",Object(r.b)("img",{alt:"img",src:t(214).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Game balap karung telah berhasil kita buat sekarang saatnya menjalankan pada Instagram camera, dengan cara klik menu Test on device, lalu klik tombol Send pada Instagram camera\n",Object(r.b)("img",{alt:"img",src:t(215).default})),Object(r.b)("p",{parentName:"li"},"Terimakasih yang sudah mengikutin sampai tahap ahir ini berikut"))))}m.isMDXComponent=!0},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/imagespark-6b0291bd16f714922455f4f92421afc0.jpg"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/1-f5119b730fcc0b239b9ff2bda444c189.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/2-474df90bbcb9bf9e019c310f5a6668ff.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/3-e768c13ce85b77892ee9878bc21438df.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/4.1-68d63bb8803a87bec0e157085d4d9b37.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/4.2-39bb1d8118ed9d243aa9d0ca6563421a.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/5.1-af71db7b6005dd8bfeba059467106d36.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/5.2-027a34cf43bb25404fb3d5969e24e045.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/6.1-0ff00aea665168436884d4167e30f29a.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/6.2-99e75ffff05dc7138d3b1c1ea8cbb853.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/7.1-2df5302c087c80f79885fdc1d0af7845.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/7.2-b2f09a39619deeb5886bd5a109fa4c96.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/8-7c271cd88df58591ca93be8661ff4587.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/9.1-0af17e6b4067dfe59b232820da23057e.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/9.2-ca7b8cc3d3104f962bf46bdc861a39fd.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/10-22249fc5a57c27090edf0bd3d542a4bf.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/11-b03d554ea6e56c1ca2ef0c70b0d38b6b.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/12-0f130d83d6b533c31707f2671eb41b03.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/13-c902366ac89d27794958d7ba16d2f0b5.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/14-06ad0c4827ad03472614500e192b75f1.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/15-98c9edae6a8fff9bee74efced0a6986f.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/16-8c8a48053219daa09ff19b77d3d063f9.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/17-b81db3a4aaad938310fbe1b922dc151a.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/18-ebba309989b957f8519797aad1fe8c2d.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/19.1-36a5ea27026e6aa999b95dafe7a23f8a.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/19.2-a58836098b4092de395d2cdec599fcb6.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/19.3-9e0172b3ece3da144d0f79c3779f324e.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/20-9e72398fe212c62b00d8fb94b28c75b4.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/21-1a5f031251b0e581c73d6171d7805abe.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/22.1-d2c35a573224572ac471e4784e1826bc.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/22.2-88abb3f1369f55e3c5612acde4ac8820.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/23-c2497b4af8ce22387913f3f46329471b.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/24-9ed268d341af5985720201848aa677c9.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/25-05cb84219dba858876ef9a9909c129aa.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/26-e9b3e1a563b5d48d32b5958118c8ac44.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/27.1-d40d183f753a9947540b1ed3181d98b3.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/27.2-f25b30400c7b8c538aaaa21b52ace7c3.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/28-f5fb22c4eeacf12b56d165a1f0370e66.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/29-4baf2e0bb020e5033ce570acd3d4ae2b.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/30-2cbca6d48706dd22dadd9acfa9ba2992.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/31-b1792d5acabd58f8fa203a33863dba41.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/32-123e6fc4490fe1757eb0e4046f7e2b3d.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/33-3a3679753186fe0156da407499a3b938.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/34-e6a89ad13ea9a8953e83d358734a06a8.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/35.1-bca61aff52883411b99cd2c8a7c0309e.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/35.2-3ce0e2f1ec820cd1085ce02280a43033.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/36-eaa7b77d10f55ddf0440cd429a31ae62.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/37-81e31ea8b8df162ecac9dac04a500a4b.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/38-e24b0bcd9f840920f657b2b3f7b7de1c.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/39-8f6661ef8c70f0a1a57fced098193f7f.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/40-2b2b7c0605bcc3eb1fdb765ab5721e12.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/41.1-5e26610116aeeab17664fef8ec09b4ea.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/41.2-aea6fecb7f61f1b0e0d1419d6739f7b8.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/42-f689c4a516dff6e9d9ca700db7493c96.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/43-6f2cafc962dc57394d7a59265626a105.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/44-2c397b9315d62284af4b5b0b1c59e788.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/45-d94fed8ed473a91a83dc29ad4d8f8f02.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/46-828c191a24ec920cec772b3ce9214318.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/47.1-a4c945d398cfd7e16e7d1618be6ea763.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/47.2-3fef5a1130a57500cb223174a1322ce2.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/48-5abfef4829cbd9827dee140bb83f1be9.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/49-53f8ed62b4d9e09b07a5aa1a8b7711fb.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/50-f2a9f2f48c5bc583029a5a3f64705b5d.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/51-fb9f04b01d663bb93856e60e87642b51.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/52-295cde8e1263af6eeebb24a08122c086.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/53-9ba0b2326981581560bebc1a1161e2d9.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/54-8bf27915303fc151aef169bd1a750f1f.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/55-7479a5b167f6d7e7b3057c8f39644af1.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/56-7175a9e755a850f9c0e6d5ce859f9f90.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/57.1-9d3d3b2ceeabff5a16d132b4865f97d7.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/57.2-8413bbdd1d11a0686a978b6c1313047e.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/58-620958ee63e6e99ef597ba0b70668842.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/59-c77e4979a1bb12998b4fc530e2b4baf6.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/60-30b32372a9c163c0e2720d7b6716d054.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/61-da1308538bbb40ab61b3978d4a1285fc.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/62-b9bae51f82888da0902d62c1160e8bcf.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/63.1-bdaedc03b064bfda125c508872df0f66.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/63.2-13a634143228e0a20ffee0e53b58344e.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/64-2d62b476015732151db3367952bbd20e.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/65-bb2d85e3792692cc4735af465d4f581e.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/66-c25b42510ab5de083137ec74e5b11c5a.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/67-6f9c5e45ab3948e75fd688c51f14b3fb.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/68-c1ff65ea72368eb8f05b55875a9b9373.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/69-dfb4d1d21ca547e778fe1525d3e609fa.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/70-0fab54996ca0e6b2a614848fc86534e5.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/71-cefbd145d3ea6c23a9842567e0b86cc7.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/72-0358fb376cd9dd5480f944403dfc7244.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/73-a710a42654c7faee761c6e9a87c7be22.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/74-0e2046da699e9ceecb17f9aa3bef8d29.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/75-49ab7784d385fbc5d828de588a533dac.png"},function(a,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/76-361410d4417a99a2ef534df8752bab90.png"}])]);