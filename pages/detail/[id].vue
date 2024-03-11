<script setup>
const route = useRoute();
const idRecherche = ref(route.params.id);
const video = videos.find((objet) => objet.id.toString() === idRecherche.value);
</script>

<template>
  <div class="w-[77rem] h-fit flex flex-col justify-center items-center">
    <div
      class="w-[1280px] bg-gray-800 h-[720px] rounded-lg p-4 shadow-lg group"
    >
      <iframe
        width="1245"
        height="670"
        :src="video.link"
        frameborder="0"
        allowfullscreen
        autoplay
      ></iframe>
    </div>
  </div>
</template>

<style>
body {
  background-color: #111827;
  overflow-x: hidden;
}
</style>
