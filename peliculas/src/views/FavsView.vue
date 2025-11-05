<script setup>
    import { rateShow } from '@/composables/rateShow';
    import MovieList from '@/components/MovieList.vue';

    const { likedShows } = rateShow()
</script>

<template>
    <MovieList
        :peliculas="likedShows"
    ></MovieList>
</template>

<style scoped>

</style>