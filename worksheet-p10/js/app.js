export const profil = {
  nama: "Irsyad Faiz Zaki",
  nim: "25523128",
  kelas: "B",
  topik: "Jadwal dan Target Olahraga Saya",
  kota: "Yogyakarta",
  keahlian: ["Lari / Marathon", "Renang", "Latihan Beban"]
};

export const daftarProyek = [
  {
    id: 1,
    judul: "Lari Pagi 5K",
    kategori: "Lari",
    hari: "Senin",
    durasi: 30,
    targetKalori: 350,
    selesai: true
  },
  {
    id: 2,
    judul: "Renang Gaya Bebas 1000m",
    kategori: "Renang",
    hari: "Rabu",
    durasi: 45,
    targetKalori: 400,
    selesai: true
  },
  {
    id: 3,
    judul: "Latihan Beban Upper Body",
    kategori: "Beban",
    hari: "Jumat",
    durasi: 60,
    targetKalori: 300,
    selesai: false
  },
  {
    id: 4,
    judul: "Lari Interval 10K",
    kategori: "Lari",
    hari: "Sabtu",
    durasi: 60,
    targetKalori: 700,
    selesai: false
  },
  {
    id: 5,
    judul: "Latihan Beban Lower Body",
    kategori: "Beban",
    hari: "Minggu",
    durasi: 50,
    targetKalori: 350,
    selesai: false
  }
];

export function hitungTotalKalori(daftar) {
  return daftar.reduce((total, p) => total + p.targetKalori, 0);
}

export function filterProyekSelesai(daftar) {
  return daftar.filter((p) => p.selesai);
}

export function cariProyekBerdasarkanJudul(daftar, kataKunci) {
  return daftar.find((p) =>
    p.judul.toLowerCase().includes(kataKunci.toLowerCase())
  );
}