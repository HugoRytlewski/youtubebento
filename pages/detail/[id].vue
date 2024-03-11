<script setup>
const videoRef = ref();
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const route = useRoute();
const id = ref(route.params.id);
console.log(route.params.id);
const handleTimeUpdate = () => {
  currentTime.value = videoRef.value.currentTime;
};

onMounted(() => {
  videoRef.value.addEventListener("timeupdate", handleTimeUpdate);
  videoRef.value.addEventListener("ended", resetVideo);
  videoRef.value.addEventListener("loadedmetadata", () => {
    if (isFinite(videoRef.value.duration)) {
      duration.value = videoRef.value.duration;
    }
  });
});


onBeforeUnmount(() => {
  videoRef.value.removeEventListener("timeupdate", handleTimeUpdate);
  videoRef.value.removeEventListener("ended", resetVideo);
});

const togglePlay = () => {
  if (isPlaying.value) {
    videoRef.value.pause();
  } else {
    videoRef.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

const changeTime = () => {
  videoRef.value.currentTime = currentTime.value;
};

const resetVideo = () => {
  currentTime.value = 0;
  isPlaying.value = false;
};
</script>

<template>
  <div class="w-[77rem] h-fit flex flex-col justify-center items-center">
    <div
      class="w-[1280px] bg-gray-800 h-[720px] rounded-lg p-4 shadow-lg group"
    >
      <video
        class="w-[1180px] h-[620px] rounded-lg"
        ref="videoRef"
        :src="`/video/${id}.mp4`"
        @ended="resetVideo"
      ></video>
      <div
        class="flex justify-between items-center mt-4 opacity-0 group-hover:opacity-100 duration-300"
      >
        <button @click="togglePlay">
          <img
            v-if="isPlaying"
            src="/image/pause.svg"
            alt="pausebtn"
            class="h-8"
          />
          <img v-else src="/image/play.svg" alt="playbtn" class="h-8" />
        </button>
        <div class="absolute ml-14 w-[75rem] h-2 bg-gray-600 rounded-xl"></div>
        <input
          class="ml-14 w-[100%] max-w-[75.2rem] z-50 absolute ml-4 rounded overflow-hidden appearance-none bg-gray-300 bg-opacity-50 h-2 focus:outline-none transition-colors duration-300"
          type="range"
          min="0"
          :max="duration"
          :style="{
            background: `linear-gradient(to right, #FF0000 0%, #FF0000 ${
              (currentTime / duration) * 100
            }%, transparent ${
              (currentTime / duration) * 100
            }%, transparent 100%)`,
          }"
          v-model="currentTime"
          @input="changeTime"
        />
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #111827;
  overflow-x: hidden;
}
</style>
