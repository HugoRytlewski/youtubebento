<template>
  <div
    class="h-[39.6rem] pl-4 bg-[#1F2937] w-[18.5rem] rounded-lg absolute bottom-0 right-0"
  >
    <div class="mt-2 flex h-9 pl-3 items-center w-full rounded-lg">
      <p class="text-gray-500 text-sm font-bold">Abonnements</p>
    </div>
    <div class="flex flex-col gap-1">
      <div
        class="mt-1 flex h-10 items-center gap-2 w-[16rem] hover:bg-gray-600 duration-300 cursor-pointer p-3 w-full rounded-lg"
        v-for="abonnement in abonnements"
      >
        <img
          :src="'/image/' + abonnement.logo_chaine"
          alt=""
          class="h-8 rounded-lg"
        />
        <p class="text-white">{{ abonnement.chaine }}</p>
      </div>
    </div>
  </div>
</template>
