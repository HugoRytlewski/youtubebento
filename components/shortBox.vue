
<script setup>
const {
  id,
  titre,
  nombre_vues,
  miniature,
} = defineProps({
  id: Number,
  titre: String,
  nombre_vues: Number,
  miniature: String,
});

function vueCounter(nombre_vues) {
  if (nombre_vues < 1000) return `${nombre_vues} `;
  if (nombre_vues >= 1000 && nombre_vues < 1000000)
    return `${Math.floor(nombre_vues / 1000)} k `;
  if (nombre_vues >= 1000000) return `${Math.floor(nombre_vues / 1000000)} M `;
}
const fixMiniature = "/image/" + miniature;

</script>
<template>
  <nuxt-link :to="'/detail/' + id +'/'+ titre">
    <div  class="relative h-[365px] w-[182px] overflow-hidden rounded-2xl cursor-pointer group">
        <img
        class="h-full object-cover"
        :src="fixMiniature"
        alt="Image Description"
      />

        <div class="absolute w-full bg-gray-700 bg-opacity-30 pl-4 pt-3 backdrop-blur-md h-16 bottom-0 rounded-b-lg">
            <div class="flex flex-col items-start">
                <p class="text-white text-sm line-clamp-1 w-[10rem]">{{titre}}</p>
                <p class="text-neutral-300 text-[12px]">{{vueCounter(nombre_vues)}} vues</p>
            </div>
            
        </div>
    </div>
  </nuxt-link>
    </template>