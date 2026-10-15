import { formatDurasi, formatKalori } from "./data.js";

export function saring(state) {
  if (state.kategoriAktif === "Semua") {
    return state.daftarOlahraga;
  }
  return state.daftarOlahraga.filter(
    (item) => item.kategori.toLowerCase() === state.kategoriAktif.toLowerCase()
  );
}

export function render(state) {
  const wadah = document.querySelector("#daftar");
  if (!wadah) return;

  wadah.textContent = "";

  const dataTampil = saring(state);

  if (!dataTampil || dataTampil.length === 0) {
    wadah.textContent = "Belum ada jadwal olahraga untuk kategori ini.";
    return;
  }

  dataTampil.forEach((item) => {
    const kartu = document.createElement("article");
    kartu.classList.add("kartu-olahraga");

    const judul = document.createElement("h3");
    judul.textContent = item.judul;

    const info = document.createElement("p");
    info.classList.add("info-jadwal");
    info.textContent = `${item.hari} · ${formatDurasi(item.durasi)}`;

    const kalori = document.createElement("p");
    kalori.classList.add("target-kalori");
    kalori.textContent = formatKalori(item.targetKalori);

    const status = document.createElement("span");
    status.classList.add("status-selesai", item.selesai ? "selesai" : "belum");
    status.textContent = item.selesai ? "Selesai" : "Belum Selesai";

    kartu.appendChild(judul);
    kartu.appendChild(info);
    kartu.appendChild(kalori);
    kartu.appendChild(status);

    wadah.appendChild(kartu);
  });

  perbaruiTombolFilter(state.kategoriAktif);
}

function perbaruiTombolFilter(kategoriAktif) {
  const tombolList = document.querySelectorAll(".tombol-filter");
  tombolList.forEach((tombol) => {
    if (tombol.dataset.kategori === kategoriAktif) {
      tombol.classList.add("aktif");
    } else {
      tombol.classList.remove("aktif");
    }
  });
}