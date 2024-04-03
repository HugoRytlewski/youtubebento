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

const router = useRouter()

const DetailVideo = (id, titre) => {
  const video = {
    id: id,
    titre: titre,
    chaines: chaine,
    nombre_vues: nombre_vues,
    logo_chaine: "/image/"+logo_chaine,
    miniature: miniature,
    date_sortie: date_sortie,
    temps: temps
    

  }
  router.push({
    path: `/detail/`,
    query: { data: JSON.stringify(video) }
    
  })
}
</script>

<template>
    <div class="md:pl-5 cursor-pointer" @click="DetailVideo(id,titre)" >
      <div
        class="h-[15rem] w-[20rem] md:h-[6rem] md:w-[20rem] rounded-lg bg-gray-800 hover:bg-gray-700 duration-300 flex flex-col md:flex-row gap-2 p-2"
      >
        <img
          class="h-[10rem] md:h-full object-cover md:w-min-[19rem] w-[8rem] rounded-lg"
          :src="fixMiniature"
          alt="miniature"
        />
        <div
          class="flex flex-col items-start justify-start text-left w-[14rem]"
        >
          <p class="text-white text-sm line-clamp-2">{{ titre }}</p>
          <p class="text-neutral-300 text-[12px]">
            {{ chaine }} • {{ vueCounter(nombre_vues) }} vues •
            {{ dateDiff(new Date(date_sortie)) }}
          </p>
        </div>
      </div>
    </div>
</template>
