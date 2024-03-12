<script setup>
const route = useRoute();
const idRecherche = ref(route.params.id);
const video = videos.find((objet) => objet.id.toString() === idRecherche.value);
</script>

<template>
  <div class="w-[77rem] h-fit flex flex-col justify-center items-left">
    <div class="flex">
      <div
        class="w-[940px] bg-gray-800 h-[500px] rounded-lg p-4 shadow-lg group flex justify-center flex flex-col text-white font-bold"
      >
        <iframe
          width="908"
          height="480"
          :src="video.link"
          frameborder="0"
          allowfullscreen
          autoplay
        ></iframe>
      </div>
      <div>
        <div class="flex flex-col gap-4 h-10">
          <div v-for="video in videos" class="flex flex-wrap gap-y-[10px]">
            <VideoBoxDetail
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
    </div>
    <div class="h-10 w-full flex items-center pt-6 pl-4 text-xl">
      <p class="text-white font-bold">{{ video.titre }}</p>
    </div>
  </div>
</template>

<style>
body {
  background-color: #111827;
  overflow-x: hidden;
}
</style>
