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
    <div class="rounded-br-lg rounded-bl-lg bg-white/5 backdrop-blur-3xl shadow-md shadow-slate-500/40">
        <form @submit.prevent="handleSubmit" class="flex flex-wrap flex-col items-center justify-center sm:flex-row w-full gap-y-5 p-3 text-white">
            <div class="w-full sm:w-4/6 px-3 order-1 sm:order-1">
                <label for="pelicula" class="sr-only"></label>
                <input v-model="busqueda" type="text" name="pelicula" class="w-full *bg-transparent border border-slate-400 rounded-lg p-2 text-white " placeholder="Buscar Pelicula">
            </div>
            <div class="w-full sm:w-2/6 px-3 order-3 sm:order-2">
                <button class="transition inline-block w-full text-white p-2 bg-black/60 rounded-lg font-semibold hover:bg-black/100 hover:text-slate-300" type="submit">Buscar</button>
            </div>
            <div class="w-full px-3 order-2 sm:order-3">
                <label for="typeShow" class="text-lg">Seleccione que quiere buscar</label>
                <select name="typeShow" v-model="tipoShow" class="w-full bg-transparent text-white">
                    <option class="text-black bg-slate-700" value="tv">Serie</option>
                    <option class="text-black bg-slate-700" value="movie">Pelicula</option>
                </select>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>