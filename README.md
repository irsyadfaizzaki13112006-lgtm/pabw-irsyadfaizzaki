## Pertemuan 3 — Halaman profil saya

Topik halaman saya: Jadwal dan Target Olahraga Saya

- Judul halaman: Jadwal & Target Olahraga
- Deskripsi: Catatan jadwal latihan mingguan dan target kebugaran pribadi.
- Tautan navigasi: Jadwal Olahraga, Catat Latihan, Profil Saya
- Dua bagian utama: Jadwal Latihan Mingguan, Form Catat Latihan
- Kolom tabel: Hari, Jenis Olahraga, Durasi (menit), Target Kalori
- Kolom form: Jenis Olahraga, Tanggal, Durasi (menit)
- Gambar: aktivitas-olahraga.webp

## Catatan penggunaan AI
Halaman ini disusun secara mandiri dengan bantuan AI sebagai pemandu struktur HTML5 semantik dan sintaks validasi form.

## Pertemuan 4 — Design token halaman profil

Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
Warna utama: #1D3A8C (biru), dipilih untuk memberikan kesan profesional, fokus, dan sporty sesuai dengan tema jadwal olahraga.

### Token yang saya tetapkan
| Token | Nilai | Untuk apa |
|---|---|---|
| `--color-primary` | `#1D3A8C` | Tombol, tautan, dan penanda utama |
| `--color-fg` | `#0F172A` | Warna teks utama |
| `--color-bg` | `#F8FAFC` | Latar belakang halaman |
| `--radius-md` | `0.5rem` | Sudut membulat tombol, kartu, dan isian |
| `--space-4` | `1rem` | Jarak standar antar elemen |

Kriteria selesai saya: Mengubah `--color-primary` di satu baris di `tokens.css` harus mengubah warna tombol, tautan, judul, dan garis fokus di seluruh halaman.

## Catatan penggunaan AI
Seluruh berkas CSS dibangun secara mandiri dengan bantuan AI sebagai panduan penyusunan design token dua lapis, flexbox layout, dan pengalih tema gelap berbasis `:has()`.

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Pengaturan tata letak halaman profil ditingkatkan menggunakan perpaduan CSS Grid dan Flexbox.

### Rencana Kerangka Halaman
- **Kerangka Utama (Grid):** `grid-template-rows: auto 1fr auto;` dengan `min-height: 100dvh;`
- **Area Isi (Grid 2 Kolom):** `grid-template-columns: 16rem 1fr;` (sidebar tetap, konten lentur)
- **Navbar (Flexbox):** `display: flex; gap: var(--space-4); align-items: center;`
- **Katalog / Galeri Kartu (Grid Adaptif):** `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));`
- **Isi Kartu / Tombol (Flexbox):** `display: flex; align-items: center; justify-content: space-between;`

### Kapan Flex, Kapan Grid
| Bagian | Pilihan | Alasan |
|---|---|---|
| Kepala Halaman (Header/Navbar) | Flexbox | Menyusun menu dan judul dalam satu baris horizontal secara seimbang |
| Isi Dua Kolom (Main Container) | Grid | Membagi dua area utama (sidebar & konten) dalam 2 dimensi |
| Galeri / Katalog Kartu | Grid | Membentuk grid kartu adaptif tanpa media query menggunakan `auto-fit` |
| Isi di dalam Kartu | Flexbox | Menyusun elemen detail kartu secara 1 dimensi (sebar rata kiri-kanan) |

## Catatan penggunaan AI
Tata letak halaman diperbarui menggunakan Flexbox dan Grid dengan bantuan AI.

## Pertemuan 6 — Responsif Mobile-First

Penerapan pendekatan Mobile-First pada halaman profil dengan berkas `responsif.css`.

### Strategi Responsif
- **Dasar (Mobile < 48rem):** Tampilan 1 kolom penuh untuk semua komponen, tanpa media query.
- **Tablet (≥ 48rem / 768px):** Galeri kartu berubah dari 1 kolom menjadi 2 kolom (`grid-template-columns: repeat(2, 1fr)`).
- **Desktop (≥ 60rem / 960px):** Sidebar bersanding dengan konten (`grid-template-columns: 16rem 1fr`) dan galeri kartu menjadi 3 kolom.

## Catatan penggunaan AI
Pendekatan Mobile-First dan media query `min-width` disusun dengan bantuan AI sesuai instruksi Worksheet P6.

## Pertemuan 8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

Pemindahan isi data halaman profil menjadi variabel, objek, dan array JavaScript secara dinamis.

### Ringkasan Pekerjaan
- **Variabel & Objek:** Menampung data identitas profil (`profil`) serta daftar proyek/target olahraga (`daftarProyek`).
- **Fungsi Murni:** `buatPerkenalan` (menyusun teks perkenalan) dan `formatKeahlian` (merapikan daftar keahlian).
- **Array Methods:** Menggunakan `map`, `filter`, dan `find` untuk mengolah data proyek tanpa mengubah data asli.
- **Modul JS:** Dihubungkan ke `profil.html` menggunakan `<script type="module" src="js/app.js"></script>`.

