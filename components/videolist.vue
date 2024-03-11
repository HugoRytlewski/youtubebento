<template>
<div class="flex w-[80rem] gap-y-10 overflow-visible flex-wrap">
<div 
v-for="video in videos"
class="flex flex-wrap  gap-y-[10px]"
> 
      <VideoBox 
      :id=video.id
      :titre=video.titre
      :chaine=video.chaine
      :nombre_vues=video.nombre_vues
      :logo_chaine=video.logo_chaine
      :miniature=video.miniature
      :date_sortie=video.date_sortie
      :temps=video.temps
      />
    </div>
  </div>
</template>