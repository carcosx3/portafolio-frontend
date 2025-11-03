<script setup>
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        navElementArray: Array
    })
    const isHovering = ref(false)
    
</script>

<template>
    <div class="flex flex-col md:flex-row gap-2">
        <div
            v-for="link in props.navElementArray"
            :key="link.path"
            class="flex flex-1"
        >
            <RouterLink 
                v-if="!link.childrens"
                :to="link.path"
                class="transition flex w-full items-center justify-start md:justify-center capitalize font-semibold text-white hover:text-purple-300"
                @mouseenter="isHovering = false" 
            >
                {{ link.text }}
            </RouterLink>
            
            <span 
                v-else 
                @mouseenter="isHovering = true"  
                class="transition relative flex w-full items-center justify-start md:justify-center capitalize font-semibold text-white hover:text-purple-300 cursor-pointer"
            >
                {{ link.text }}

                <div
                    class="transition bg-black w-full absolute top-[110%] left-0 flex flex-col gap-2 p-2 rounded"
                    :class=" isHovering ? 
                    'h-auto z-99 opacity-100' :
                    'h-0 z-[-1] opacity-0'"
                    @mouseenter="isHovering = true"  
                    @mouseleave="isHovering = false"
                >
                    <RouterLink
                        v-for="child in link.childrens"
                        :path="child.path"
                        :to="child.path"
                        class="text-white hover:text-purple-300"
                    >
                        {{ child.text }}
                    </RouterLink>
                </div>
            </span>
        </div>
    </div>
</template>

<style scoped>

</style>