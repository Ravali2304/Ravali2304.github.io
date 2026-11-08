// Latihan pengenalan: tidak masuk 10 kasus, tidak mengubah kepercayaan, skor, atau buka kasus.
window.TRAINING_CASE = {
  id: "latihan",
  training: true,
  title: "Latihan: Kopi di Pos Jaga",
  level: "Latihan",
  steps: 4,
  lead: "Pengenalan dari Pak Sudirman. Latihan ini tidak mengubah kepercayaanmu atau urutan kasus.",
  story: [
    "Sebelum kamu memegang berkas sungguhan, Pak Sudirman ingin kamu terbiasa dulu, {nick}. Ini hanya latihan kecil di satu pos jaga. Tidak ada kepercayaan publik yang dipertaruhkan di sini.",
    "Dengarkan setiap tersangka dan catat jawabannya. Kalau jawaban mereka bertentangan dengan bukti, hadapkan mereka. Jawaban yang berubah sering kali lebih jujur daripada jawaban pertama.",
    "Papan bukti membantu kamu menyusun hubungan itu, dan tab Waktu membantu mengurutkan kejadian. Telepon senior di pojok bawah bisa kamu pakai dua kali untuk petunjuk.",
    "Kalau kamu siap, ajukan dakwaan. Kasus sungguhan akan jauh lebih sulit. Salam, Pak Sudirman."
  ],
  suspects: [
    { id: "dayat", name: "Dayat Kurnia", age: 50, role: "Penjaga pos malam",
      desc: "Yang menemukan jenazah pagi harinya. Sering tertidur di pos.",
      qs: [
        { q: "Apa yang Anda lakukan semalam?", a: "Berjaga di pos, lalu tertidur sebentar setelah pukul 01.00. Kopi di termos saya minum dari awal malam." },
        { q: "Siapa yang mengantar kopi?", a: "Robi, kurir toko sebelah. Dia selalu mampir sekitar pukul 23.00 membawa dua gelas kopi." }
      ] },
    { id: "ratna", name: "Ratna Sari", age: 42, role: "Pemilik warung seberang",
      desc: "Warungnya biasa menyediakan kopi untuk penjaga pos setiap malam.",
      qs: [
        { q: "Apakah Anda ke pos malam itu?", a: "Tidak. Saya tutup warung pukul 22.00 dan langsung pulang." },
        { q: "Siapa yang membuat kopi untuk pos?", a: "Biasanya saya, tapi malam itu saya tidak membuatnya. Robi bilang dia yang membawakannya." }
      ] },
    { id: "robi", name: "Robi Pratama", age: 28, role: "Kurir toko sebelah",
      desc: "Mengantar barang dan kopi ke pos setiap malam. Punya utang ke toko tempatnya bekerja.",
      qs: [
        { q: "Apa yang Anda bawa ke pos malam itu?", a: "Dua gelas kopi dari warung Bu Ratna. Satu untuk Pak Dayat, satu untuk saya." },
        { q: "Kapan Anda meninggalkan pos?", a: "Sekitar pukul 23.10. Pak Dayat masih segar waktu itu." }
      ] }
  ],
  evidence: [
    { n: 1, t: "Gelas kopi di pos", d: "Dua gelas, satu sudah kosong dan satu masih berisi setengah. Sidik jari Pak Dayat ada di keduanya." },
    { n: 2, t: "Bubuk kopi di gelas", d: "Hasil lab menemukan bubuk kopi dengan merek yang tidak dijual di warung Bu Ratna." },
    { n: 3, t: "Buku kas warung", d: "Buku kas warung tidak mencatat penjualan kopi ke pos malam itu." },
    { n: 4, t: "Rekaman kamera gerbang", d: "Motor kurir tercatat masuk gerbang pukul 22.55 dan keluar lagi pukul 23.12." }
  ],
  keys: [2, 3, 4],
  timeline: [
    ["22.55", "Motor kurir masuk gerbang."],
    ["23.00", "Dua gelas kopi diserahkan di pos."],
    ["23.12", "Motor kurir keluar gerbang."],
    ["05.30", "Pak Dayat ditemukan tidak bernapas di pos."]
  ],
  motives: [["utang", "Utang kepada toko"], ["dendam", "Dendam pribadi"], ["uang", "Uang jaga pos"]],
  methods: [["racun", "Racun dalam kopi"], ["jatuh", "Jatuh dari tangga"], ["pukul", "Pukulan di kepala"]],
  solution: { culprit: "robi", motive: "utang", method: "racun" },
  reveal: {
    culprit: "Robi Pratama, kurir yang berutang pada toko tempatnya bekerja.",
    how: "Ia membawa bubuk beracun sendiri lalu mencampurkannya ke kopi Pak Dayat.",
    keys: "Bubuk kopi asing (2), buku kas warung yang tidak mencatat kopi itu (3), dan rekaman gerbang (4).",
    decoys: "Gelas dengan sidik jari Pak Dayat (1) hanya menunjukkan siapa yang minum, bukan siapa yang meracuni."
  }
};
