<script setup>
    import { defineEmits } from 'vue';
    import MovieCard from './MovieCard.vue'

    const emit = defineEmits(['childShow'])
    const props = defineProps({
        peliculas: Array
    })
    const handleEmit = (movieGrandChild) => {
        emit('childShow', movieGrandChild)
    }

    // console.log( props.peliculas )
</script>

<template>
    <div class="flex flex-wrap flex-col justify-center gap-y-5 pt-3 sm:flex-row">
        <MovieCard
            v-for="show in props.peliculas"
            :key="show.id"
            :pelicula="show"
            @grandChildShow="handleEmit"
        />
    </div>
</template>

<style scoped>

</style>