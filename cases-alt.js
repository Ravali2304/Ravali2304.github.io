// Ralat tersangka: jawaban berubah setelah pemain membuka bukti yang bertentangan lalu menghadapkannya (1 langkah).
// q = indeks pertanyaan di suspect.qs, ev = nomor bukti yang bertentangan, a = jawaban yang diralat.
window.ALT_ANSWERS = {
  villa: {
    rini: [{ q: 0, ev: 10, a: "Saya memang sempat bangun pukul 21.20 karena pusing, lalu kembali tidur. Pelayan kamar mengetuk pintu, itu benar." }],
    dimas: [{ q: 1, ev: 5, a: "Bukan hanya dari bank. Saya juga pernah meminjam dari kas proyek Ayah, dan Surya yang menagih kembali." }],
    surya: [{ q: 0, ev: 6, a: "Saya kembali ke ruang kerja sebentar sekitar pukul 21.40 untuk mengambil dokumen yang tertinggal." }],
    maya: [{ q: 1, ev: 8, a: "Mobil dr. Bram sudah tidak ada waktu saya pergi. Tadi saya hanya mengira-ngira jamnya." }],
    bram: [{ q: 0, ev: 4, a: "Digoxin itu memang untuk Hartono. Ia mengeluh sesak napas minggu lalu, dan saya menutupinya karena takut izin praktik saya dicabut." }],
    lastri: [{ q: 1, ev: 3, a: "Strip obat itu sudah ada di sampah sebelum saya buang sampah. Saya diamkan karena kira itu sisa obat tidur Bu Rini." }]
  },
  gema: {
    tania: [{ q: 0, ev: 1, a: "Saya sempat kembali ke booth untuk mengambil botol air saya dan minum dari botol di sana sebelum pulang." }],
    reza: [{ q: 0, ev: 3, a: "Saya memang kembali ke ruang kontrol sekitar pukul 22.50 untuk mengambil laptop yang tertinggal." }],
    nadia: [{ q: 1, ev: 2, a: "Saya pernah login dengan akun teknisi pukul 23.12, karena Reza menyuruh saya mengecek ventilasi booth." }],
    hendra: [{ q: 1, ev: 10, a: "Bayu sempat bertanya apakah saya bisa menjamin kesepakatan kalau ia menyingkirkan satu nama dari label. Saya menolak." }],
    kevin: [{ q: 0, ev: 9, a: "Live stream saya sebenarnya sampai pukul 23.30. Tadi saya bilang hampir tengah malam karena malu baru selesai." }],
    dedi: [{ q: 1, ev: 11, a: "Saya sempat memegang salinan kunci darurat pintu belakang, lalu saya kembalikan ke laci Reza sebelum sesi dimulai." }],
    // Pelaku:
  },
  samudra: {
    rudi: [{ q: 0, ev: 1, a: "Saya turun ke dek belakang sekitar pukul 01.05 untuk bicara dengan Wilson sekali lagi. Saya mematikan GPS karena rute yang kami bicarakan rahasia." }],
    sari: [{ q: 1, ev: 4, a: "Sekali saya pernah melihat peti terbuka di gudang bawah. Saya kira isinya keramik, dan saya tidak berani bilang." }],
    adrian: [{ q: 1, ev: 5, a: "Sebenarnya Wilson yang menghubungi saya lebih dulu soal muatan. Saya tidak mau terlibat, jadi saya menolaknya." }],
    joko: [{ q: 1, ev: 1, a: "Saya pernah masuk ke panel kemudi sebagai teknisi saat mengecek sistem GPS tahun lalu. Saya tidak mengubah apa pun." }],
    lina: [{ q: 0, ev: 11, a: "Saya sebenarnya terbangun sekitar pukul 01.20 karena suara radio. Saya tidak bilang karena takut." }],
    bima: [{ q: 1, ev: 2, a: "Saya memang melihat sesuatu di pagar dek belakang sekitar pukul 00.50, tapi saya kira itu minyak." }]
  },
  mirna: {
    dodi: [{ q: 0, ev: 4, a: "Ada tambahan di resep itu, saya tulis sendiri untuk percobaan kue khusus pelanggan. Bukan untuk Mirna." }],
    sita: [{ q: 0, ev: 3, a: "Sebenarnya saya sempat ke belakang toko membuang pot selai kacang yang saya bawa dari rumah. Itu tidak ada hubungannya dengan kue Mirna." }],
    yudi: [{ q: 0, ev: 2, a: "Dodi memang memesan selai kacang dari saya diam-diam, dua kali, lewat pintu belakang. Dia tidak menolaknya." }],
    rani: [{ q: 0, ev: 7, a: "Saya yang mencampur krim dan memakai alat pengaduk khusus. Dodi menyuruh saya mencucinya setelah itu." }],
    hana: [{ q: 0, ev: 8, a: "Saya sebenarnya mencicipi satu potong dari piring kedua di dekat dapur sebelum pindah ke meja depan." }],
    bejo: [{ q: 0, ev: 6, a: "Saya lewat pintu gudang sekitar pukul 17.05 untuk mengambil kursi tambahan. Saya tidak melihat apa pun di dalam." }]
  },
  apartemen: {
    andre: [{ q: 1, ev: 5, a: "Saya sebenarnya kembali ke gedung pukul 21.30 untuk mengambil barang, tapi Dewi tidak membukakan pintu." }],
    fitri: [{ q: 0, ev: 7, a: "Dewi menunjukkan rekap dana perawatan kepada saya siang itu. Saya tahu ada selisih, tapi saya tidak pernah bilang ke polisi." }],
    yoga: [{ q: 0, ev: 6, a: "Suara itu bukan pot tanaman. Setelah saya lihat pot-potnya masih utuh, saya yakin itu suara lain." }],
    jaja: [{ q: 1, ev: 4, a: "Saya memang naik lift sekitar pukul 21.40, dipanggil pengelola untuk membuka pintu lantai 17." }],
    melisa: [
      { q: 0, ev: 4, a: "Saya memang naik ke lantai 17 sekitar pukul 21.40 untuk mengambil berkas iuran dari unit Dewi. Saya tidak bertemu dia." },
      { q: 1, ev: 7, a: "Transfer itu saya yang setujui. Saya pikir Dewi tidak akan menemukannya." }
    ],
    rina: [{ q: 1, ev: 3, a: "Saya sebenarnya datang ke lantai 17 pukul 21.30 untuk mengambil laptop yang tertinggal. Dewi tidak membukakan pintu." }]
  },
  arsip: {
    dina: [{ q: 1, ev: 5, a: "Saya sudah setuju mengubah tabel itu, dan saya kembali ke arsip Minggu malam untuk melakukannya." }],
    tomi: [{ q: 0, ev: 2, a: "Saya memang meminjam kunci cadangan Sabtu siang dan lupa mencatatnya. Saya tidak pernah masuk arsip setelah itu." }],
    rosa: [{ q: 1, ev: 8, a: "Saya lewat gerbang samping Sabtu sore untuk mengambil dokumen dari mobil, tanpa kartu. Saya tidak masuk gedung." }],
    bagas: [{ q: 1, ev: 3, a: "Saya masuk Sabtu malam sebentar untuk mengambil flashdisk tesis. Kartu saya tidak tercatat keluar karena mesinnya macet." }],
    lestari: [{ q: 0, ev: 4, a: "Pintu arsip kadang tidak terkunci kalau pegasnya macet. Saya bilang terkunci karena tidak mau dianggap lalai." }],
    hadi: [{ q: 0, ev: 7, a: "Pekerjaan memang selesai Sabtu malam, tapi ventilasi sempat mati sampai Minggu pagi karena pompanya rusak." }]
  },
  masak2: {
    nando: [
      { q: 0, ev: 2, a: "Sendok saya bukan dari kotak panitia. Sendok Chef Bambang saya ambil dari meja juri dan saya cuci di belakang." },
      { q: 1, ev: 5, a: "Saya bukan sekadar kenal. Saya menerima taruhan darinya tanggal 18 Oktober, dan saya tidak bisa membiarkan ini terbuka." }
    ],
    rafi: [{ q: 1, ev: 3, a: "Bumbu itu memang saya simpan untuk saus pribadi. Tapi jas itu sudah dipinjam Pak Nando sejak awal." }],
    lilis: [{ q: 0, ev: 4, a: "Saya sempat menambah sedikit bumbu kemasan untuk rasa, sebelum tahu aturannya. Itu di panci saya, bukan panci juri." }],
    maria: [{ q: 0, ev: 10, a: "Ada bumbu yang keluar dari rak peserta nomor 7 sekitar pukul 19.40 tanpa saya catat. Saya tidak melihat siapa." }],
    yanto: [{ q: 0, ev: 8, a: "Formulir itu sebenarnya saya tandatangani pagi tadi, tapi kolomnya kosong karena juri menolak mengisi." }],
    fajar: [{ q: 1, ev: 6, a: "Yang saya lihat di meja juri bukan Nando, tapi orang berjas nomor 7. Saya tidak melihat wajahnya." }]
  },
  pabrik2: {
    agus: [
      { q: 1, ev: 3, a: "Saya membuka ruang panel malam itu sebentar, sekitar pukul 22.55, karena ada laporan lampu berkedip. Saya tidak sempat menutupnya rapat." },
      { q: 0, ev: 9, a: "Saya keluar lewat gerbang belakang dengan mobil pos sekitar pukul 22.40 untuk mengambil kabel cadangan di gudang luar." }
    ],
    ujang: [{ q: 1, ev: 5, a: "Haryo memang bilang saya yang akan disalahkan kalau selisih itu sampai ke pemilik. Saya tidak tahu kenapa stoknya berkurang, tapi saya takut." }],
    nina: [{ q: 1, ev: 4, a: "Saya memang masuk area gudang pukul 18.30 untuk meminta tanda tangan di formulir. Saya tidak lama." }],
    deni: [{ q: 0, ev: 8, a: "Saya yang menulis 'kabel cadangan' di catatan itu. Saya ternyata masih memegang kunci ruang panel." }],
    rika: [{ q: 0, ev: 11, a: "Lampu tidak menyala lagi. Listrik mesin tenun juga mati hampir setengah jam. Tadi saya salah bilang." }],
    surti: [{ q: 1, ev: 9, a: "Saya kembali ke pabrik lewat gerbang belakang sekitar pukul 22.30 untuk bicara dengan Haryo, lalu pulang lewat jalur yang sama." }]
  },
  hotel2: {
    tono: [
      { q: 0, ev: 9, a: "Saya memang kembali ke hotel malam itu. Saya lewat pintu servis dan tidak singgah di lobi." },
      { q: 1, ev: 4, a: "Saya memang naik ke lantai 3 malam itu sebentar untuk memeriksa ruang teknik. Saya tidak memutar katup itu." }
    ],
    ayu: [{ q: 0, ev: 2, a: "Saya membawa kunci master keluar pukul 21.45 atas permintaan Pak Tono, dan saya kembalikan pukul 22.10. Saya tidak tahu untuk apa." }],
    bayu: [{ q: 1, ev: 7, a: "Tante saya juga bicara soal dana renovasi hotel, katanya Tono memegang sebagian uangnya." }],
    laras: [{ q: 1, ev: 4, a: "Saya pernah memegang kunci ruang teknik untuk mengambil persediaan, sekitar pukul 21.00." }],
    gilang: [{ q: 0, ev: 11, a: "Saya melihat ada katup ventilasi di belakang pemanas, tapi itu tidak ada di laporan saya." }],
    sri: [{ q: 1, ev: 8, a: "Saya memang melihat katup ventilasi di kamar saya berbunyi sebelum tengah malam, tapi teknisi bilang tidak ada perubahan." }]
  },
  klinik2: {
    tika: [{ q: 0, ev: 4, a: "Malam itu pena hitam saya habis, jadi saya pakai pena biru. Dosis kedua saya tulis atas perintah Ruli." }],
    ruli: [
      { q: 0, ev: 9, a: "Apotek itu sedang tutup karena renovasi. Saya tidak ke sana, saya hanya duduk di motor di halaman samping." },
      { q: 1, ev: 2, a: "Ya, saya yang mengambil kunci cadangan dari laci itu pukul 00.35. Saya lupa mencatatnya." }
    ],
    nurul: [{ q: 1, ev: 2, a: "Saya pernah mengambil kunci cadangan dari laci resepsionis minggu lalu untuk inventaris, dan belum mengembalikannya." }],
    yusuf: [{ q: 0, ev: 6, a: "Saya memang terbangun sebentar sekitar pukul 00.55 dan melihat Tika keluar dengan nampan, tapi tidak melihat obat." }],
    wulan: [{ q: 0, ev: 10, a: "Sekitar pukul 00.25 saya ke halaman samping untuk merokok, dan saya lihat motor apoteker di sana." }],
    ahmad: [{ q: 1, ev: 8, a: "Pintu belakang sempat tidak terkunci sekitar pukul 00.30, karena apoteker keluar lewat sana. Saya tidak mencatatnya." }]
  }
};
window.ALT_ANSWERS.latihan = {
  robi: [{ q: 0, ev: 2, a: "Kopinya saya buat sendiri di toko, dari bubuk yang saya bawa. Warung Bu Ratna hanya tempat saya membeli gula." }]
};
