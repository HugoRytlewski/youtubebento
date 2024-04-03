<script setup>
const route = useRoute();
const quota = ref(0);
const videoList = ref();
const maxResults = 12;

async function fetchVideos() {
  try {
    const apiKey = "AIzaSyCHY3vmOQ9ZZn7TAZXcqFn3_Ph-eWikI7U";

    const videosResponse = await $fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${route.params.search}&key=${apiKey}&maxResults=${maxResults}`
    );
    const videoIds = videosResponse.items
      .map((item) => item.id.videoId)
      .join(",");
    const videosDetailsResponse = await $fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`
    );
    const videoDetailsMap = {};
    videosDetailsResponse.items.forEach((video) => {
      videoDetailsMap[video.id] = video;
    });

    const channelIds = videosResponse.items
      .map((item) => item.snippet.channelId)
      .join(",");
    const channelsDetailsResponse = await $fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds}&key=${apiKey}`
    );
    const channelDetailsMap = {};
    channelsDetailsResponse.items.forEach((channel) => {
      channelDetailsMap[channel.id] = channel;
    });

    videoList.value = videosResponse.items.map((video) => ({
      ...video,
      duration:
        videoDetailsMap[video.id.videoId]?.contentDetails.duration || "0",
      viewCount: videoDetailsMap[video.id.videoId]?.statistics.viewCount || "0",
      channelLogo:
        channelDetailsMap[video.snippet.channelId]?.snippet.thumbnails.default
          .url || "",
    }));

    console.log(videoList.value);
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos :", error);
    quota.value = 1;
  }
}

onMounted(() => {
  fetchVideos();
});

console.log(videoList);
</script>

<template>
  <div
    class="flex w-screen justify-center sm:justify-start md:w-[80rem] gap-y-10 overflow-visible flex-wrap"
  >
    <div v-for="video in videoList" :key="video.id" class="">
      <div v-if="video.id.videoId">
        <videoboxSearch
          :id="video.id.videoId"
          :titre="video.snippet.title"
          :chaine="video.snippet.channelTitle"
          :nombre_vues="video.viewCount"
          :logo_chaine="video.channelLogo"
          :miniature="video.snippet.thumbnails.medium.url"
          :date_sortie="video.snippet.publishedAt"
          :temps="video.duration ? video.duration : 'Durée inconnue'"
        />
      </div>
    </div>

    <div
      v-if="quota === 1"
      class="text-white h-96 flex items-center justify-center w-screen font-bold"
    >
      Oups... Une erreur est survenue.
    </div>
  </div>
</template>
