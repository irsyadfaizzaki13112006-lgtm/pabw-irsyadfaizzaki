export const KUNCI = 'pabw-p12'
export const VERSI = 1

export function simpan(nilai) {
  try {
    const data = {
      versi: VERSI,
      kategoriAktif: nilai.kategoriAktif
    }
    localStorage.setItem(KUNCI, JSON.stringify(data))
  } catch (err) {
    console.error('Gagal menyimpan ke localStorage:', err)
  }
}
export function muat() {
  try {
    const item = localStorage.getItem(KUNCI)
    if (!item) return null

    const data = JSON.parse(item)
    if (data.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }
    return data
  } catch (err) {
    console.error('Simpanan rusak atau bukan JSON, dibuang:', err)
    localStorage.removeItem(KUNCI)
    return null
  }
}
export function aturUlang() {
  try {
    localStorage.removeItem(KUNCI)
  } catch (err) {
    console.error('Gagal mengatur ulang simpanan:', err)
  }
}