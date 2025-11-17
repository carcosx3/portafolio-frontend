<script setup>
    const emit = defineEmits(['toggleCompletada'])
    const props = defineProps({
        tareaObj: Object
    })
    const handleCompleted = () => { emit('toggleCompletada', props.tareaObj)}
</script>

<template>
    <div class="flex items-center">
        <input type="checkbox" 
            v-model="props.tareaObj.completada"
            @change="handleCompleted"
            class="mr-2"
            >
        {{ props.tareaObj.titulo }}
    </div>
</template>

<style scoped>

</style>