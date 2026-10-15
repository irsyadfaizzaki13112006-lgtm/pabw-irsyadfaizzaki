import { setKategoriAktif, aturUlang } from "./state.js";

export function pasangPendengar() {
  const tombolFilter = document.querySelectorAll(".tombol-filter");
  tombolFilter.forEach((tombol) => {
    tombol.addEventListener("click", (e) => {
      const kategori = e.target.dataset.kategori;
      if (kategori) {
        setKategoriAktif(kategori);
      }
    });
  });

  const tombolTema = document.querySelector("#tombol-tema");
  if (tombolTema) {
    tombolTema.addEventListener("click", () => {
      document.body.classList.toggle("gelap");
      const modeGelap = document.body.classList.contains("gelap");
      tombolTema.textContent = modeGelap ? "☀️ Mode Terang" : "🌙 Pengalih Tema";
    });
  }

  const tombolReset = document.querySelector("#tombol-reset");
  if (tombolReset) {
    tombolReset.addEventListener("click", () => {
      aturUlang();
    });
  }
}