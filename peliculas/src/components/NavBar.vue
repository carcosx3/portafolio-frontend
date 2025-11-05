<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        links: Array
    })
</script>

<template>
    <div class="bg-white/5 backdrop-blur-3xl shadow-md shadow-slate-500/40 flex flex-wrap flex-col items-center justify-start sm:flex-row w-full gap-5 p-3 text-white sm:w-auto">
        <div
            v-for="link in props.links"
            :key="link.path"
            class="w-full text-white sm:w-auto"
        >
            <RouterLink
                :to="link.path"
                class="transition inline-block px-3 hover:text-sky-500"
            >
            {{ link.name }}
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>

</style>