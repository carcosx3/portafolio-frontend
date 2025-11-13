<script setup>
    import Tarea from '@/components/Tarea.vue'
    import { fetchTareas } from '@/composables/fetchApi';

    const { lista } = fetchTareas();
</script>

<template>
    <Tarea :tareasArray="lista" />
</template>

<style scoped>

</style>