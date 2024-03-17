
<template>
  <div class="mt-4 md:flex h-full select-none hidden">
    <div class="w-[6rem] flex flex-col gap-3  bg-[#111827] ">
      <div class="h-[100px] w-[80px] bg-red-600 rounded-2xl flex items-center justify-center rounded-2xl z-20 " > 
        <img src="../assets/img/shortt.svg" alt="" class="stroke-white h-8" />
      </div>
      <div class="h-[120px] w-[80px] bg-[#1F2937] flex items-center justify-center rounded-2xl z-20 cursor-pointer hover:bg-gray-600 duration-300" @click="nextSlide"> 
        <img src="../assets/img/voirplus.svg" alt="" class="-rotate-90 stroke-white h-7" />
      </div>
      <div class="h-[120px] w-[80px] bg-[#1F2937] flex items-center justify-center rounded-2xl z-20 hover:bg-gray-600 duration-300 cursor-pointer" @click="previousSlide"> 
        <img src="../assets/img/voirplus.svg" alt="" class="rotate-90 stroke-white h-7" />
      </div>
    </div>
      <div class="flex w-[51rem] overflow-hidden gap-10 rouded-xl  ">
  
  
      
        <div 
        v-for="(short) in shortPerFour"
        >
          <transition name="slide">
            <div :style="{ transform: `translateX(-${currentSlideSet * 104.5}%)` }" class="slide-container duration-300">
              <div class="flex gap-[1.8rem]">
                <shortBox v-for="OneShort in short" :key="index + (currentSlideSet * 4)"
                :id="OneShort.id"
                :titre="OneShort.titre"
                :nombre_vues="OneShort.vue"
                :miniature="OneShort.photo"
                 />
              </div>
            </div>
          </transition>
        


        
      </div>
  
      </div>
  </div>
  <div class="flex md:hidden w-[20rem] mt-6 p-2 h-96 overflow-y-hidden overflow-x-scroll gap-4">
    <div v-for="short in shorts">
      <shortBox :id="short.id" :titre="short.titre" :nombre_vues="short.vue" :miniature="short.photo" />
    </div>

  </div>
  
  </template>
  
  <script setup>
    console.log(shorts.length,'shorts');

import { ref } from 'vue';

const shortPerFour = ref([]);

function getShortsPerFour() {
for (let i = 0; i < shorts.length; i += 4) {
  shortPerFour.value.push(shorts.slice(i, i + 4));
}
}
getShortsPerFour();
console.log(shortPerFour.value,'shortPerFour');

const currentSlide = ref(0);
const totalSlides = ref(1); // Change this to the total number of slide sets - 1
const currentSlideSet = ref(0);

function nextSlide() {
  if (currentSlideSet.value < totalSlides.value) {
    currentSlide.value++;
    currentSlideSet.value++;
  }
}

function previousSlide() {
  if (currentSlideSet.value > 0) {
    currentSlide.value--;
    currentSlideSet.value--;
  }
}
</script>
  
  <style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.5s ease; /* Augmentez la durée et utilisez une fonction de transition 'ease' */
  }
  .slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
    transform: translateX(100%);
  }
  .slide-container {
    display: flex;
    overflow-x: hidden;
  }
  </style>
  