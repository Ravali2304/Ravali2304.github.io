window.CASES_C = [
{
  id:"masak2", title:"Final Lomba Masak Nasional", level:"Sulit", steps:6,
  lead:"Chef Bambang Wiyono (58), juri utama Lomba Masak Nasional, pingsan setelah mencicipi sup di babak final. Ia meninggal sebelum ambulans tiba. Enam orang berada di area juri dan dapur final.",
  suspects:[
    { id:"rafi", name:"Rafi Ardiansyah", age:27, role:"Peserta nomor 7",
      desc:"Pesaing utama. Jas peserta nomornya robek sebelum final, dan ia memakai jas cadangan panitia.",
      qs:[
        { q:"Apa yang Anda kerjakan antara pukul 19.00 dan 19.30?", a:"Menata garnish di meja sajian saya. Saya tidak pernah mendekati panci juri." },
        { q:"Siapa yang memakai jas nomor 7 malam itu?", a:"Saya pinjamkan sebentar ke Pak Nando karena jasnya kebesaran untuknya. Dia kembalikan sebelum juri makan." } ] },
    { id:"lilis", name:"Lilis Kartini", age:37, role:"Asisten sous chef peserta",
      desc:"Mantan murid Chef Bambang. Pernah dikritik keras olehnya di depan kamera dalam kompetisi sebelumnya.",
      qs:[
        { q:"Apakah Anda menyentuh panci juri?", a:"Tidak. Kaldu saya dimasak di panci lain dengan resep resmi." },
        { q:"Apa hubungan Anda dengan Chef Bambang?", a:"Dia pernah mempermalukan saya di depan umum. Saya tidak melupakan itu, tapi saya tidak membunuhnya." } ] },
    { id:"nando", name:"Nando Hartawan", age:44, role:"Juri pendamping",
      desc:"Duduk paling dekat dengan panci juri. Ikut mencicipi sup yang sama dengan Chef Bambang, tanpa gejala apa pun.",
      qs:[
        { q:"Apa yang Anda cicipi malam itu?", a:"Sendok cicip dari kotak panitia, sama seperti Chef Bambang. Saya sudah dua kali mencicipi kaldu itu sebelumnya." },
        { q:"Apakah Anda kenal peserta nomor 7?", a:"Sekilas. Dia sempat bertanya soal taruhan di luar lomba, dan saya bilang itu bukan urusan juri." } ] },
    { id:"maria", name:"Maria Ulfa", age:30, role:"Panitia dapur",
      desc:"Memegang daftar bahan dan kunci lemari bumbu. Mencatat setiap bahan yang keluar masuk.",
      qs:[
        { q:"Siapa yang mengambil bumbu dari lemari?", a:"Semua peserta boleh mengambil bumbu saat menyiapkan sajian. Saya hanya mencatat yang keluar." },
        { q:"Apakah ada bumbu yang tidak tercatat?", a:"Ada satu merek di rak peserta nomor 7. Saya kira itu bumbu pribadi Rafi." } ] },
    { id:"yanto", name:"Yanto Gunardi", age:52, role:"Dokter tim medis",
      desc:"Bertugas di tenda medis. Pertama kali menangani Chef Bambang malam itu.",
      qs:[
        { q:"Apa yang Anda curigai?", a:"Reaksi alergi, bukan keracunan. Tapi formulir alergi juri tidak diisi." },
        { q:"Apakah Chef Bambang pernah bilang soal alerginya?", a:"Tidak. Dia malah minta obat maag." } ] },
    { id:"fajar", name:"Fajar Nugroho", age:29, role:"Kru kebersihan dapur",
      desc:"Membersihkan area juri dan meja peserta di sela-sela babak final.",
      qs:[
        { q:"Apa yang Anda buang malam itu?", a:"Tisu dan kemasan kecil dari area peserta. Saya buang ke tempat sampah tenda seperti biasa." },
        { q:"Siapa yang terlihat di meja juri?", a:"Juri Nando berdiri di sana cukup lama. Saya kira dia sedang menulis nilai." } ] }
  ],
  evidence:[
    { n:1, t:"Hasil lab sisa sup", d:"Sisa sup di mangkuk Chef Bambang mengandung bahan dari bumbu kemasan yang tidak tercantum di resep final." },
    { n:2, t:"Sendok cicip juri", d:"Sendok cicip Chef Bambang tidak ada di meja juri. Sendok itu ditemukan di kotak sendok panitia, sudah dicuci." },
    { n:3, t:"Jas nomor 7", d:"Di saku dalam jas nomor 7 ditemukan kemasan bumbu kosong dengan merek yang sama." },
    { n:4, t:"Resep kaldu Lilis", d:"Resep kaldu Lilis sesuai daftar resmi. Tidak ada bumbu kemasan dalam catatannya." },
    { n:5, t:"Kuitansi taruhan lomba", d:"Kuitansi taruhan terselip di buku panitia. Penerimanya tertulis \"N.H.\" dengan tanggal 18 Oktober." },
    { n:6, t:"CCTV meja juri pukul 19.20", d:"Seseorang berjas nomor 7 menuangkan cairan dari botol kecil ke panci juri. Wajahnya tertutup kamera." },
    { n:7, t:"Aturan berpakaian lomba", d:"Juri wajib memakai pantofel hitam. Peserta wajib memakai sepatu kanvas hitam. Di CCTV, sepatu orang itu tampak pantofel." },
    { n:8, t:"Formulir alergi juri", d:"Kolom alergi Chef Bambang kosong, tetapi formulirnya ditandatangani pada tanggal lomba." },
    { n:9, t:"Rak peserta nomor 7", d:"Bumbu merek sama tercatat di rak peserta nomor 7 sejak babak penyisihan." },
    { n:10, t:"Catatan panitia pukul 18.50 dan 19.40", d:"Bumbu di rak peserta nomor 7 masih penuh pukul 18.50 dan sudah berkurang pukul 19.40." },
    { n:11, t:"Catatan tenda medis", d:"Chef Bambang datang pukul 19.35 dan hanya meminta obat maag. Tidak ada catatan alergi." },
    { n:12, t:"Laporan forensik", d:"Reaksi alergi berat dari bahan yang tidak tercantum di resep. Tidak ada tanda kekerasan." }
  ],
  keys:[2,5,6,7],
  timeline:[
    ["18.50","Bumbu di rak peserta nomor 7 masih penuh."],
    ["19.00","Juri mulai mencicipi sup peserta."],
    ["19.20","Seseorang berjas nomor 7 menuangkan cairan ke panci juri."],
    ["19.35","Chef Bambang datang ke tenda medis."],
    ["19.40","Bumbu di rak peserta nomor 7 sudah berkurang."],
    ["19.50","Chef Bambang dinyatakan meninggal di rumah sakit."]
  ],
  motives:[["taruhan","Memainkan hasil lomba demi taruhan besar"],["juara","Ingin memenangkan lomba"],["dendam","Dendam karena dipermalukan di kompetisi lama"],["resep","Mencuri resep kaldu juri"]],
  methods:[["alergen","Bahan pemicu alergi dituangkan ke panci juri"],["racun","Racun dicampur ke bumbu garam"],["panas","Sup dibiarkan terlalu panas"],["jatuh","Juri jatuh di tangga panggung"]],
  solution:{culprit:"nando", motive:"taruhan", method:"alergen"},
  reveal:{
    culprit:"Nando Hartawan, juri pendamping. Ia memasang taruhan besar pada hasil lomba. Chef Bambang adalah satu-satunya juri yang menolak mengikuti arahannya, jadi Nando menyingkirkannya dari area juri.",
    how:"Sekitar pukul 19.20 Nando memakai jas nomor 7 yang dipinjamnya dari Rafi dan menuangkan bahan pemicu alergi dari botol kecil ke panci juri. Ia lalu mengembalikan jas itu sebelum juri makan.",
    keys:"Sendok cicip Chef Bambang disembunyikan di kotak panitia (2). Kuitansi taruhan atas nama \"N.H.\" (5). Orang yang menuangkan cairan berjas nomor 7 tetapi memakai pantofel juri (6, 7). Formulir alergi yang tidak diisi (8) membuat Bambang tidak terlindungi.",
    decoys:"Rafi meminjamkan jasnya dan bumbunya memang ada di rak (3, 9, 10). Lilis memasak kaldu resmi tanpa bumbu kemasan (4). Maria hanya mencatat bahan yang keluar (10). Yanto tidak tahu soal alergi (11). Fajar hanya membuang sampah dan melihat juri berdiri di meja (1)."
  }
},
{
  id:"pabrik2", title:"Gudang Pabrik Majalaya", level:"Sulit", steps:6,
  lead:"Haryo Pranoto (45), manajer produksi pabrik tekstil di Majalaya, ditemukan tewas di gudang kain yang terbakar pada Jumat dini hari. Api berawal dari panel listrik gudang.",
  suspects:[
    { id:"ujang", name:"Ujang Suherman", age:50, role:"Kepala gudang",
      desc:"Mengelola stok kain dan kunci gudang. Sering berselisih dengan Haryo soal stok yang hilang.",
      qs:[
        { q:"Kapan Anda terakhir ke gudang?", a:"Pukul 20.00 untuk mengecek stok. Kunci saya kembalikan ke pos keamanan sebelum pulang." },
        { q:"Apa hubungan Anda dengan Haryo?", a:"Dia menekan saya soal stok. Saya tidak takut padanya, tapi saya juga tidak tahu kenapa stok berkurang." } ] },
    { id:"nina", name:"Nina Rosdiana", age:34, role:"Bagian keuangan",
      desc:"Menyusun laporan stok dan penjualan. Pernah menemukan selisih nilai kain yang janggal.",
      qs:[
        { q:"Apa yang Anda temukan di laporan stok?", a:"Selisih nilai sekitar 500 juta. Formulir kain rusaknya ditandatangani pimpinan keamanan, bukan pimpinan gudang." },
        { q:"Kapan Anda meninggalkan kantor?", a:"Pukul 19.00. Saya tidak masuk area gudang." } ] },
    { id:"deni", name:"Deni Kusnadi", age:31, role:"Teknisi listrik",
      desc:"Dulu merawat panel listrik pabrik. Baru dimutasi ke bagian lain dua minggu lalu.",
      qs:[
        { q:"Kapan terakhir Anda memeriksa panel gudang?", a:"Dua minggu lalu, dan kondisinya baik. Setelah itu kunci ruang panel saya serahkan ke pos keamanan." },
        { q:"Apakah Anda masih punya akses?", a:"Tidak. Tapi saya dengar ruang panel sempat dibuka malam itu sebelum lampu mati." } ] },
    { id:"rika", name:"Rika Melati", age:26, role:"Operator mesin tenun",
      desc:"Bekerja shift malam di jalur tenun yang bersebelahan dengan gudang.",
      qs:[
        { q:"Apa yang Anda lihat di jalur tenun?", a:"Lampu gudang mati sekitar pukul 23.00, lalu menyala lagi beberapa menit kemudian." },
        { q:"Apakah Anda melihat kendaraan di gerbang belakang?", a:"Ada mobil keluar sebentar dari gerbang belakang. Saya kira itu patroli." } ] },
    { id:"agus", name:"Agus Setiadi", age:48, role:"Kepala keamanan pabrik",
      desc:"Mengatur patroli malam dan memegang kunci utama pabrik bersama pos keamanan.",
      qs:[
        { q:"Kapan Anda patroli ke gudang?", a:"Pukul 22.00 dan pukul 00.30. Pintu gudang terkunci waktu saya lewat." },
        { q:"Apakah Anda membuka ruang panel malam itu?", a:"Tidak. Ruang panel hanya dibuka teknisi kalau ada keluhan." } ] },
    { id:"surti", name:"Surti Lestari", age:45, role:"Pengawas mutu",
      desc:"Memeriksa kualitas kain sebelum dikirim. Sering bertentangan dengan manajer produksi.",
      qs:[
        { q:"Apa yang dibahas dengan Pak Haryo malam itu?", a:"Soal kain cacat yang dikirim ke pelanggan. Dia menyuruh saya diam." },
        { q:"Apakah Anda ke gudang malam itu?", a:"Tidak. Saya pulang pukul 18.00." } ] }
  ],
  evidence:[
    { n:1, t:"Titik api awal", d:"Titik api pertama ditemukan di panel listrik gudang. Kabel panel disambung dengan kabel yang tidak standar." },
    { n:2, t:"Log kunci utama", d:"Kunci utama digunakan dua kali malam itu, pukul 22.58 dan 23.10. Pencatatnya hanya tertulis \"Pos\"." },
    { n:3, t:"Log ruang panel listrik", d:"Pintu ruang panel dibuka pukul 22.55 dengan kunci pos keamanan." },
    { n:4, t:"Rekap stok", d:"Selisih kain 500 juta, tercatat sebagai kain rusak. Formulir itu ditandatangani \"S.\" dari pos keamanan." },
    { n:5, t:"Pesan Haryo ke Ujang", d:"\"Kalau laporan selisih itu sampai ke pemilik, kamu yang saya salahkan.\"" },
    { n:6, t:"Log kunci gudang Ujang", d:"Kunci gudang dikembalikan Ujang ke pos pukul 20.05." },
    { n:7, t:"Rekaman lampu gudang", d:"Lampu gudang mati pukul 23.00 dan menyala lagi pukul 23.05 dengan panel cadangan." },
    { n:8, t:"Catatan servis panel", d:"Panel diperiksa dua minggu lalu. Ada tulisan tangan \"kabel cadangan\" di sudut catatan, tanpa nama." },
    { n:9, t:"Log gerbang belakang", d:"Mobil dengan stiker pos keamanan keluar pukul 22.40 dan masuk lagi pukul 23.15." },
    { n:10, t:"Kamera gerbang depan", d:"Motor Ujang keluar pukul 20.05. Tidak ada kendaraan lain sampai pagi." },
    { n:11, t:"Catatan mesin tenun", d:"Mesin tenun berhenti pukul 23.00 karena listrik mati. Dicatat oleh Rika." },
    { n:12, t:"Laporan forensik", d:"Haryo meninggal karena menghirup asap, sekitar pukul 23.20. Tidak ada tanda kekerasan." }
  ],
  keys:[1,3,4,9],
  timeline:[
    ["20.05","Ujang mengembalikan kunci gudang ke pos dan pulang."],
    ["22.00","Agus melakukan patroli pertama."],
    ["22.40","Mobil pos keamanan keluar lewat gerbang belakang."],
    ["22.55","Ruang panel listrik dibuka dengan kunci pos."],
    ["22.58","Kunci utama digunakan pertama kali."],
    ["23.00","Lampu gudang mati."],
    ["23.05","Lampu gudang menyala dengan panel cadangan."],
    ["23.10","Kunci utama digunakan kedua kali."],
    ["23.15","Mobil pos keamanan kembali."],
    ["23.20","Haryo meninggal karena asap."],
    ["00.30","Agus patroli kedua dan melaporkan gudang masih terkunci."]
  ],
  motives:[["selisih","Menutupi selisih stok kain 500 juta"],["cacat","Menutupi kain cacat yang dikirim"],["mutasi","Konflik mutasi jabatan"],["dendam","Dendam pribadi"]],
  methods:[["listrik","Kebakaran dari panel listrik yang disabotase"],["gas","Ledakan gas dari gudang"],["rokok","Puntung rokok di tumpukan kain"],["alami","Korsleting alami tanpa campur tangan"]],
  solution:{culprit:"agus", motive:"selisih", method:"listrik"},
  reveal:{
    culprit:"Agus Setiadi, kepala keamanan. Ia menerima bagian dari kain yang hilang dan menandatangani formulir kain rusak agar selisihnya tertutup. Haryo mengetahuinya dan berencana melapor ke pemilik.",
    how:"Pukul 22.40 Agus keluar dengan mobil pos lewat gerbang belakang untuk mengambil bahan dari pemasok. Sekembalinya ia membuka ruang panel pukul 22.55, menyambung kabel panel dengan kabel tidak standar, dan membuka gudang dengan kunci utama. Ia mematikan listrik, menyalakan panel cadangan, lalu menunggu Haryo di dalam gudang.",
    keys:"Titik api berasal dari panel yang disambung tidak standar (1). Ruang panel dibuka dengan kunci pos keamanan (3). Formulir kain rusak ditandatangani \"S.\" dari pos keamanan (4). Mobil pos keluar dan masuk lewat gerbang belakang di saat patroli Agus seharusnya tidak mencatat apa pun (9).",
    decoys:"Ujang memang berselisih dengan Haryo dan pulang sebelum kejadian (6, 10). Deni tidak punya kunci ruang panel lagi (8). Rika hanya melihat mobil sekilas (11). Nina tidak masuk gudang (4). Surti pulang sore hari dan tidak punya akses (5)."
  }
},
{
  id:"hotel2", title:"Kamar 303 Hotel Pegunungan", level:"Sulit", steps:6,
  lead:"Ibu Sartika Wirjono (70), tamu lama Hotel Pegunungan di Lembang, ditemukan tak sadarkan diri di kamar 303 yang terkunci dari dalam. Dokumen dana renovasi keluarganya hilang dari brankas.",
  suspects:[
    { id:"ayu", name:"Ayu Permatasari", age:26, role:"Resepsionis malam",
      desc:"Memegang kunci master dan mengurus check-in malam. Terlihat gugup setiap ditanya soal kunci.",
      qs:[
        { q:"Apakah Anda masuk ke kamar 303 malam itu?", a:"Tidak. Saya memang membuka kunci master untuk tamu lantai 3, tapi itu sebelum pukul 22.00." },
        { q:"Siapa yang memberi izin perbaikan pemanas?", a:"Pak Tono. Saya hanya meneruskannya ke Gilang lewat sistem resepsionis." } ] },
    { id:"bayu", name:"Bayu Wirawan", age:33, role:"Keponakan tamu",
      desc:"Menginap di lantai bawah. Berselisih dengan tantenya soal pembagian rumah keluarga.",
      qs:[
        { q:"Apa yang Anda lakukan malam itu?", a:"Makan malam di restoran lalu kembali ke kamar sekitar pukul 21.30." },
        { q:"Apa yang sebenarnya Anda perselisihkan dengan tante?", a:"Pembagian rumah, bukan dana apa pun. Tapi dia memang sempat menyebut soal dokumen renovasi." } ] },
    { id:"laras", name:"Laras Dewanti", age:45, role:"Kepala housekeeping",
      desc:"Membersihkan lantai 3 setiap sore. Mengurus persediaan kamar dan kunci ruang tugas.",
      qs:[
        { q:"Kapan Anda terakhir membersihkan kamar 303?", a:"Sore, sekitar pukul 16.00. Kamar itu bersih waktu saya tinggalkan." },
        { q:"Apakah Anda punya kunci master?", a:"Tidak. Saya hanya punya kunci ruang tugas. Ruang teknik hanya untuk manajer dan teknisi." } ] },
    { id:"gilang", name:"Gilang Ramadhan", age:38, role:"Teknisi AC hotel",
      desc:"Memperbaiki pemanas kamar 303 pagi itu. Pernah dikeluhkan tamu karena kamar terlalu panas.",
      qs:[
        { q:"Kapan Anda memperbaiki pemanas kamar 303?", a:"Pagi, dan sudah berfungsi normal ketika saya pergi." },
        { q:"Siapa yang menyetujui perbaikan itu?", a:"Pak Tono. Saya lihat sendiri notifikasi persetujuannya di sistem internal." } ] },
    { id:"sri", name:"Sri Hartati", age:58, role:"Tamu kamar 304",
      desc:"Menginap di kamar sebelah. Sering mendengar suara dari kamar 303.",
      qs:[
        { q:"Apa yang Anda dengar malam itu?", a:"Suara pintu dan langkah berat di lorong sekitar pukul 22.10." },
        { q:"Apakah Anda mencium sesuatu?", a:"Ada bau aneh sebelum tengah malam. Saya kira bau pembersih lantai." } ] },
    { id:"tono", name:"Tono Raharjo", age:41, role:"Manajer operasional hotel",
      desc:"Menyetujui perbaikan dan memegang kunci ruang teknik. Sedang diselidiki soal dana renovasi hotel.",
      qs:[
        { q:"Di mana Anda malam itu?", a:"Di Bandung, rapat sampai pukul 20.00, lalu pulang ke rumah." },
        { q:"Apakah Anda pernah masuk ke area hotel minggu ini?", a:"Tidak. Saya tidak pernah ke lantai 3 minggu ini." } ] }
  ],
  evidence:[
    { n:1, t:"Persetujuan perbaikan pemanas", d:"Persetujuan dikirim lewat sistem internal pukul 20.40 dari akun manajer operasional, bukan dari resepsionis." },
    { n:2, t:"Buku kunci resepsionis", d:"Kunci master dicatat keluar pukul 21.45 dan kembali pukul 22.10 atas nama resepsionis malam." },
    { n:3, t:"Log kunci master", d:"Kunci master digunakan membuka kamar 303 pukul 22.12 dan menutupnya kembali pukul 22.15." },
    { n:4, t:"Katup ventilasi lantai 3", d:"Katup ventilasi lantai 3 ditutup manual pukul 22.00 dari ruang teknik. Ruang teknik dibuka dengan kunci manajer operasional." },
    { n:5, t:"CCTV lift", d:"Pukul 22.05 seseorang berseragam hotel dan memakai masker naik ke lantai 3, lalu turun pukul 22.20." },
    { n:6, t:"Catatan telepon Sartika", d:"Pukul 21.00 Sartika menelepon keluarganya: \"Saya sudah minta Tono menjelaskan soal dana renovasi.\"" },
    { n:7, t:"Laporan dana renovasi", d:"Dana perbaikan hotel dicairkan Rp 1,2 miliar, tetapi perbaikan yang tercatat hanya sebagian kecil dari jumlah itu." },
    { n:8, t:"Catatan servis Gilang", d:"Pemanas bekerja normal setelah perbaikan. Tidak ada perubahan pada ventilasi kamar." },
    { n:9, t:"Log parkir hotel", d:"Mobil manajer operasional masuk lewat pintu servis pukul 21.20 dan keluar pukul 22.35." },
    { n:10, t:"Daftar tamu lantai 3", d:"Kamar 303 dihuni Sartika. Kamar 304 dihuni Sri. Tidak ada tamu lain di lantai 3." },
    { n:11, t:"Gambar denah hotel", d:"Ruang teknik lantai 3 berada tepat di sebelah kamar 303, dan memiliki akses ke saluran ventilasi." },
    { n:12, t:"Laporan forensik", d:"Sartika mengalami keracunan gas karbon monoksida. Tidak ada tanda kekerasan." }
  ],
  keys:[1,4,8,9],
  timeline:[
    ["20.00","Tono mengaku selesai rapat di Bandung."],
    ["20.40","Persetujuan perbaikan pemanas dikirim dari akun manajer operasional."],
    ["21.00","Sartika menelepon keluarganya soal dana renovasi."],
    ["21.20","Mobil manajer operasional masuk lewat pintu servis."],
    ["21.45","Kunci master dicatat keluar."],
    ["22.00","Katup ventilasi lantai 3 ditutup dari ruang teknik."],
    ["22.05","Seseorang berseragam hotel naik ke lantai 3."],
    ["22.12","Kunci master membuka kamar 303."],
    ["22.20","Orang berseragam turun dari lantai 3."],
    ["22.35","Mobil manajer operasional keluar lewat pintu servis."],
    ["23.30","Sartika ditemukan tak sadarkan diri."]
  ],
  motives:[["dana","Menutupi penyelewengan dana renovasi hotel"],["perhiasan","Mencuri perhiasan dan menutupi utang"],["warisan","Perebutan warisan keluarga"],["pribadi","Dendam pribadi"]],
  methods:[["gas","Gas karbon monoksida dari pemanas yang ventilasinya ditutup"],["kunci","Korban dikunci di kamar mandi"],["jatuh","Terjatuh di tangga hotel"],["alami","Serangan jantung alami"]],
  solution:{culprit:"tono", motive:"dana", method:"gas"},
  reveal:{
    culprit:"Tono Raharjo, manajer operasional. Ia menyelewengkan dana renovasi hotel dan tahu Sartika akan membuka skandal itu ke pemilik.",
    how:"Tono menyetujui perbaikan pemanas lewat akunnya pukul 20.40 agar ada alasan teknisi masuk kamar. Ia kembali ke hotel lewat pintu servis pukul 21.20, menutup katup ventilasi lantai 3 dari ruang teknik pukul 22.00, lalu mengenakan seragam hotel dan naik ke lantai 3. Ia membuka kamar 303 dengan kunci master yang diambil resepsionis, dan keluar setelah gas memenuhi kamar.",
    keys:"Persetujuan perbaikan dikirim dari akunnya, bukan dari resepsionis (1). Ruang teknik di sebelah kamar 303 memiliki akses ke ventilasi, dan kuncinya hanya dipegang manajer (4, 11). Dana renovasi yang tidak sesuai (7) dan telepon Sartika (6) memberi motif. Mobil manajer masuk lewat pintu servis saat ia mengaku di Bandung (9).",
    decoys:"Ayu memegang kunci master dan membukanya pukul 22.12 (2, 3). Ia hanya meneruskan persetujuan, bukan membuatnya. Bayu tidak naik ke lantai 3 (10). Laras tidak punya kunci master (4). Gilang tidak mengubah ventilasi (8). Sri hanya mendengar langkah dan bau (5)."
  }
},
{
  id:"klinik2", title:"Klinik Malam Anggrek", level:"Sangat sulit", steps:5,
  lead:"Dr. Hendro Sulistyo (49), dokter jaga Klinik Malam Anggrek di Semarang, ditemukan tak sadarkan diri di ruang tindakan pada Minggu dini hari. Dua kantong infus di ruang itu sudah diganti sejak malam.",
  suspects:[
    { id:"tika", name:"Tika Rahmawati", age:29, role:"Perawat jaga malam",
      desc:"Pernah ditegur keras karena salah memberi dosis. Sering terlihat mondar-mandir di lorong ruang tindakan.",
      qs:[
        { q:"Apa yang Anda kerjakan sebelum dokter pingsan?", a:"Mengganti infus pasien dan mencatat di kartu dengan pena hitam seperti biasa." },
        { q:"Siapa yang mengatur dosis obat jantung di klinik?", a:"Ruli. Dia yang menyiapkan dan memesan semua dosis." } ] },
    { id:"ruli", name:"Ruli Prasetya", age:35, role:"Apoteker klinik",
      desc:"Menyiapkan obat dan menyimpan persediaan di lemari terkunci. Pernah ada selisih satu botol obat.",
      qs:[
        { q:"Di mana Anda sekitar pukul 00.30?", a:"Di apotek 24 jam di seberang klinik, mengambil obat yang kurang. Saya kembali sekitar pukul 01.05." },
        { q:"Siapa yang tahu soal kunci cadangan lemari obat?", a:"Semua orang di klinik tahu kuncinya ada di laci resepsionis." } ] },
    { id:"nurul", name:"Nurul Hidayah", age:42, role:"Kepala administrasi klinik",
      desc:"Mengurus keuangan dan jadwal dokter. Dokter Hendro sempat mengusulkan pemecatannya.",
      qs:[
        { q:"Apa hubungan Anda dengan Dokter Hendro?", a:"Dia mau memecat saya, saya dengar dari rapat. Tapi saya tidak pernah menerima surat resminya." },
        { q:"Apakah Anda di klinik malam itu?", a:"Tidak. Saya pulang pukul 20.00. Saya juga tidak pernah memegang kunci lemari obat." } ] },
    { id:"yusuf", name:"Yusuf Maulana", age:31, role:"Pasien yang sedang diinfus",
      desc:"Dirawat karena demam tinggi. Kamarnya bersebelahan dengan ruang tindakan.",
      qs:[
        { q:"Apa yang Anda rasakan malam itu?", a:"Mengantuk setelah infus diganti, lalu tertidur." },
        { q:"Siapa yang biasanya memasang infus Anda?", a:"Tika. Tapi malam itu saya melihat Ruli keluar dari ruang tindakan sebelum Tika datang." } ] },
    { id:"wulan", name:"Wulan Sari", age:37, role:"Pengantar pasien",
      desc:"Menunggu di ruang tunggu sambil menjaga anaknya yang sedang dirawat.",
      qs:[
        { q:"Apakah Anda masuk ke ruang tindakan?", a:"Tidak. Saya menunggu di kursi depan sampai pagi." },
        { q:"Apa yang Anda lihat sekitar pukul 23.00?", a:"Dokter tertawa dengan Tika di meja jaga." } ] },
    { id:"ahmad", name:"Ahmad Fauzi", age:55, role:"Satpam klinik",
      desc:"Berjaga di pintu depan. Mencatat semua pengantar dan tim apotek yang lewat.",
      qs:[
        { q:"Siapa yang keluar masuk lewat pintu samping?", a:"Pengantar pasien dan tim apotek 24 jam. Pintu samping hanya dikunci dari dalam." },
        { q:"Apakah pintu belakang terkunci?", a:"Terkunci. Hanya perawat dan apoteker yang punya kuncinya." } ] }
  ],
  evidence:[
    { n:1, t:"Kantong infus", d:"Kantong infus yang diperiksa dokter mengandung obat jantung dosis tinggi." },
    { n:2, t:"Log lemari obat", d:"Lemari obat dibuka pukul 00.40 dengan kunci cadangan. Kunci cadangan diambil dari laci resepsionis pukul 00.35, dicatat tanpa nama." },
    { n:3, t:"Botol obat kosong", d:"Botol berlabel dosis tinggi di keranjang sampah ruang tindakan. Tidak ada sidik jari, hanya bekas sarung tangan." },
    { n:4, t:"Tulisan dosis di kartu pasien", d:"Dosis di kartu ditulis dengan pena biru. Tika selalu memakai pena hitam, apoteker Ruli selalu memakai pena biru." },
    { n:5, t:"Pesan Tika ke rekan", d:"\"Dokter tadi tanya soal dosis itu lagi. Kalau dia tahu, saya habis.\"" },
    { n:6, t:"CCTV lorong pukul 00.55", d:"Tika keluar dari ruang tindakan membawa nampan berisi peralatan infus. Tidak ada obat di nampan." },
    { n:7, t:"Surat pemecatan Nurul", d:"Surat itu hanya berupa draf. Tidak pernah ditandatangani maupun dikirim." },
    { n:8, t:"Buku jaga satpam", d:"Apoteker keluar lewat pintu samping pukul 00.30 dan kembali pukul 01.05. Tidak ada tamu lain setelah pukul 22.00." },
    { n:9, t:"Kamera apotek 24 jam", d:"Toko apotek di seberang klinik tutup sejak pukul 23.50 karena renovasi. Tidak ada transaksi malam itu." },
    { n:10, t:"Kamera halaman samping", d:"Motor milik apoteker parkir di halaman samping pukul 00.25 dan tidak bergerak sampai pukul 01.05." },
    { n:11, t:"Rekam medis Yusuf", d:"Dosis pertama sesuai resep dokter. Dosis kedua ditulis di kartu tanpa paraf dokter." },
    { n:12, t:"Laporan forensik", d:"Keracunan obat jantung memburuk dalam dua jam. Kematian diperkirakan pukul 02.00." }
  ],
  keys:[2,4,9,10],
  timeline:[
    ["21.00","Nurul meninggalkan klinik."],
    ["23.00","Dokter Hendro bercanda dengan Tika di meja jaga."],
    ["23.50","Apotek 24 jam di seberang klinik tutup untuk renovasi."],
    ["00.25","Motor apoteker parkir di halaman samping."],
    ["00.30","Apoteker keluar lewat pintu samping, menurut buku jaga."],
    ["00.35","Kunci cadangan diambil dari laci resepsionis."],
    ["00.40","Lemari obat dibuka dengan kunci cadangan."],
    ["00.55","Tika keluar dari ruang tindakan dengan nampan."],
    ["01.05","Apoteker kembali, menurut buku jaga."],
    ["01.10","Kantong infus diganti di ruang tindakan."],
    ["02.00","Dr. Hendro ditemukan tak sadarkan diri."]
  ],
  motives:[["obat","Menutupi penjualan obat jantung ke luar klinik"],["pemecatan","Menghindari pemecatan"],["dendam","Dendam pribadi pada dokter"],["uang","Uang tunjangan jaga"]],
  methods:[["infus","Obat jantung dosis tinggi dimasukkan ke kantong infus"],["lemari","Obat kadaluarsa diberikan kepada dokter"],["alergi","Reaksi alergi pada obat umum"],["alami","Serangan jantung alami"]],
  solution:{culprit:"ruli", motive:"obat", method:"infus"},
  reveal:{
    culprit:"Ruli Prasetya, apoteker klinik. Ia diam-diam menjual obat jantung dari persediaan klinik. Dokter Hendro menemukan selisihnya dan sudah berencana melapor ke dinas kesehatan.",
    how:"Sekitar pukul 00.25 Ruli memarkir motornya di halaman samping dan masuk lewat pintu samping. Ia mengambil kunci cadangan dari laci resepsionis, membuka lemari obat pukul 00.40, lalu memasukkan obat jantung dosis tinggi ke kantong infus yang kemudian diperiksa dokter. Ia menuliskan dosis di kartu pasien dengan pena biru untuk menyalahkan Tika, lalu keluar lewat pintu samping dan berpura-pura berada di apotek.",
    keys:"Kunci cadangan diambil dari laci resepsionis pada waktu yang dekat dengan pembukaan lemari (2). Tulisan dosis di kartu memakai pena biru milik apoteker (4). Apotek tutup sejak pukul 23.50, jadi alibi Ruli tidak mungkin benar (9). Motor apoteker tetap di halaman samping sepanjang alibinya (10).",
    decoys:"Tika memang ditegur dan sering di lorong, dan ia keluar membawa nampan tanpa obat (6). Pesan Tika terdengar seperti ketakutan, bukan pengakuan (5). Nurul tidak pernah menerima surat pemecatan (7). Yusuf hanya melihat Ruli sekilas (11). Wulan dan Ahmad tidak masuk ke ruang tindakan (8)."
  }
}
];
