<script setup>
const {
  id,
  titre,
  chaine,
  nombre_vues,
  logo_chaine,
  miniature,
  date_sortie,
  temps,
} = defineProps({
  id: Number,
  titre: String,
  chaine: String,
  nombre_vues: Number,
  logo_chaine: String,
  miniature: String,
  date_sortie: String,
  temps: String,
});

// date du jour
const datetoDay = new Date();

function dateDiff(date1) {
  const diff = Math.abs(date1 - datetoDay);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (months === 0) return `il y a ${days} jours`;
  if (months >= 1 && months < 12) return `il y a ${months} mois`;
  if (months >= 12) return `il y a ${years} ans`;
}

function vueCounter(nombre_vues) {
  if (nombre_vues < 1000) return `${nombre_vues} `;
  if (nombre_vues >= 1000 && nombre_vues < 1000000)
    return `${Math.floor(nombre_vues / 1000)} k `;
  if (nombre_vues >= 1000000) return `${Math.floor(nombre_vues / 1000000)} M `;
}

const fixMiniature = "/image/" + miniature;
const fixLogo = "/image/" + logo_chaine;
</script>

<template>
  <NuxtLink :to="`/detail/${id}/${titre}`">
    <div
      class="flex items-center justify-center group cursor-pointer select-none"
    >
      <div
        class="relative w-[292px] ml-[24px] rounded-xl h-[250px] overflow-hidden z-50 group-hover:scale-105 duration-200 delay-100"
      >
        <div class="h-[164px] overflow-hidden relative">
          <img
            class="z-50 absolute"
            :src="fixMiniature"
            height="164"
            alt="Image Description"
          />

          <div
            class="z-50 absolute bottom-2 right-2 p-2 h-[20px] text-white bg-neutral-900 bg-opacity-80 rounded-full text-center flex items-center justify-center group-hover:opacity-0 duration-200"
          >
            <p class="text-[12px] text-center">{{ temps }}</p>
          </div>
        </div>

        <div class="relative bottom-0 bg-neutral-800 h-[164px]">
          <div class="relative w-72 h-40 shadow-2xl">
            <img
              class="w-full h-full object-cover filter blur-xl scale-150"
              :src="fixMiniature"
            />
            <div
              class="absolute top-0 h-full w-[110%] bg-gray-500 opacity-50"
            ></div>
          </div>

          <div
            class="absolute bottom-0 h-[164px] bg-gradient-to-t from-black w-[110%] p-[12px] flex gap-[8px]"
          >
            <div class="absolute w-[28px] h-[28px] rounded-lg overflow-hidden">
              <img :src="fixLogo" alt="" />
            </div>
            <div class="flex flex-col">
              <p
                class="ml-[40px] text-white text-[14px] w-[14rem] line-clamp-2"
              >
                {{ titre }}
              </p>
              <p class="ml-[40px] text-neutral-300 text-[12px]">
                {{ chaine }} • {{ vueCounter(nombre_vues) }} vues •
                {{ dateDiff(new Date(date_sortie)) }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        class="w-[9rem] h-[9rem] object-cover absolute filter blur-2xl opacity-20 scale-[2.1] hidden group-hover:flex duration-300"
        :src="fixMiniature"
      />
    </div>
  </NuxtLink>
</template>
