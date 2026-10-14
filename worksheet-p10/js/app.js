import { ambilDataOlahraga } from "./api.js";
import { render } from "./dom.js";

const wadah = document.querySelector("#daftar");

async function inisialisasi() {
  if (!wadah) return;

  wadah.textContent = "Memuat data jadwal olahraga...";

  try {
    const dataOlahraga = await ambilDataOlahraga();
    if (!dataOlahraga || dataOlahraga.length === 0) {
      wadah.textContent = "Belum ada jadwal olahraga yang tersedia.";
      return;
    }
    render(dataOlahraga);
  } catch (galat) {
    wadah.textContent = "Gagal memuat data: " + galat.message;
  }
}
inisialisasi();