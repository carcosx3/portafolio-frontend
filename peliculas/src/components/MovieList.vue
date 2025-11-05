<script setup>
    import MovieCard from './MovieCard.vue'
    const props = defineProps({
        peliculas: Array
    })
</script>

<template>
    <div class="flex flex-wrap flex-col justify-center gap-y-5 pt-3 sm:flex-row">
        <MovieCard
            v-for="show in props.peliculas"
            :key="show.id"
            :pelicula="show"
        />
    </div>
</template>

<style scoped>

</style>