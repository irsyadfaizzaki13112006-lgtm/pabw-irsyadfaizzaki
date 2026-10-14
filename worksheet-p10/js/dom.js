/**
 * @param {Array} daftarData - Array data jadwal olahraga.
 */
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
    info.textContent = `${item.hari} · ${item.durasi} Menit`;

    const kalori = document.createElement("p");
    kalori.textContent = `Target: ${item.targetKalori} kcal`;

    const status = document.createElement("p");
    status.textContent = `Status: ${item.selesai ? "Selesai" : "Belum Selesai"}`;

    kartu.appendChild(judul);
    kartu.appendChild(info);
    kartu.appendChild(kalori);
    kartu.appendChild(status);

    wadah.appendChild(kartu);
  });
}