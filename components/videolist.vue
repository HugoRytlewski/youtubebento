<template>
  <div
    class="flex w-screen justify-center md:justify-start md:w-[80rem] gap-y-10 overflow-visible flex-wrap"
  >
    <VideoBox
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
</template>
