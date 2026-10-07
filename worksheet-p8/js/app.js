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