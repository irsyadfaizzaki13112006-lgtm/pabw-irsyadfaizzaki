import { dataAwalOlahraga } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  kategoriAktif: "Semua",
  daftarOlahraga: [...dataAwalOlahraga]
};

export function simpan(stateSekarang) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateSekarang.kategoriAktif
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "Semua";
  render(state);
}

export function setKategoriAktif(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function setDaftarOlahraga(daftarBaru) {
  state.daftarOlahraga = daftarBaru;
  render(state);
}