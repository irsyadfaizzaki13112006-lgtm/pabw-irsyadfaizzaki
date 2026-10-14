import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const formLatihan = document.querySelector("#bagian-2 form");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const divIsi = document.createElement("div");
  divIsi.className = "kartu__isi";

  const h3 = document.createElement("h3");
  h3.className = "kartu__judul";
  h3.textContent = proyek.judul;

  const p = document.createElement("p");
  p.textContent = `${proyek.hari} · ${proyek.durasi} Menit`;

  divIsi.append(h3, p);

  const divKaki = document.createElement("div");
  divKaki.className = "kartu__kaki";

  const spanTarget = document.createElement("span");
  spanTarget.textContent = "Target:";

  const strongKalori = document.createElement("strong");
  strongKalori.textContent = `${proyek.targetKalori} kcal`;

  divKaki.append(spanTarget, strongKalori);
  li.append(divIsi, divKaki);

  return li;
}

export function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

if (barisFilter) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    tandaiTombolAktif(tombol);

    const hasilFilter = daftarProyek.filter(
      (proyek) => kategori === "semua" || proyek.judul.toLowerCase().includes(kategori.toLowerCase())
    );

    render(hasilFilter);
  });
}

if (formLatihan) {
  formLatihan.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const inputJenis = document.querySelector("#jenis-olahraga");
    const inputTanggal = document.querySelector("#tanggal-latihan");
    const inputDurasi = document.querySelector("#durasi-latihan");

    let valid = true;

    if (!inputJenis.value.trim()) {
      inputJenis.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      inputJenis.removeAttribute("aria-invalid");
    }

    if (!inputTanggal.value) {
      inputTanggal.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      inputTanggal.removeAttribute("aria-invalid");
    }

    if (!inputDurasi.value || Number(inputDurasi.value) <= 0) {
      inputDurasi.setAttribute("aria-invalid", "true");
      valid = false;
    } else {
      inputDurasi.removeAttribute("aria-invalid");
    }

    if (valid) {
      alert("Sesi latihan berhasil dicatat!");
      formLatihan.reset();
    }
  });
}

render(daftarProyek);