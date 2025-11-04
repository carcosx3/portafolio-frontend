<script setup>
  import { ref } from 'vue'
  import SearchForm from './components/SearchForm.vue'
  import MovieList from './components/MovieList.vue'

  const peliculas = ref([])

  const buscarPeliculas = (datosBusqueda) => {
    const { query, tipo } = datosBusqueda
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjBiNmMxZDJhM2I5ZGFjYzkzNzlhOWQ3MTBhZTk3ZiIsIm5iZiI6MTc2MTE4OTM0MS40ODUsInN1YiI6IjY4Zjk5ZGRkODVhMjc4YzJmZjEyN2YwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kE9rbGGF8w2SQq1vBERLp0EutnfeZUeQmWRUVwArQho'
      }
    };

    fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${query}&language=es-MX&language=en-US&page=1`, options)
      .then( response => response.json() )
      .then( data => {
          peliculas.value = data.results
          // console.log(this.peliculas)
      } )
      .catch( error => console.error(error) )
  }
</script>

<template>
  <div class="flex flex-col min-h-screen w-screen items-center justify-start bg-slate-900">
    <div class="w-5/6">
      <SearchForm @buscar="buscarPeliculas" />
      <MovieList :peliculas="peliculas" class="mt-6"/>
    </div>
  </div>
</template>

<style scoped>

</style>
