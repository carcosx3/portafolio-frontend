<script setup>
  import { ref } from 'vue'
  import { RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'

  const navElements = ref([
    {
      path: '/',
      text: 'Inicio'
    },
    {
      text: 'Proyectos',
      childrens: [
        { path: '/proyecto/1', text: 'Carrito Compra' },
        { path: '/proyecto/2', text: 'Buscador de Peliculas' }
      ]
    },
    {
      path: '/contacto',
      text: 'Contacto'
    }
  ])
</script>

<template>
  <div class="bg-black flex flex-col flex-wrap items-center justify-start gap-2 w-screen h-screen">
    
    <div class="bg-gray-600/20 w-4/5 px-3 py-4 rounded-bl-lg rounded-br-lg">
      <Navbar :navElementArray="navElements" />
    </div>

    <div class="w-4/5 px-2">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped></style>
