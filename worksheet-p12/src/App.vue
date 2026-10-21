<script setup>
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

const identitas = { nama: 'Irsyad Faiz Zaki', peran: 'Mahasiswa Informatika' }
</script>

<template>
  <KepalaProfil :profil="identitas" />
  <TombolFilter />
  <DaftarProyek />
  <FormKontak />
</template>