## Catatan penggunaan AI
Seluruh struktur variabel, fungsi murni, dan pengolahan array ES6+ disusun secara mandiri dengan bimbingan AI sesuai instruksi Worksheet P8.

## Pertemuan 9 — DOM, Event, dan Interaktivitas

Pemasangan data dinamis dari JavaScript ke elemen DOM serta penanganan event interaktif.

### Fitur Interaktif
- **Render Dinamis:** Kartu proyek dibangun dari `daftarProyek` menggunakan `createElement` dan `textContent`.
- **Event Delegation:** Satu listener dipasang pada elemen induk (`#filter`) untuk menangani penyaringan kategori.
- **Validasi Form:** Menangani event `submit` dengan `preventDefault()`, serta memvalidasi input per kolom secara terpisah.

## Catatan penggunaan AI
Manipulasi DOM, event delegation, dan validasi form disusun mandiri dengan bimbingan AI sesuai instruksi Worksheet P9.

## Pertemuan 10 — JavaScript Asinkron: fetch, Promise, dan JSON

Penerapan pengambilan data asinkron dari API/JSON lokal menggunakan `fetch`, `async/await`, serta pengelolaan 4 keadaan antarmuka.

### Ringkasan Fitur
- **Lapisan Data (`js/api.js`):** Mengisolasi pemanggilan `fetch` dan pemeriksaan `respons.ok`.
- **4 Keadaan UI:** Menangani keadaan *Memuat* (Loading), *Berhasil* (Success), *Gagal* (Error), dan *Kosong* (Empty).
- **Pencegahan CORS / Fallback:** Menggunakan berkas JSON lokal `./olahraga.json` sebagai penyedia data publik tanpa kunci akses.

## Catatan penggunaan AI
Arsitektur API modul, async/await, dan penanganan status respons disusun secara mandiri dengan bimbingan AI sesuai instruksi Worksheet P10.

## Pertemuan 11 - Modul, State, dan Penyimpanan Klien

Pemisahan kode JavaScript menjadi 5 modul terpusat, manajemen state berbasis objek, serta penyimpanan state secara persisten menggunakan `localStorage` dengan penanganan galat dan validasi versi.

### Fitur Interaktif
- **Modularisasi Berkas:** Memecah logika aplikasi menjadi 5 modul (`data.js`, `state.js`, `dom.js`, `events.js`, `app.js`) dengan impor ES6 (`type="module"`).
- **State Terpusat:** Seluruh data dan keadaan aktif dikelola dalam satu objek `state` tanpa menyimpan status pada elemen DOM.
- **Penyimpanan Klien:** Menyimpan preferensi pilihan pengguna ke `localStorage` menggunakan `JSON.stringify` dan `JSON.parse` yang dilengkapi nilai bawaan (`default value`).
- **Resiliensi Simpanan:** Menangani data rusak atau perbedaan nomor skema versi menggunakan blok `try/catch` dan nomor versi `v2`.

### Catatan penggunaan AI
Pemecahan arsitektur 5 modul, perancangan skema `localStorage` dengan penanganan simpanan rusak, serta penyesuaian tata letak disusun mandiri dengan bimbingan AI.

### Versi Node.js
- `node -v`: `v24.21.0`
- `npm -v`: `11.19.0`

## Pertemuan 12 – Build Tooling, npm, dan Framework SPA

Migrasi halaman profil modular dari JavaScript vanilla ke framework Vue.js 3 SPA menggunakan Vite, komponen reaktif, dan pengelolaan state terpusat.

### Versi Node.js dan npm
- **Node.js:** v24.21.0
- **npm:** 11.19.0

### Fitur dan Arsitektur
- **Komponen Reaktif:** Halaman dipecah menjadi empat komponen (`KepalaProfil`, `TombolFilter`, `DaftarProyek`, `FormKontak`) dengan `KepalaProfil` menerima data via `props`.
- **State Management:** Menggunakan `reactive()` pada `state.js` tanpa pemanggilan `render()` manual.
- **Sinkronisasi localStorage:** Menggunakan `onMounted` untuk memuat data awal dan `watch` (deep) untuk menyimpan perubahan secara otomatis.
- **Build Produksi:** Diuji menggunakan `npm run build` dan dijalankan dengan `npm run preview`.

### Perbandingan Ukuran Build
- **Sebelum Build (`npm run dev`):** ~200 kB (10–20 berkas terpisah)
- **Sesudah Build (`npm run preview`):** ~60 kB (3–5 berkas ter-bundle & minified)

## Catatan penggunaan AI
Pengembangan struktur komponen Vue 3, konfigurasi reaktivitas state (`reactive`, `watch`, `onMounted`), penyelesaian masalah galat impor modul, serta pengujian build produksi disusun mandiri dengan bimbingan dan asistensi AI.