const profil = {
  nama: "Irsyad Faiz Zaki",
  nim: "25523128",
  peran: "Mahasiswa Informatika & Pegiat Olahraga",
  keahlian: ["Lari Pagi", "Renang", "Latihan Beban", "Manajemen Kalori"],
  targetMingguan: 1050,
  alamat: {
    kota: "Sleman",
    provinsi: "D.I. Yogyakarta"
  }
};

const kotaAsal = profil.alamat?.kota ?? "Kota Tidak Diketahui";
const jumlahKeahlian = profil.keahlian?.length ?? 0;

const kalimatPerkenalan = `Nama saya ${profil.nama} (${profil.nim}), seorang ${profil.peran} asal ${kotaAsal} yang menguasai ${jumlahKeahlian} jenis aktivitas olahraga.`;
console.log(kalimatPerkenalan);

function buatPerkenalan({ nama, peran, targetMingguan }) {
  return `${nama} — ${peran} (Target: ${targetMingguan} kcal/minggu)`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log("Ringkasan Profil:", buatPerkenalan(profil));
console.log("Daftar Keahlian Formatted:", formatKeahlian(profil.keahlian));

const daftarProyek = [
  { id: 1, judul: "Lari Pagi Senin", hari: "Senin", durasi: 30, targetKalori: 300, selesai: true },
  { id: 2, judul: "Renang Rabu", hari: "Rabu", durasi: 45, targetKalori: 400, selesai: true },
  { id: 3, judul: "Latihan Beban Jumat", hari: "Jumat", durasi: 60, targetKalori: 350, selesai: false },
  { id: 4, judul: "Cycling Minggu", hari: "Minggu", durasi: 90, targetKalori: 500, selesai: false }
];

console.log("--- DATA SELURUH PROYEK OLAHRAGA ---");
console.table(daftarProyek);

const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true);
console.log("--- PROYEK YANG SUDAH SELESAI (FILTER) ---");
console.table(proyekSelesai);

const proyekSpesifik = daftarProyek.find((proyek) => proyek.judul === "Renang Rabu");
console.log("--- PROYEK SPESIFIK RENANG (FIND) ---", proyekSpesifik);

const ringkasanLatihan = daftarProyek.map((proyek) => {
  return `${proyek.judul}: ${proyek.durasi} menit (${proyek.targetKalori} kcal)`;
});
console.log("--- RINGKASAN LATIHAN (MAP) ---", ringkasanLatihan);