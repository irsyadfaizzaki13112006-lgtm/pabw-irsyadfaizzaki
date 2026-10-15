const ALAMAT_API = "./olahraga.json";

export async function ambilDataOlahraga() {
  try {
    const respons = await fetch(ALAMAT_API);

    if (!respons.ok) {
      throw new Error(`Gagal memuat data dari peladen (status ${respons.status})`);
    }

    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error("Gagal memuat API:", galat.message);
    throw galat;
  }
}