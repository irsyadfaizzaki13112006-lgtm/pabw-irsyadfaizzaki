export function inisialisasiTema() {
  const tombolTema = document.querySelector("#tombol-tema");
  if (!tombolTema) return;

  tombolTema.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    const modeGelap = document.body.classList.contains("gelap");
    tombolTema.textContent = modeGelap ? "☀️ Mode Terang" : "🌙 Pengalih Tema";
  });
}

export function render(daftarData) {
  const wadah = document.querySelector("#daftar");
  if (!wadah) return;

  wadah.textContent = "";

  daftarData.forEach((item) => {
    const kartu = document.createElement("article");
    kartu.classList.add("kartu-olahraga");

    const judul = document.createElement("h3");
    judul.textContent = item.judul;

    const info = document.createElement("p");
    info.classList.add("info-jadwal");
    info.textContent = `${item.hari} · ${item.durasi} Menit`;

    const kalori = document.createElement("p");
    kalori.classList.add("target-kalori");
    kalori.textContent = `Target: ${item.targetKalori} kcal`;

    const status = document.createElement("span");
    status.classList.add("status-selesai", item.selesai ? "selesai" : "belum");
    status.textContent = item.selesai ? "Selesai" : "Belum Selesai";

    kartu.appendChild(judul);
    kartu.appendChild(info);
    kartu.appendChild(kalori);
    kartu.appendChild(status);

    wadah.appendChild(kartu);
  });
}