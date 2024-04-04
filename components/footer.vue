<script setup>
const router = useRoute()
console.log(router.path);
</script>

<template>
  <Teleport to="body">
    <div
      class="w-screen z-[100] h-14 fixed left-0 bottom-4 md:hidden flex items-center justify-center"
    >
      <div
        class=" w-[20rem] bg-[#1F2937] bg-opacity-70 rounded-xl backdrop-blur-md flex  justify-around items-center h-14 rounded-xl"
      >
      <nuxtLink to="/accueil">
        <div :class="[router.path === '/accueil' ? 'bg-opacity-30' : 'bg-opacity-0', ' h-10 hover:bg-opacity-30 bg-neutral-300 duration-300 flex items-center rounded-2xl w-10 justify-center']">
     
        <img src="../assets/img/home.svg" alt="" class="h-5 " />
          
        </div>
      </nuxtLink>
        <div
        <div :class="[router.path === '/short' ? 'bg-opacity-30' : 'bg-opacity-0', 'h-10 hover:bg-opacity-30 bg-neutral-300 duration-300 flex items-center rounded-2xl w-10 justify-center']">
          
        <img src="../assets/img/short.svg" alt=""  class="h-5" />
      </div>
      
        <div
          class="h-10 bg-red-500 b flex items-center rounded-2xl w-10 justify-center"
        >
          <img src="../assets/img/plus.svg" alt="" />
        </div>
        <div
        <div :class="[router.path === '/sub' ? 'bg-opacity-30' : 'bg-opacity-0', 'h-10 hover:bg-opacity-30 bg-neutral-300 duration-300 flex items-center rounded-2xl w-10 justify-center']">
          
        <img src="../assets/img/abonnements.svg" alt="" class="h-5"/>
      </div>
      <div
      <div :class="[router.path === '/me' ? 'bg-opacity-30' : 'bg-opacity-0', 'h-10 hover:bg-opacity-30 bg-neutral-300 duration-300 flex items-center rounded-2xl w-10 justify-center']">
        
        <img src="../assets/img/profil.svg" alt="" class="h-8 rounded-lg"/>
        </div>
      </div>
    </div>
  </Teleport>
</template>
