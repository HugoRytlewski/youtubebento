<script setup>
const {
  titre,
  chaine,
  nombre_vues,
  logo_chaine,
  miniature,
  date_sortie,
  temps,
} = defineProps({
  titre: String,
  chaine: String,
  nombre_vues: Number,
  logo_chaine: String,
  miniature: String,
  date_sortie: String,
  temps: String,
});
</script>

<template>
  <div class="flex items-center justify-center group">
    <div
      class="relative w-[292px] ml-[24px] rounded-xl h-[250px] overflow-hidden z-50 group-hover:scale-105 duration-200 delay-100"
    >
      <div class="h-[164px] overflow-hidden relative bg-red-600">
        <NuxtImg
          class="z-50 absolute"
          :src="`/${miniature}`"
          height="164"
          alt="Image Description"
        />
        <div
          class="z-50 absolute bottom-2 right-2 p-2 h-[16px] text-white bg-black bg-opacity-75 rounded-full text-center flex items-center justify-center group-hover:opacity-0 duration-200"
        >
          <p class="text-[12px]">{{ temps }}</p>
        </div>
      </div>

      <div class="relative bottom-0 bg-neutral-800 h-[164px]">
        <div class="relative w-72 h-40 shadow-2xl">
          <NuxtImg
            class="w-full h-full object-cover filter blur-xl scale-150"
            :src="`/${miniature}`"
          />
          <div
            class="absolute top-0 h-full w-[110%] bg-gray-500 opacity-50"
          ></div>
        </div>

        <div
          class="absolute bottom-0 h-[164px] bg-gradient-to-t from-black w-[110%] p-[12px] flex gap-[8px]"
        >
          <div
            class="absolute w-[28px] h-[28px] bg-red-600 rounded-lg overflow-hidden"
          >
            <NuxtImg :src="`./${logo_chaine}`" alt="" />
          </div>
          <div class="flex flex-col">
            <p class="ml-[40px] text-white text-[14px] w-[14rem] line-clamp-2">
              {{ titre }}
            </p>
            <p class="ml-[40px] text-neutral-300 text-[12px]">
              {{ chaine }} • 370 k vues • il y a 1 j
            </p>
          </div>
        </div>
      </div>
    </div>
    <NuxtImg
      class="w-[9rem] h-[9rem] object-cover absolute filter blur-xl scale-150 hidden group-hover:flex duration-300"
      :src="`${miniature}`"
    />
  </div>
</template>
