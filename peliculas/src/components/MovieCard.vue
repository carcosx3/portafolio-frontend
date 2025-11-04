<script setup>
    const props = defineProps({
        pelicula: Object
    })

    console.log( props.pelicula.title )

    const obtenerImg = (imgUrl) =>{
        if( imgUrl ){
            return `https://image.tmdb.org/t/p/w500${imgUrl}`
        }
    }
</script>

<template>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4">
        <div class="w-full relative border rounded-lg overflow-hidden shadow-md shadow-slate-600/60">
            <img v-if="props.pelicula.poster_path" :src="obtenerImg(props.pelicula.poster_path)" class="w-full">

            <div v-else class="h-80 sm:h-70 md:h-60 lg:h-40 xl:h-60 2xl:h-80 w-full text-center font-semibold text-lg">
                <img src="../images/placeholderImg.png" class="object-contain object-center h-full p-5">
            </div>

            <div 
                class="transition absolute w-full h-full top-0 left-0 backdrop-blur-xs bg-slate-600/30 text-sky-500 text-shadow-md text-shadow-black/40
                hover:text-shadow-black/0 hover:bg-white/0 hover:backdrop-blur-[0] "
                :class="props.pelicula.poster_path ? 'hover:text-white/0' : ''"
            >
                <h3 class="transition text-center text-md sm:text-lg font-semibold p-2">{{ props.pelicula.title || props.pelicula.name }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
