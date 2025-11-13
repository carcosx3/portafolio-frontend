<script setup>
    const props = defineProps({
        tareasArray: Array
    })
</script>

<template>
    <div>
        <ul>
            <li
                v-for="tarea in props.tareasArray"
                :key="tarea.id"
            >
                {{ tarea.titulo }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>