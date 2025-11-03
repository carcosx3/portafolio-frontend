<script setup>
    import { ref, onMounted, watch } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const proyectos = [
        {
            id: 1,
            title: "Carrito Compras",
            description: "Consume api de articulos, añade productos al carrito, da total del carrito",
            link: "https://github.com/carcosx3/portafolio-frontend/tree/main/carrito"
        },
        {
            id: 2,
            title: "Buscador de Peliculas",
            description: "Consume api de peliculas, busca y muestra la pelicula buscada",
            link: "https://github.com/carcosx3/portafolio-frontend/tree/main/peliculas"
        }
    ]
    const proyecto = ref(null)
    const dataProyecto = (idProyecto) => {
        const data = proyectos.find( (element) => element.id == idProyecto )

        proyecto.value = data
    }
    watch( () => route.params.id,
        (nuevoId) => {
            dataProyecto(nuevoId)
        }
    )
    onMounted( () => {
        dataProyecto(route.params.id)
    })
</script>

<template>
    <div class="text-white">
        <div v-if="!proyecto">
            Cargando
        </div>
        <div v-else>
            <h1 class="text-2xl md:text-4xl font-bold uppercase text-center">{{ proyecto.title }}</h1>

            <div class="mt-4 text-lg">
                <p>{{ proyecto.description }}</p>

                <p><a :href="proyecto.link" target="_blank" rel="noopener noreferrer" class="transition hover:text-purple-300">Link Repositorio</a></p>
            </div>
        </div>
    </div>
</template>

<style>

</style>