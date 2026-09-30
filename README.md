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