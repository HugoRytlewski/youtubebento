<script setup>
const route = useRoute();
const idRecherche = ref(route.params.id);
const titreRecherche = ref(route.params.title);
let video = videos.find((objet) => objet.id.toString() === idRecherche.value);

if (!video) {
  console.log("video non trouvée");
  video = {
    titre: titreRecherche.value,
    chaine: "Nom de la chaîne",
    nombre_vues: 0,
    logo_chaine: "logo_chaine",
    miniature: "miniature",
    date_sortie: "2021-09-01T00:00:00Z",
    temps: "PT0S",
    link: `https://www.youtube.com/embed/${idRecherche.value}`,
  };
}
</script>

<template>
  <div class="flex flex-col justify-center items-left">
    <div class="flex flex-col gap-10 md:gap-0 md:flex-row">
      <div class="flex flex-col">
      <div
        class="h-[16rem] w-screen sm:w-[30rem] sm:h-[20rem] md:w-[940px] bg-gray-800 md:h-[500px] rounded-lg p-1 md:p-4 shadow-lg group flex justify-center flex flex-col text-white font-bold"
      >
        <iframe
          width=""
          height="480"
          :src="video.link"
          frameborder="0"
          allowfullscreen
          autoplay
        ></iframe>
      </div>
      <div class="h-10 w-full flex items-center pt-6 pl-4 md:text-xl">
        <p class="text-white font-bold">{{ video.titre }}</p>
      </div>
    </div>
    <p class="md:hidden text-white font-bold pl-6">Suggestions</p>
      <div class="w-screen md:w-fit flex flex-col justify-center items-center gap-4">
            <VideoBoxDetail
              v-for="video in videos"
              :id="video.id"
              :titre="video.titre"
              :chaine="video.chaine"
              :nombre_vues="video.nombre_vues"
              :logo_chaine="video.logo_chaine"
              :miniature="video.miniature"
              :date_sortie="video.date_sortie"
              :temps="video.temps"
            />
      </div>
    </div>
  </div>
  <div class="h-20"></div>
</template>

<style>
body {
  background-color: #111827;
  overflow-x: hidden;
}
</style>
