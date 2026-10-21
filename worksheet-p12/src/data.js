export const dataAwalOlahraga = [
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
  }
];

export function formatDurasi(menit) {
  return `${menit} Menit`;
}

export function formatKalori(kalori) {
  return `Target: ${kalori} kcal`;
}