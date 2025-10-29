<script setup>
    import { ref } from 'vue'
    const emit = defineEmits(['buscar'])

    const busqueda = ref('')
    const tipoShow = ref('movie')

    const handleSubmit = () => {
        emit('buscar', {
            query: busqueda.value,
            tipo: tipoShow.value
        })
    }
</script>

<template>
    <div class="flex justify-center">
        <form @submit.prevent="handleSubmit" class="flex flex-wrap flex-col items-center justify-center sm:flex-row w-full md:w-4/5 gap-y-5 p-3">
            <div class="w-full sm:w-3/5 px-3 order-1 sm:order-1">
                <label for="pelicula" class="sr-only"></label>
                <input v-model="busqueda" type="text" name="pelicula" class="w-full border border-slate-600 p-2" placeholder="Buscar Pelicula">
            </div>
            <div class="w-full sm:w-2/5 px-3 order-3 sm:order-2">
                <button class="transition inline-block w-full bg-stone-800 text-white text-lg py-3 px-5 hover:bg-stone-400" type="submit">Buscar</button>
            </div>
            <div class="w-full px-3 order-2 sm:order-3">
                <label for="typeShow" class="text-lg">Seleccione que quiere buscar</label>
                <select name="typeShow" v-model="tipoShow" class="w-full">
                    <option value="tv">Serie</option>
                    <option value="movie">Pelicula</option>
                </select>
            </div>
        </form>
    </div>
</template>