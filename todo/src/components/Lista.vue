<script setup>
    import Tarea from '@/components/Tarea.vue'
    import { fetchTareas } from '@/composables/fetchApi';

    const { lista, toggleCompleted } = fetchTareas();
</script>

<template>
    <Tarea 
        :tareasArray="lista" 
        @toggleCompletada="toggleCompleted"
        />
</template>

<style scoped>

</style>