<script setup>
const isOpen = ref(false)
</script>


<template>
<div
      class=" p-6 w-[292px] bg-[#1F2937] rounded-xl flex flex-col pl-3 pr-3 gap-1 select-none"
    >
      <div
        class="flex  h-9 flex items-center gap-2 bg-[#111827] cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/home.svg" alt="" />
        <p class="text-white">Accueil</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/short.svg" alt="" />
        <p class="text-white">Shorts</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/abonnements.svg" alt="" />
        <p class="text-white">Abonnements</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/music.svg" alt="" />
        <p class="text-white">Youtube music</p>
      </div>

      <div class="mt-2 flex h-9 flex items-center gap-2 p-3 w-full rounded-lg">
        <p class="text-gray-500 text-sm font-bold">Vous</p>
        <div>
          <div
            class="mt-1 h-[18px] border-b-[1px] border-slate-600 w-[12rem]"
          ></div>
          <div class="h-[18px]"></div>
        </div>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/chaine.svg" alt="" />
        <p class="text-white">Votre chaine</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/historique.svg" alt="" />
        <p class="text-white">Historique</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/video.svg" alt="" />
        <p class="text-white">Vos Vidéos</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/plustard.svg" alt="" />
        <p class="text-white">A regarder plus tard</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="../assets/img/telechargement.svg" alt="" />
        <p class="text-white">Téléchargements</p>
      </div>

 
    </div>
   
</template>