<script setup>
    import Tarea from '@/components/Tarea.vue'
    import { fetchTareas } from '@/composables/fetchApi';

    const { lista, toggleCompleted } = fetchTareas();
</script>

<template>
    <ul>
        <li
            v-for="tarea in lista"
            :key="tarea.id"
        >
            <Tarea 
                :tareaObj="tarea" 
                @toggleCompletada="toggleCompleted"
            />
        </li>
    </ul>
</template>

<style scoped>

</style>