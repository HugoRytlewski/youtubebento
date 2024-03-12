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

console.log(dateDiff(new Date(date_sortie)));
const fixMiniature = "/image/" + miniature;
const fixLogo = "/image/" + logo_chaine;
</script>

<template>
  <NuxtLink :to="`/detail/${id}`">
    <div class="pl-5">
      <div
        class="h-[7rem] w-[27rem] rounded-lg bg-gray-800 hover:bg-gray-700 duration-300 flex gap-2 p-2"
      >
        <img
          class="h-full w-min-[12rem] rounded-lg"
          :src="fixMiniature"
          alt="miniature"
        />
        <div
          class="flex flex-col items-start justify-start text-left w-[14rem]"
        >
          <p class="text-white text-sm">{{ titre }}</p>
          <p class="text-neutral-300 text-[12px]">
            {{ chaine }} • {{ vueCounter(nombre_vues) }} vues •
            {{ dateDiff(new Date(date_sortie)) }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
