<script setup>
    const emit = defineEmits(['toggleCompletada'])
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
                :tarea="tarea"
            >
                <input type="checkbox" 
                    v-model="tarea.completada"
                    @change="$emit('toggleCompletada', tarea)"
                    >
                {{ tarea.titulo }}
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>