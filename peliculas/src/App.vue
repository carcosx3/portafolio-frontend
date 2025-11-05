<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue';

  const linksNav = [
    {path: '/', name: 'Home'},
    {path: '/favs', name: 'Favs'},
  ]
</script>

<template>
  <div class="flex flex-col min-h-screen w-screen items-center justify-start bg-linear-to-br from-slate-900 to-purple-900 pb-10">
    <div class="w-5/6">
      <NavBar
        :links="linksNav"
      ></NavBar>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>

</style>
