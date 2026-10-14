const ALAMAT_API = "./olahraga.json";

export async function ambilDataOlahraga() {
  try {
    const respons = await fetch('./olahraga.json');
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat; 
  }
}