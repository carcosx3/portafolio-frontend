<script setup>
    import { rateShow } from '@/composables/rateShow'

    const props = defineProps({
        pelicula: Object
    })
    const obtenerImg = (imgUrl) =>{
        if( imgUrl ){
            return `https://image.tmdb.org/t/p/w500${imgUrl}`
        }
    }
    const { saveShow } = rateShow();
</script>

<template>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4">
        <div class="w-full relative border rounded-lg overflow-hidden shadow-md shadow-slate-600/60">
            <img v-if="props.pelicula.poster_path" :src="obtenerImg(props.pelicula.poster_path)" class="w-full">

            <div v-else class="h-80 sm:h-70 md:h-60 lg:h-40 xl:h-60 2xl:h-80 w-full text-center font-semibold text-lg">
                <img src="../images/placeholderImg.png" class="object-contain object-center h-full p-5">
            </div>

            <div 
                class="transition absolute flex flex-col justify-between w-full h-full top-0 left-0 backdrop-blur-xs bg-slate-600/30 text-sky-500 text-shadow-md text-shadow-black/40
                hover:text-shadow-black/0 hover:bg-white/0 hover:backdrop-blur-[0] "
                :class="props.pelicula.poster_path ? 'hover:text-white/0' : ''"
            >
                <h3 class="transition text-center text-md sm:text-lg font-semibold p-2 overflow-hidden text-ellipsis">{{ props.pelicula.title || props.pelicula.name }}</h3>

                <div class="flex items-center justify-between px-2 pb-2 text-sky-500">
                    <button class="transition hover:text-yellow-500 cursor-pointer" @click="saveShow(props.pelicula, 'like')">
                        <span class="material-symbols-outlined">thumb_up</span>
                    </button>
                    <button class="transition hover:text-yellow-500 cursor-pointer" @click="saveShow(props.pelicula, 'dislike')">
                        <span class="material-symbols-outlined">thumb_down</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
