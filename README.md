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