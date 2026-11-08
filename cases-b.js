window.CASES_B = [
{
  id:"arsip", title:"Arsip Tua Fakultas",
  lead:"Profesor Arif Rahardjo (63) ditemukan tak bernapas di ruang arsip lantai dasar fakultas pada Senin pagi. Pintu arsip terkunci dari dalam, dan lampu ruangan masih menyala.",
  suspects:[
    { id:"dina", name:"Dina Kurniasih", age:32, role:"Asisten peneliti",
      desc:"Bekerja di proyek riset sang profesor. Bertengkar dengannya soal data yang belum selesai.",
      qs:[
        { q:"Kapan Anda terakhir ke arsip?", a:"Sore kemarin, mengambil berkas proyek. Saya langsung pulang setelahnya.", f:"Petunjuk: cek log kartu arsip (Bukti 3)" },
        { q:"Apa yang Anda tahu soal data riset?", a:"Profesor minta saya menyesuaikan tabel untuk jurnal. Saya menolak karena angkanya tidak cocok.", f:"Petunjuk: cek versi naskah (Bukti 5)" } ] },
    { id:"tomi", name:"Tomi Hadiwijaya", age:45, role:"Kepala pustakawan",
      desc:"Mengelola kunci dan jadwal arsip. Pernah dimarahi profesor karena dokumen yang hilang.",
      qs:[
        { q:"Siapa yang punya kunci arsip?", a:"Saya dan Profesor. Kunci cadangan ada di lemari kantor saya.", f:"Petunjuk: cek kunci cadangan (Bukti 2)" },
        { q:"Apakah Anda ke arsip Senin pagi?", a:"Tidak. Saya datang pukul 08.00 dan langsung ke ruang rapat." } ] },
    { id:"rosa", name:"Rosa Siregar", age:55, role:"Dosen senior",
      desc:"Pesaing profesor dalam pengajuan dana riset. Sering berdebat di rapat fakultas.",
      qs:[
        { q:"Apa yang Anda lakukan Minggu malam?", a:"Di rumah bersama keluarga. Anak saya bisa mengonfirmasi." },
        { q:"Apakah Anda masuk ke fakultas akhir pekan ini?", a:"Tidak. Saya tidak ke kampus sejak Jumat.", f:"Petunjuk: cek log gerbang (Bukti 8)" } ] },
    { id:"bagas", name:"Bagas Permana", age:27, role:"Mahasiswa pascasarjana",
      desc:"Mengerjakan tesis dengan data dari proyek sang profesor.",
      qs:[
        { q:"Apa hubungan Anda dengan profesor?", a:"Dia pembimbing saya. Beliau sering memarahi saya soal tesis." },
        { q:"Apakah Anda pernah ke arsip?", a:"Pernah, dua kali minggu ini untuk mengambil bahan. Saya tidak masuk setelah Sabtu.", f:"Petunjuk: cek log kartu arsip (Bukti 3)" } ] },
    { id:"lestari", name:"Ibu Lestari", age:50, role:"Petugas kebersihan fakultas",
      desc:"Membersihkan lorong dan ruang arsip setiap pagi pukul 06.00.",
      qs:[
        { q:"Apakah Anda membersihkan arsip Senin pagi?", a:"Tidak, pintu arsip masih terkunci waktu saya lewat. Saya kira profesor masih di dalam.", f:"Petunjuk: cek jam jaga (Bukti 6)" },
        { q:"Apa yang Anda lihat di lorong malam sebelumnya?", a:"Tidak ada. Saya pulang pukul 17.30." } ] },
    { id:"hadi", name:"Hadi Surbakti", age:42, role:"Teknisi pendingin ruangan",
      desc:"Memperbaiki sistem ventilasi arsip akhir pekan. Kunci teknisi ada padanya.",
      qs:[
        { q:"Apa yang Anda kerjakan di arsip?", a:"Mengganti filter udara dan memeriksa pendingin. Pekerjaan selesai Sabtu sore.", f:"Petunjuk: cek catatan servis (Bukti 7)" },
        { q:"Apakah ventilasi arsip sempat dimatikan?", a:"Ya, untuk perbaikan. Tapi saya menyalakannya lagi sebelum pulang." } ] }
  ],
  evidence:[
    { n:1, t:"Sisa kopi di meja kerja", d:"Cangkir kopi berisi sisa yang mengandung zat penenang dosis tinggi. Sidik jari hanya milik profesor." },
    { n:2, t:"Kunci cadangan arsip", d:"Kunci cadangan terakhir kali tercatat dipinjam Tomi pada Sabtu siang. Kembali ke lemarinya pukul 17.00." },
    { n:3, t:"Log kartu arsip", d:"Kartu Dina tercatat masuk pukul 16.00 Sabtu dan keluar pukul 16.20. Kartu Bagas masuk Jumat sore." },
    { n:4, t:"Pintu arsip", d:"Pintu arsip dikunci dari dalam dengan mekanisme pegas. Tidak ada jejak paksa." },
    { n:5, t:"Dua versi naskah jurnal", d:"Versi di laptop profesor berbeda dengan naskah yang sudah dikirim. Tabel hasil diubah pada Minggu malam." },
    { n:6, t:"Jam jaga petugas", d:"Petugas kebersihan tidak mencatat kunjungan ke arsip sejak Sabtu pukul 17.30." },
    { n:7, t:"Catatan servis ventilasi", d:"Ventilasi arsip dimatikan Sabtu pukul 16.30 dan dinyalakan kembali pukul 18.10 oleh teknisi Hadi." },
    { n:8, t:"Log gerbang fakultas", d:"Kartu gerbang Rosa tidak tercatat masuk sejak Jumat. Gerbang samping tidak punya kamera." },
    { n:9, t:"Pesan Profesor ke rekan", d:"\"Saya akan memperbaiki data itu sendiri malam ini sebelum jurnal masuk.\"" },
    { n:10, t:"Laporan forensik", d:"Kematian terjadi Minggu malam sampai Senin dini hari. Kadar zat penenang dalam darah tinggi." }
  ],
  keys:[1,2,5,9],
  timeline:[
    ["Sabtu 16.00","Dina masuk arsip untuk mengambil berkas."],
    ["Sabtu 16.30","Ventilasi arsip dimatikan untuk perbaikan."],
    ["Sabtu 17.00","Kunci cadangan dikembalikan ke lemari Tomi."],
    ["Minggu malam","Profesor mengubah tabel di laptopnya."],
    ["Senin 06.00","Petugas kebersihan lewat dan melihat pintu arsip terkunci."],
    ["Senin 07.30","Profesor ditemukan di dalam arsip."]
  ],
  motives:[["data","Menutupi manipulasi data riset"],["dana","Berebut dana riset"],["tesis","Konflik soal tesis"],["dendam","Dendam pribadi"]],
  methods:[["obat","Zat penenang dicampur ke kopi lalu dikunci di dalam"],["gas","Keracunan gas dari pendingin"],["jatuh","Jatuh dari rak tinggi"],["alami","Serangan jantung alami"]],
  solution:{culprit:"dina", motive:"data", method:"obat"},
  reveal:{
    culprit:"Dina Kurniasih, asisten peneliti. Ia memalsukan tabel hasil yang dikirim ke jurnal. Profesor menemukan perubahan itu dan berencana memperbaikinya sendiri.",
    how:"Sabtu sore Dina masuk arsip dan mencampurkan zat penenang ke kopi profesor. Ketika profesor tertidur, Dina mengunci pintu dari dalam dengan mekanisme pegas lalu keluar lewat pintu yang sama sebelum terkunci.",
    keys:"Sisa kopi dengan zat penenang (1) dan hanya ada sidik jari profesor di cangkirnya. Versi naskah yang diubah (5) memberi motif. Pesan profesor soal memperbaiki data sendiri (9) memberi tenggat. Kunci cadangan (2) dan log kartu Dina (3) menempatkan dia di arsip Sabtu sore.",
    decoys:"Tomi meminjam kunci tapi sudah mengembalikannya (2). Rosa tidak ke kampus sejak Jumat (8). Bagas masuk Jumat dan tidak setelah Sabtu (3). Ibu Lestari tidak ke arsip dan pulang sore (6). Hadi memperbaiki ventilasi, tapi menyalakannya kembali sebelum pulang (7)."
  }
},
];
