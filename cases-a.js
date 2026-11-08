window.CASES_A = [
{
  id:"villa", title:"Malam di Villa Kenanga",
  lead:"Hartono Wijaya (62), pengusaha properti, ditemukan tewas di ruang kerjanya di villa Puncak pada Jumat malam. Salah satu dari enam orang di villa ini adalah pembunuhnya.",
  suspects:[
    { id:"rini", name:"Rini Ambarwati", age:48, role:"Istri korban",
      desc:"Akan mewarisi sebagian besar harta. Sering bertengkar soal dugaan perselingkuhan suaminya.",
      qs:[
        { q:"Di mana Anda pukul 21.00?", a:"Di kamar. Saya bersiap tidur dan minum obat tidur pukul 21.20. Tidak ada yang melihat saya keluar sampai pagi.", f:"Petunjuk: cek botol obat (Bukti 10)" },
        { q:"Apa yang Anda tahu soal ruang kerja suami?", a:"Hanya Surya yang hampir selalu ada di sana. Malam ini pun dia kembali lagi setelah makan malam.", f:"Petunjuk: cek kartu akses (Bukti 6)" } ] },
    { id:"dimas", name:"Dimas Pratama", age:29, role:"Anak angkat dan manajer proyek",
      desc:"Punya utang judi online yang cukup besar. Terlihat gelisah sepanjang makan malam.",
      qs:[
        { q:"Apa yang Anda lakukan pukul 21.10?", a:"Video call dengan Sekar di Bandung sampai sekitar 21.42. Dia bisa mengonfirmasi.", f:"Petunjuk: cek riwayat panggilan (Bukti 9)" },
        { q:"Bagaimana soal utang judi Anda?", a:"Sudah saya cicil sebagian. Ayah tahu, dan dia belum marah soal itu." } ] },
    { id:"surya", name:"Surya Kusuma", age:41, role:"Sekretaris pribadi, 12 tahun",
      desc:"Mengurus seluruh keuangan kantor. Malam ini ia memimpin rapat keuangan di ruang kerja.",
      qs:[
        { q:"Kapan Anda keluar dari ruang kerja?", a:"Pukul 21.10, setelah rapat selesai. Saya langsung ke kamar.", f:"Petunjuk: cek log kartu akses (Bukti 6)" },
        { q:"Apa yang Anda minum malam ini?", a:"Teh hangat saja. Saya tidak pernah minum alkohol.", f:"Petunjuk: cek gelas wiski (Bukti 1)" } ] },
    { id:"maya", name:"Maya Dewi", age:38, role:"Sepupu korban dan pelukis",
      desc:"Bertengkar hebat dengan korban pukul 20.45 karena warisan. Meninggalkan villa sebelum makan malam selesai.",
      qs:[
        { q:"Apakah Anda kembali ke villa?", a:"Ya, sekitar pukul 21.30. Saya ingin minta maaf, tapi gerbang tidak dibukakan. Saya langsung pulang.", f:"Petunjuk: cek CCTV gerbang (Bukti 7)" },
        { q:"Apa yang Anda lihat di parkiran?", a:"Mobil dr. Bram masih ada di sana saat saya pergi, tapi saya tidak ingat jamnya." } ] },
    { id:"bram", name:"dr. Bram Setiawan", age:55, role:"Dokter keluarga",
      desc:"Biasa meresepkan obat jantung untuk keluarga ini. Teman lama korban.",
      qs:[
        { q:"Anda yang meresepkan digoxin?", a:"Bukan untuk Hartono. Itu untuk Ny. Sumarni, pasien lama saya. Resepnya saya buat tiga hari lalu.", f:"Petunjuk: cek catatan klinik (Bukti 4)" },
        { q:"Kapan Anda meninggalkan villa?", a:"Sekitar pukul 20.50. Saya lewat gerbang tol Jagorawi pukul 20.58 menuju Jakarta.", f:"Petunjuk: cek e-toll (Bukti 8)" } ] },
    { id:"lastri", name:"Lastri", age:60, role:"Kepala asisten rumah tangga",
      desc:"Akan dipecat minggu depan. Dialah yang menemukan jenazah pukul 22.05.",
      qs:[
        { q:"Kapan Anda menyiapkan wiski?", a:"Pukul 20.30, karafe saya taruh di meja ruang kerja. Setelah itu saya ke dapur sampai pukul 21.15.", f:"Petunjuk: cek catatan Lastri (Bukti 11)" },
        { q:"Bagaimana dengan sampah dapur?", a:"Saya buang sampah pukul 21.15 dan tidak ada strip obat waktu itu. Saat polisi datang, strip itu sudah ada di tempat sampah.", f:"Petunjuk: strip muncul setelah 21.15 (Bukti 3)" } ] }
  ],
  evidence:[
    { n:1, t:"Gelas wiski di meja", d:"Sidik jari parsial ibu jari kanan ditemukan di gelas. Bukan sidik jari korban." },
    { n:2, t:"Sisa wiski di karafe", d:"Hasil lab menunjukkan kandungan digoxin, obat jantung dosis tinggi." },
    { n:3, t:"Strip obat kosong di tempat sampah dapur", d:"Strip digoxin dibungkus tisu. Tidak ada nama pasien di strip itu." },
    { n:4, t:"Catatan klinik dr. Bram", d:"Digoxin atas nama Ny. Sumarni diambil tiga hari lalu oleh pengantar yang ditulis \"S.K.\" di kwitansi." },
    { n:5, t:"Buku harian Hartono (halaman terakhir)", d:"\"S. harus menjelaskan selisih 4,2 miliar besok malam. Kalau tidak, saya lapor polisi.\"" },
    { n:6, t:"Log kartu akses ruang kerja", d:"Kartu atas nama Surya Kusuma tercatat masuk pukul 21.00 dan keluar pukul 21.44." },
    { n:7, t:"CCTV gerbang", d:"Avanza putih milik Maya kembali ke gerbang pukul 21.32 dan pergi lagi pukul 21.35." },
    { n:8, t:"Catatan e-toll dr. Bram", d:"Mobil dr. Bram melewati gerbang tol Jagorawi pukul 20.58 menuju Jakarta." },
    { n:9, t:"Riwayat panggilan Dimas", d:"Video call 21.10 sampai 21.42 dengan Sekar di Bandung. Rekaman layar dan pengakuan Sekar cocok." },
    { n:10, t:"Botol obat tidur Rini", d:"Resep atas nama Rini sendiri. Pelayan kamar melihatnya masuk kamar sekitar pukul 21.20." },
    { n:11, t:"Catatan Lastri", d:"Karafe disiapkan pukul 20.30. Lastri di dapur hingga pukul 21.15, lalu tidak masuk ruang kerja." },
    { n:12, t:"Laporan forensik dan jam dinding", d:"Jam dinding berhenti pukul 21.47. Perkiraan waktu kematian pukul 21.40 sampai 21.50." }
  ],
  keys:[1,2,4,6],
  timeline:[
    ["19.30","Makan malam bersama. Semua orang hadir."],
    ["20.30","Lastri menyiapkan karafe wiski di ruang kerja."],
    ["20.45","Maya bertengkar dengan Hartono."],
    ["20.50","Maya pergi dengan Avanza. dr. Bram juga meninggalkan villa."],
    ["21.00","Kartu akses Surya masuk ruang kerja. Rapat keuangan dimulai."],
    ["21.10","Dimas mulai video call dari kamarnya."],
    ["21.20","Rini minum obat tidur lalu masuk kamar."],
    ["21.32","Maya kembali ke gerbang. Pergi lagi pukul 21.35."],
    ["21.44","Kartu akses Surya tercatat keluar ruang kerja."],
    ["21.47","Jam dinding di ruang kerja berhenti."],
    ["22.05","Lastri menemukan Hartono tergeletak di lantai."]
  ],
  motives:[["gelap","Menutupi penggelapan dana 4,2 miliar"],["waris","Perebutan warisan"],["judi","Utang judi online"],["selingkuh","Balas dendam perselingkuhan"]],
  methods:[["racun","Digoxin dicampur ke dalam wiski"],["tidur","Overdosis obat tidur"],["pukul","Pukulan benda tumpul"],["alami","Serangan jantung alami"]],
  solution:{culprit:"surya", motive:"gelap", method:"racun"},
  reveal:{
    culprit:"Surya Kusuma, sekretaris pribadi. Ia menggelapkan 4,2 miliar dari perusahaan. Hartono menemukan selisihnya dan akan melapor ke polisi keesokan malamnya.",
    how:"Pukul 21.00 Surya masuk ruang kerja dengan kartu aksesnya. Ia memasukkan digoxin ke karafe wiski, lalu keluar pukul 21.44. Hartono minum wiski itu tak lama kemudian.",
    keys:"Sidik jari di gelas (1) dan residu digoxin di karafe (2) menempatkan Surya dekat wiski, padahal ia mengaku tidak minum alkohol. Log kartu akses (6) membantah keterangannya bahwa ia pergi pukul 21.10. Resep digoxin yang diambil \"S.K.\" (4) dan buku harian (5) melengkapi motif dan jejaknya.",
    decoys:"Maya terlihat di gerbang (7) tapi tidak masuk villa. dr. Bram meresepkan digoxin (4) tapi sudah pulang pukul 20.58 (8). Dimas dan Rini punya alibi (9, 10). Lastri punya motif, tapi tidak menyentuh karafe setelah 20.30 (11)."
  }
},
{
  id:"gema", title:"Sesi Malam di Gema Nada",
  lead:"Bayu Prasetyo (45), produser musik, ditemukan tak sadarkan diri di dalam booth rekaman kedap suara di studionya di Bandung. Enam orang berada di gedung itu malam sebelumnya.",
  suspects:[
    { id:"tania", name:"Tania Lesmana", age:34, role:"Vokalis utama",
      desc:"Kontraknya akan diputus Bayu minggu depan. Malam itu ia bertengkar keras dengannya soal lagu Senja.",
      qs:[
        { q:"Apa yang terjadi saat sesi rekaman?", a:"Bayu bilang lagu Senja akan dinyanyikan vokalis baru. Kami bertengkar, lalu saya pulang pukul 22.05.", f:"Petunjuk: cek CCTV lobi (Bukti 6)" },
        { q:"Apa yang Anda tahu soal master Senja?", a:"Sedikit. Ada kabar file itu sudah keluar dari studio, tapi saya tidak tahu siapa yang mengirimnya.", f:"Petunjuk: cek pesan Bayu (Bukti 5)" } ] },
    { id:"reza", name:"Reza Mahendra", age:39, role:"Audio engineer",
      desc:"Memegang kendali mixing dan kunci teknis studio. Pernah diperingatkan keras karena rekaman yang hilang.",
      qs:[
        { q:"Kapan Anda pulang?", a:"Sekitar pukul 22.20, setelah memasang mikrofon di booth. Saya tidak kembali ke studio.", f:"Petunjuk: cek kartu akses ruang kontrol (Bukti 3)" },
        { q:"Siapa yang punya kunci darurat pintu belakang?", a:"Bayu dan saya. Kunci saya ada di laci meja, semua orang di studio tahu.", f:"Petunjuk: cek kunci pintu belakang (Bukti 11)" } ] },
    { id:"nadia", name:"Nadia Ulfa", age:26, role:"Asisten studio",
      desc:"Mengurus jadwal sesi dan kotak P3K studio. Pulang lebih awal dengan tas yang penuh.",
      qs:[
        { q:"Apa isi tas Anda?", a:"Laptop dan dokumen. Ada juga obat kosong yang saya temukan di laci P3K dan mau saya buang.", f:"Petunjuk: cek vial di tas Nadia (Bukti 4)" },
        { q:"Siapa yang bisa mengakses panel kontrol?", a:"Akun teknisi. Saya tahu passwordnya dari catatan di meja, tapi saya tidak pernah memakainya.", f:"Petunjuk: cek log panel ventilasi (Bukti 2)" } ] },
    { id:"hendra", name:"Hendra Gunawan", age:50, role:"Investor label",
      desc:"Ingin membeli 40 persen saham Gema Nada. Bertemu Bayu di ruang tunggu sebelum sesi dimulai.",
      qs:[
        { q:"Kapan Anda meninggalkan studio?", a:"Sekitar pukul 22.10. Pos satpam pasti mencatatnya.", f:"Petunjuk: cek buku jaga (Bukti 8)" },
        { q:"Apa maksud Bayu soal orang yang menjual master?", a:"Saya tidak tahu. Mungkin dia menuduh seseorang di dalam studio.", f:"Petunjuk: cek pesan Bayu (Bukti 5)" } ] },
    { id:"kevin", name:"Kevin Anggara", age:31, role:"Gitaris pengganti",
      desc:"Baru bergabung minggu lalu. Tidak ikut sesi rekaman malam itu.",
      qs:[
        { q:"Di mana Anda malam itu?", a:"Di rumah, sedang live stream latihan dari pukul 22.00 sampai hampir tengah malam.", f:"Petunjuk: cek rekaman live (Bukti 9)" },
        { q:"Apakah Anda tahu soal kontrak Hendra?", a:"Tidak. Itu urusan manajemen, bukan urusan gitaris.", f:"Petunjuk: cek draf saham (Bukti 10)" } ] },
    { id:"dedi", name:"Dedi Suhendar", age:60, role:"Satpam malam",
      desc:"Penjaga gerbang dan pemegang kunci gerbang. Mencatat semua orang yang keluar masuk.",
      qs:[
        { q:"Apakah Anda patroli ke belakang studio?", a:"Tidak malam itu. Saya di pos gerbang sampai sekitar pukul 23.30." },
        { q:"Siapa yang punya kunci pintu belakang?", a:"Saya tidak punya. Hanya teknisi dan Pak Bayu yang punya kunci.", f:"Petunjuk: cek kunci pintu belakang (Bukti 11)" } ] }
  ],
  evidence:[
    { n:1, t:"Botol air mineral di booth", d:"Sisa midazolam ditemukan di dalam botol. Botol itu berasal dari kulkas ruang kontrol, bukan dari ruang tunggu." },
    { n:2, t:"Log panel ventilasi Booth 2", d:"Ventilasi booth dimatikan pukul 23.12 dengan akun teknisi, bukan akun Bayu." },
    { n:3, t:"Log kartu akses ruang kontrol", d:"Kartu Reza tercatat masuk ruang kontrol pukul 22.50 dan keluar pukul 23.20." },
    { n:4, t:"Vial midazolam kosong di tas Nadia", d:"Vial berlabel kotak P3K studio. Nadia mengaku menemukannya di laci P3K." },
    { n:5, t:"Pesan terakhir Bayu ke Hendra", d:"\"Saya tahu siapa yang menjual master Senja ke luar. Besok semua selesai.\"" },
    { n:6, t:"CCTV lobi", d:"Tania terlihat keluar dari lobi pukul 22.05 dengan tas di bahunya." },
    { n:7, t:"Log ojol Tania", d:"Pesanan atas nama Tania dibuat pukul 22.06. Pengemudi menjemputnya di depan gerbang pukul 22.07." },
    { n:8, t:"Buku jaga satpam", d:"Hendra keluar pukul 22.10. Nadia keluar pukul 21.45. Tania keluar pukul 22.05. Tidak ada yang kembali masuk setelah itu." },
    { n:9, t:"Rekaman live stream Kevin", d:"Live stream latihan berjalan dari pukul 22.00 sampai 23.30. Ratusan penonton bisa mengonfirmasi." },
    { n:10, t:"Draf perjanjian saham", d:"Hendra menawarkan 40 persen saham dengan syarat Bayu menandatangani sebelum akhir pekan." },
    { n:11, t:"Kunci pintu belakang", d:"Hanya ada dua kunci darurat. Satu di saku Bayu, satu lagi di laci meja Reza. Pintu belakang dibuka pukul 23.15 tanpa dirusak." },
    { n:12, t:"Laporan forensik", d:"Perkiraan waktu kematian pukul 23.00 sampai 23.30. Tidak ada tanda perlawanan. Kadar midazolam dalam darah tinggi." }
  ],
  keys:[1,2,3,11],
  timeline:[
    ["20.00","Sesi rekaman lagu Senja dimulai di Booth 2."],
    ["20.40","Tania dan Bayu bertengkar soal kontrak."],
    ["21.15","Hendra datang dan berbicara dengan Bayu di ruang tunggu."],
    ["21.45","Nadia pulang dengan tasnya."],
    ["22.00","Kevin mulai live stream latihan dari rumahnya."],
    ["22.05","Tania keluar lewat lobi. Ojol datang pukul 22.07."],
    ["22.10","Hendra keluar lewat gerbang."],
    ["22.20","Reza mengaku sudah pulang."],
    ["22.30","Bayu masuk Booth 2 untuk overdub vokal."],
    ["22.50","Kartu Reza tercatat masuk ruang kontrol."],
    ["23.12","Ventilasi Booth 2 dimatikan dari panel."],
    ["23.15","Pintu belakang studio dibuka."],
    ["23.20","Kartu Reza tercatat keluar ruang kontrol."],
    ["00.25","Satpam Dedi menemukan Bayu tak sadarkan diri di Booth 2."]
  ],
  motives:[["jual","Menutupi penjualan master lagu Senja ke pihak luar"],["kontrak","Sakit hati karena kontrak diputus"],["saham","Berebut saham studio"],["pribadi","Dendam pribadi"]],
  methods:[["bius","Dibius lalu dikunci di booth tanpa ventilasi"],["cekik","Dicekik dengan kabel mikrofon"],["alkohol","Overdosis alkohol"],["jatuh","Jatuh dari tangga teknis"]],
  solution:{culprit:"reza", motive:"jual", method:"bius"},
  reveal:{
    culprit:"Reza Mahendra, audio engineer. Ia menjual master lagu Senja ke pihak luar. Bayu mengetahuinya dan berencana membongkarnya keesokan harinya.",
    how:"Reza membawa botol air berisi midazolam dari kulkas ruang kontrol ke Booth 2. Setelah Bayu tertidur, ia memakai akun teknisi untuk mematikan ventilasi pukul 23.12, lalu keluar lewat pintu belakang dengan kunci darurat di lacinya.",
    keys:"Botol di booth berasal dari ruang kontrol (1). Akun teknisi yang mematikan ventilasi (2) cocok dengan keberadaan Reza di ruang kontrol (3). Reza mengaku sudah pulang pukul 22.20, padahal kartunya masih tercatat di sana. Kunci kedua pintu belakang ada di lacinya (11).",
    decoys:"Tania keluar sebelum kejadian (6, 7). Hendra juga pergi sebelum kejadian (8). Nadia punya vial midazolam (4), tetapi sudah pulang pukul 21.45. Kevin siaran langsung sepanjang malam (9). Dedi tidak patroli ke belakang dan tidak memegang kunci pintu belakang."
  }
},
{
  id:"samudra", title:"Kapal Samudra Biru",
  lead:"Wilson Tanuwijaya (58), pemilik kapal wisata Samudra Biru, ditemukan mengambang di laut dekat Labuan Bajo pagi hari setelah pesta makan malam di kapal. Ada enam orang di kapal malam itu.",
  suspects:[
    { id:"rudi", name:"Kapten Rudi Hartanto", age:48, role:"Kapten kapal",
      desc:"Mengendalikan kapal sejak lima tahun lalu. Bertengkar dengan Wilson di dek malam itu soal rute kapal.",
      qs:[
        { q:"Apa yang Anda lakukan setelah pukul 01.00?", a:"Saya di anjungan. Kapal berlayar pelan karena ada cuaca buruk di selatan.", f:"Petunjuk: cek log GPS (Bukti 1)" },
        { q:"Soal pertengkaran di dek?", a:"Wilson ingin mengubah rute ke Labuan. Saya bilang itu berbahaya. Tidak lebih dari itu.", f:"Petunjuk: cek buku log Wilson (Bukti 5)" } ] },
    { id:"sari", name:"Sari Wulandari", age:41, role:"Kepala koki",
      desc:"Memasak sepanjang malam dan sering naik turun tangga dapur ke dek.",
      qs:[
        { q:"Apakah Anda naik ke dek malam itu?", a:"Hanya sekali, mengantar nampan teh pukul 00.40. Saya langsung turun lagi.", f:"Petunjuk: cek CCTV dek (Bukti 6)" },
        { q:"Apa yang Anda tahu soal muatan kapal?", a:"Hanya peti yang dibawa kapten. Saya tidak pernah membukanya." } ] },
    { id:"adrian", name:"Adrian Kusnadi", age:35, role:"Penumpang, pengusaha pelayaran",
      desc:"Teman bisnis lama Wilson. Minum banyak di bar sepanjang malam.",
      qs:[
        { q:"Di mana Anda sepanjang malam?", a:"Di bar sampai sekitar pukul 00.30, lalu tidur di kabin. Bartender bisa mengonfirmasi.", f:"Petunjuk: cek log bar (Bukti 7)" },
        { q:"Apa urusan bisnis Anda dengan Wilson?", a:"Saya pernah menawarkan kerja sama pelayaran. Dia menolak." } ] },
    { id:"joko", name:"Joko Prasetyo", age:55, role:"Kepala teknisi mesin",
      desc:"Bertanggung jawab atas mesin dan generator kapal.",
      qs:[
        { q:"Apakah mesin pernah mati malam itu?", a:"Ya, sebentar sekitar pukul 00.55 untuk perbaikan pompa. Itu tercatat di logbook mesin.", f:"Petunjuk: cek logbook mesin (Bukti 10)" },
        { q:"Apakah Anda punya akses ke panel kemudi?", a:"Tidak. Panel kemudi hanya untuk kapten dan mualim." } ] },
    { id:"lina", name:"Lina Marlina", age:27, role:"Penumpang, jurnalis perjalanan",
      desc:"Menulis artikel perjalanan. Mengambil foto dek setiap pagi.",
      qs:[
        { q:"Apa yang Anda lihat malam itu?", a:"Saya tidur di kabin sejak pukul 23.00. Saya bangun pukul 05.10 untuk foto matahari terbit dari dek utara." },
        { q:"Pernahkah Anda melihat Wilson bertengkar?", a:"Ya, dengan kapten sekitar pukul 23.30. Mereka berbicara keras, tapi saya tidak mendengar isinya." } ] },
    { id:"bima", name:"Bima Saputra", age:23, role:"Kru dek jaga malam",
      desc:"Bertugas menjaga dek belakang sampai tengah malam.",
      qs:[
        { q:"Sampai jam berapa Anda berjaga?", a:"Sampai sekitar pukul 00.50. Lalu saya istirahat di ruang kru bersama Dani.", f:"Petunjuk: cek catatan jaga (Bukti 8)" },
        { q:"Apakah Anda melihat seseorang di dek belakang?", a:"Tidak. Dek belakang gelap sejak lampu sorot rusak minggu lalu." } ] }
  ],
  evidence:[
    { n:1, t:"Log GPS kapal", d:"Sinyal GPS berhenti pukul 01.10. Penghentian dilakukan manual dari panel kemudi dengan akun kapten." },
    { n:2, t:"Noda darah di pagar dek belakang", d:"Noda kecil di pagar sisi kiri dek belakang. Sampel cocok dengan darah Wilson." },
    { n:3, t:"Kunci cadangan kabin Wilson", d:"Kunci cadangan kabin Wilson tidak ada di kabinnya. Kunci itu ditemukan di laci kapten." },
    { n:4, t:"Manifest muatan", d:"Dua puluh peti tercatat berisi keramik. Ketika dibuka petugas, isinya barang lain yang tidak tercatat." },
    { n:5, t:"Buku log pribadi Wilson", d:"\"Rudi harus turun di Labuan. Atau saya lapor ke Bea Cukai besok.\"" },
    { n:6, t:"CCTV dek", d:"Sari terlihat naik ke dek pukul 00.40 dan turun lagi pukul 00.44." },
    { n:7, t:"Log bar kapal", d:"Adrian menutup tagihan di bar pukul 00.30. Bartender mengingatnya jelas." },
    { n:8, t:"Catatan jaga kru dek", d:"Bima melapor berjaga sampai pukul 00.50, lalu istirahat bersama Dani di ruang kru." },
    { n:9, t:"Foto sunrise Lina", d:"Foto diambil pukul 05.10 dari dek utara. Tidak menampilkan dek belakang." },
    { n:10, t:"Logbook mesin", d:"Mesin dimatikan sebentar pukul 00.55 untuk memperbaiki pompa. Tercatat oleh Joko." },
    { n:11, t:"Pesan radio kapal", d:"Pukul 01.20, kapten melaporkan \"orang jatuh\" ke kantor pusat, sebelum ada laporan resmi dari kru." },
    { n:12, t:"Laporan forensik", d:"Wilson meninggal karena benturan di kepala sebelum masuk ke air. Tidak ada tanda perlawanan." }
  ],
  keys:[1,2,3,5],
  timeline:[
    ["22.00","Pesta makan malam di dek utama."],
    ["23.00","Lina masuk kabin untuk tidur."],
    ["23.30","Wilson dan kapten berdebat di dek belakang."],
    ["00.30","Adrian menutup tagihan bar dan naik ke kabin."],
    ["00.40","Sari naik ke dek untuk mengantar teh."],
    ["00.50","Bima selesai berjaga dan istirahat di ruang kru."],
    ["00.55","Mesin dimatikan sebentar untuk perbaikan pompa."],
    ["01.10","Sinyal GPS kapal berhenti dari panel kemudi."],
    ["01.20","Kapten melaporkan orang jatuh ke kantor pusat."],
    ["05.10","Lina mengambil foto matahari terbit."]
  ],
  motives:[["penyelundupan","Menutupi penyelundupan barang di kapal"],["warisan","Perebutan warisan perusahaan"],["cinta","Urusan asmara"],["utang","Utang pribadi yang menumpuk"]],
  methods:[["dorong","Didorong dari dek belakang saat malam"],["racun","Diracun lewat makan malam"],["listrik","Kecelakaan listrik di kabin"],["jatuh","Jatuh tanpa sengaja karena mabuk"]],
  solution:{culprit:"rudi", motive:"penyelundupan", method:"dorong"},
  reveal:{
    culprit:"Kapten Rudi Hartanto. Ia menjalankan penyelundupan lewat peti yang tercatat sebagai keramik. Wilson menemukannya dan berencana melapor ke Bea Cukai.",
    how:"Sekitar pukul 01.00 Rudi menyusul Wilson ke dek belakang dan mendorongnya ke laut. Ia lalu mematikan sinyal GPS dari panel kemudi pukul 01.10 dan menggunakan kunci cadangan kabin Wilson untuk mengambil catatan yang memberatkannya.",
    keys:"Penghentian GPS manual dari akun kapten (1) dan noda darah di pagar dek (2) menempatkan Rudi di lokasi kejadian. Kunci cadangan Wilson ada di laci kapten (3). Manifest yang tidak cocok dengan muatan (4) dan buku log Wilson (5) memberi motif.",
    decoys:"Sari hanya naik sebentar pukul 00.40 (6). Adrian ada di bar (7). Bima dan Dani berada di ruang kru (8). Joko mematikan mesin tapi bukan panel kemudi (10). Lina tidur di kabin dan fotonya tidak menampilkan dek belakang (9)."
  }
},
{
  id:"mirna", title:"Dapur Mirna Bakery",
  lead:"Mirna Setyowati (52), pemilik toko roti Mirna Bakery di Yogyakarta, jatuh pingsan saat pesta ulang tahun toko dan meninggal di rumah sakit. Ia memakan kue baru buatan dapur tokonya sendiri.",
  suspects:[
    { id:"dodi", name:"Dodi Rahman", age:30, role:"Kepala pastry",
      desc:"Pembuat kue utama toko. Mirna baru saja mengatakan akan mengambil alih resep kue andalannya dan memecatnya.",
      qs:[
        { q:"Siapa yang membuat kue ulang tahun malam itu?", a:"Saya sendiri, dibantu Rani. Resepnya pun saya yang menulis.", f:"Petunjuk: cek catatan resep (Bukti 4)" },
        { q:"Apa yang Anda tahu soal kacang dan alergi Ibu Mirna?", a:"Semua orang di dapur tahu Bu Mirna alergi kacang. Kami selalu memisahkan alat untuk kue kacang.", f:"Petunjuk: cek daftar belanja (Bukti 2)" } ] },
    { id:"sita", name:"Sita Setyowati", age:44, role:"Adik ipar, pemegang saham toko",
      desc:"Punya 30 persen saham toko. Sering berselisih dengan Mirna soal pembagian keuntungan.",
      qs:[
        { q:"Apa yang Anda lakukan sebelum pesta?", a:"Saya di ruang tamu mengurus undangan. Saya tidak masuk dapur sama sekali.", f:"Petunjuk: cek CCTV dapur (Bukti 6)" },
        { q:"Apakah Anda tahu soal alergi Mirna?", a:"Tentu. Itu sebabnya saya tidak pernah mengirim kue kacang ke rumahnya." } ] },
    { id:"yudi", name:"Yudi Prasetya", age:37, role:"Supplier bahan baku",
      desc:"Mengantar tepung dan selai ke toko setiap minggu. Pernah menawarkan selai kacang baru.",
      qs:[
        { q:"Apakah Anda membawa selai kacang ke toko?", a:"Saya menawarkannya dua minggu lalu, tapi Dodi menolaknya. Setelah itu saya tidak bawa lagi.", f:"Petunjuk: cek daftar belanja (Bukti 2)" },
        { q:"Kapan Anda terakhir ke dapur?", a:"Pagi tadi, mengantar tepung. Saya hanya sampai di pintu belakang." } ] },
    { id:"rani", name:"Rani Puspita", age:24, role:"Asisten pastry",
      desc:"Membantu Dodi setiap hari. Pernah dimarahi Mirna karena kue yang gosong.",
      qs:[
        { q:"Apa saja yang Anda kerjakan untuk kue ulang tahun?", a:"Mengocok telur dan menghias krim. Dodi yang mencampur adonannya sendiri.", f:"Petunjuk: cek CCTV dapur (Bukti 6)" },
        { q:"Apakah Anda pernah melihat kacang di dapur?", a:"Ada selai kacang di rak bawah untuk kue khusus pelanggan. Tapi rak itu dikunci." } ] },
    { id:"hana", name:"Hana Wijaya", age:28, role:"Food blogger, tamu pesta",
      desc:"Datang ke pesta untuk meliput kue baru. Sempat berfoto dengan Mirna.",
      qs:[
        { q:"Apa yang Anda makan di pesta?", a:"Potongan kue cokelat dari piring yang diletakkan di meja depan. Saya tidak makan kue lain.", f:"Petunjuk: cek daftar tamu (Bukti 8)" },
        { q:"Apakah Anda masuk ke dapur?", a:"Tidak. Saya hanya di area toko dan teras." } ] },
    { id:"bejo", name:"Bejo Sumarno", age:62, role:"Tetangga ruko dan tukang kebun",
      desc:"Tinggal di ruko sebelah. Sering membantu membawa kursi dan meja untuk pesta.",
      qs:[
        { q:"Apa yang Anda lihat malam itu?", a:"Saya membawa kursi ke teras pukul 18.00, lalu pulang. Saya tidak masuk ke dapur." },
        { q:"Pernahkah Anda melihat seseorang membawa tas ke dapur?", a:"Saya lihat Dodi membawa kotak kecil dari gudang pukul 17.30. Saya kira itu bahan kue.", f:"Petunjuk: cek catatan gudang (Bukti 9)" } ] }
  ],
  evidence:[
    { n:1, t:"Sisa kue di piring", d:"Potongan kue cokelat yang dimakan Mirna mengandung protein kacang dalam jumlah tinggi." },
    { n:2, t:"Daftar belanja dapur", d:"Ada satu entri selai kacang yang dibeli di luar supplier rutin, tercatat dengan tulisan tangan Dodi." },
    { n:3, t:"Pot selai kacang di tong sampah belakang", d:"Pot kosong dari merek yang tidak pernah dipesan toko." },
    { n:4, t:"Catatan resep kue ulang tahun", d:"Di lembar resep ada tambahan tulisan tangan yang tidak ada di resep standar toko." },
    { n:5, t:"Pesan WhatsApp Mirna ke Dodi", d:"\"Mulai bulan depan resep cokelat ini saya pegang sendiri. Kamu tidak perlu datang lagi.\"" },
    { n:6, t:"CCTV dapur", d:"Dapur terekam kosong pukul 17.00 sampai 17.40 karena kamera di pintu gudang rusak. Dodi terlihat masuk ke gudang pukul 17.10." },
    { n:7, t:"Alat pengaduk khusus", d:"Dua alat pengaduk dicuci bersih. Hanya satu yang masih berbau kacang." },
    { n:8, t:"Daftar tamu pesta", d:"Hana dan tamu lain mencicipi kue dari dua piring berbeda. Piring yang dibawa Hana berasal dari meja depan." },
    { n:9, t:"Catatan gudang", d:"Kotak kecil dari gudang tercatat diambil oleh Dodi pukul 17.30 untuk \"bahan percobaan\"." },
    { n:10, t:"Laporan rumah sakit", d:"Reaksi alergi berat terjadi dalam hitungan menit. Mirna sudah tahu punya alergi sejak kecil." }
  ],
  keys:[2,3,4,9],
  timeline:[
    ["09.00","Dapur mulai membuat kue untuk pesta."],
    ["17.10","Dodi masuk ke gudang."],
    ["17.30","Dodi mengambil kotak kecil dari gudang."],
    ["17.40","Kamera dapur kembali merekam."],
    ["18.00","Bejo membawa kursi ke teras."],
    ["18.30","Pesta dimulai. Mirna memotong kue pertama."],
    ["18.45","Mirna mulai merasa sesak."],
    ["19.10","Mirna dibawa ke rumah sakit."]
  ],
  motives:[["resep","Mencegah kehilangan resep dan pekerjaannya"],["saham","Berebut saham toko"],["dendam","Dendam pribadi pada keluarga"],["utang","Utang kepada supplier"]],
  methods:[["kacang","Alergen kacang dicampur ke dalam kue"],["racun","Racun dimasukkan ke krim"],["basi","Kue dibiarkan basi"],["sengaja","Piring dicampur dengan tidak sengaja"]],
  solution:{culprit:"dodi", motive:"resep", method:"kacang"},
  reveal:{
    culprit:"Dodi Rahman, kepala pastry. Mirna berencana mengambil alih resep cokelatnya dan memecatnya bulan depan.",
    how:"Dodi mengambil selai kacang dari gudang pukul 17.30, saat kamera dapur mati, lalu mencampurkannya ke adonan kue yang dipotong Mirna. Ia menulis tambahan di catatan resep dan membuang pot selai kacang di tong belakang.",
    keys:"Daftar belanja dengan entri selai kacang tulisan tangan Dodi (2) dan pot selai kacang di tong belakang (3) menunjukkan asal bahannya. Tambahan tulisan tangan di resep (4) dan catatan gudang tentang kotak itu (9) mengikat Dodi ke kue.",
    decoys:"Sita tidak masuk dapur (6). Yudi hanya sampai pintu belakang dan selainya sudah ditolak (2). Rani tidak tahu rak yang terkunci (6). Hana makan dari piring depan yang bersih (8). Bejo hanya melihat Dodi membawa kotak, tidak tahu isinya (9)."
  }
},
{
  id:"apartemen", title:"Lantai 17 Menara Cemara",
  lead:"Dewi Anggraini (34), penyewa di lantai 17 Menara Cemara, Jakarta Selatan, jatuh dari balkon apartemennya pada Sabtu malam. Pintu apartemen terkunci dari dalam saat petugas datang.",
  suspects:[
    { id:"andre", name:"Andre Gunadi", age:36, role:"Suami korban",
      desc:"Sedang berselisih dengan Dewi soal perceraian. Malam itu ia sempat pulang sebentar lalu pergi lagi.",
      qs:[
        { q:"Kapan Anda terakhir melihat Dewi?", a:"Pukul 20.00, sebelum saya ke rumah teman untuk main futsal.", f:"Petunjuk: cek kunci apartemen (Bukti 3)" },
        { q:"Apakah Anda punya kunci cadangan?", a:"Ada di gantungan kunci saya. Tapi saya tidak memakainya malam itu.", f:"Petunjuk: cek riwayat masuk pintu (Bukti 5)" } ] },
    { id:"fitri", name:"Fitri Anggraini", age:31, role:"Adik korban",
      desc:"Tinggal di kota lain tapi datang ke apartemen seminggu sekali untuk membantu Dewi.",
      qs:[
        { q:"Kapan Anda terakhir bertemu Dewi?", a:"Siang tadi, kami makan bersama. Dia terlihat cemas soal sesuatu di kantor.", f:"Petunjuk: cek catatan keuangan (Bukti 7)" },
        { q:"Apakah Anda masuk apartemen malam ini?", a:"Tidak. Saya di hotel sejak pukul 19.00." } ] },
    { id:"yoga", name:"Yoga Pratama", age:29, role:"Tetangga lantai 17",
      desc:"Tinggal di unit sebelah. Sering terdengar suara keras dari balkon Dewi.",
      qs:[
        { q:"Apa yang Anda dengar malam itu?", a:"Ada suara benda jatuh sekitar pukul 22.00, tapi saya kira itu pot tanaman.", f:"Petunjuk: cek laporan kebersihan (Bukti 6)" },
        { q:"Apakah Anda kenal Melisa, manajer gedung?", a:"Kenal. Dia sering menagih iuran kami dengan cara yang kasar." } ] },
    { id:"jaja", name:"Pak Jaja", age:58, role:"Petugas kebersihan gedung",
      desc:"Membersihkan balkon dan lorong setiap malam sebelum pukul 21.00.",
      qs:[
        { q:"Apakah Anda membersihkan lantai 17 malam itu?", a:"Ya, sampai pukul 20.30. Pot-pot di balkon Bu Dewi masih utuh waktu itu.", f:"Petunjuk: cek laporan kebersihan (Bukti 6)" },
        { q:"Apa yang Anda lihat di lift?", a:"Saya tidak naik lift lagi setelah pukul 20.30. Saya turun lewat tangga." } ] },
    { id:"melisa", name:"Melisa Kartika", age:40, role:"Manajer gedung",
      desc:"Mengurus iuran layanan dan perawatan gedung. Hubungannya dengan Dewi sering tegang.",
      qs:[
        { q:"Apakah Anda ke lantai 17 malam itu?", a:"Tidak. Saya di kantor pengelola sampai pukul 21.30, lalu pulang.", f:"Petunjuk: cek kartu akses lantai (Bukti 4)" },
        { q:"Apa yang Anda tahu soal iuran Dewi?", a:"Dia menuduh saya salah mencatat dana perawatan. Saya sudah jelaskan semuanya." } ] },
    { id:"rina", name:"Rina Puspasari", age:33, role:"Sahabat dan rekan kerja korban",
      desc:"Bekerja di kantor akuntan yang mengaudit dana gedung. Ia sudah memberi tahu Dewi soal selisih dana.",
      qs:[
        { q:"Apa yang Anda temukan soal dana gedung?", a:"Ada selisih dana perawatan selama enam bulan. Dewi yang minta saya memeriksanya.", f:"Petunjuk: cek catatan keuangan (Bukti 7)" },
        { q:"Apakah Anda bertemu Dewi malam itu?", a:"Tidak. Dia bilang akan menemui Melisa dulu besok pagi." } ] }
  ],
  evidence:[
    { n:1, t:"Baut pagar balkon", d:"Dua baut pagar balkon Dewi dilepas dengan rapi. Satu baut ditemukan di bawah pot tanaman." },
    { n:2, t:"Kunci cadangan unit", d:"Kunci cadangan unit 1704 hanya ada tiga: satu di tangan Andre, satu di tangan Dewi, dan satu di kantor pengelola." },
    { n:3, t:"Log kunci pintu apartemen", d:"Kunci pintu unit tercatat dibuka dengan kartu master pukul 21.40 lalu ditutup lagi." },
    { n:4, t:"Log kartu akses lantai", d:"Kartu master dipakai untuk masuk lantai 17 pukul 21.42 dan keluar pukul 21.50 oleh petugas pengelola." },
    { n:5, t:"Riwayat pintu apartemen", d:"Pintu tidak pernah dibuka dengan kunci Andre malam itu." },
    { n:6, t:"Laporan kebersihan", d:"Pot-pot di balkon dibersihkan pukul 20.30 dan masih utuh. Tidak ada catatan pot jatuh malam itu." },
    { n:7, t:"Rekap iuran gedung", d:"Selama enam bulan, dana perawatan lantai 17 berkurang 180 juta. Transfer keluar tercatat atas nama pengelola." },
    { n:8, t:"Rekaman CCTV lift", d:"Lift tidak merekam siapa pun naik ke lantai 17 setelah pukul 20.30. Lift pakai kartu, dan kartu yang tercatat hanya kartu pengelola." },
    { n:9, t:"Pesan Dewi ke Rina", d:"\"Besok pagi saya minta penjelasan Melisa. Kalau dia tidak mau, saya bawa ke pengurus gedung.\"" },
    { n:10, t:"Laporan forensik", d:"Benturan terjadi setelah jatuh dari balkon. Tidak ada tanda perlawanan di dalam unit." }
  ],
  keys:[1,3,4,7],
  timeline:[
    ["20.00","Andre pergi dari apartemen untuk main futsal."],
    ["20.30","Pak Jaja selesai membersihkan lantai 17."],
    ["21.30","Melisa mengaku pulang dari kantor pengelola."],
    ["21.40","Kunci pintu unit dibuka dengan kartu master."],
    ["21.42","Kartu master tercatat masuk lantai 17."],
    ["21.50","Kartu master keluar dari lantai 17."],
    ["22.00","Yoga mendengar suara benda jatuh."],
    ["22.30","Dewi ditemukan di bawah gedung."]
  ],
  motives:[["dana","Menutupi penggelapan dana perawatan gedung"],["cerai","Konflik perceraian"],["warisan","Perebutan warisan"],["tetangga","Sengketa dengan tetangga"]],
  methods:[["jatuh","Pagar balkon dilonggarkan lalu korban jatuh"],["gas","Keracunan gas dari pemanas"],["listrik","Kecelakaan listrik di unit"],["kunci","Korban terkunci di kamar mandi"]],
  solution:{culprit:"melisa", motive:"dana", method:"jatuh"},
  reveal:{
    culprit:"Melisa Kartika, manajer gedung. Ia menggelapkan dana perawatan lantai 17 selama enam bulan. Dewi menemukan selisihnya dan akan melapor ke pengurus.",
    how:"Melisa menggunakan kartu master untuk masuk unit pukul 21.40. Ia melonggarkan baut pagar balkon, lalu menemui Dewi di balkon. Dewi jatuh saat berdebat, lalu Melisa keluar lewat lift dengan kartu pengelolanya pukul 21.50.",
    keys:"Pintu dibuka dengan kartu master (3) dan kartu itu tercatat di lantai 17 (4). Baut balkon dilepas rapi (1). Transfer dana keluar atas nama pengelola (7) memberi motif.",
    decoys:"Andre punya kunci tapi tidak membukanya malam itu (5). Fitri di hotel (2). Yoga mendengar suara tapi bukan pelakunya (6). Pak Jaja pulang sebelum pukul 21.00 (6). Rina hanya bertugas mengaudit dan tidak di lokasi (9)."
  }
}
];
