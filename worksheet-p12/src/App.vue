<script setup>
import { onMounted, watch } from 'vue'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = { 
  nama: 'Irsyad Faiz Zaki', 
  peran: 'Mahasiswa Informatika' 
}

onMounted(() => {
  const isi = muat()
  if (isi) {
    state.kategoriAktif = isi.kategoriAktif
  }
})

watch(
  state, 
  (nilai) => simpan(nilai), 
  { deep: true }
)
function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <KepalaProfil :profil="identitas" />

  <TombolFilter />
  <DaftarProyek />

  <FormKontak />

  <div style="text-align: center; margin: 20px 0;">
    <button @click="aturUlangPilihan" class="btn-reset">Atur Ulang Pilihan</button>
  </div>
</template>