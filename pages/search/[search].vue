<script setup>
const route = useRoute();
const videosA = ref([]);
const quota = ref(0);

async function fetchVideos() {
  const apiKey = "AIzaSyB1VciZSe8D7Qyw7Xjf2zZs66hGE7KEd7U";
  try {
    const response = await $fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${route.params.search}&key=${apiKey}`
    );
    console.log(response.items);
    videosA.value = response.items;
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos :", error);
    quota.value = 1;
  }
}
onMounted(() => {
  fetchVideos();
});
</script>

<template>
  <div
    class="w-[87rem] pl-12 h-fit flex flex-wrap justify-start gap-y-6 items-center"
  >
    <div v-for="video in videosA" class="">
      <videoboxSearch
        :id="video.id"
        :titre="video.snippet.title"
        :chaine="video.chaine"
        :nombre_vues="video.nombre_vues"
        :logo_chaine="video.logo_chaine"
        :miniature="video.snippet.thumbnails.medium.url"
        :date_sortie="video.date_sortie"
        :temps="video.temps"
      />
    </div>
    <div
      v-if="quota === 1"
      class="text-white h-96 flex items-center justify-center w-screen font-bold"
    >
      Oups... Le quota de recherche dépassé
    </div>
  </div>
</template>
