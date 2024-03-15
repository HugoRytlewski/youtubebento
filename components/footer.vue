<template>
  <Teleport to="body">
    <div
      class="w-screen z-[100] h-14 fixed left-0 bottom-4 md:hidden flex items-center justify-center"
    >
      <div
        class="p-6 w-[20rem] bg-[#1F2937] bg-opacity-70 rounded-xl backdrop-blur-md flex gap-10 justify-around items-center h-14 rounded-t-xl"
      >
        <img src="../assets/img/home.svg" alt="" />
        <img src="../assets/img/short.svg" alt="" />
        <div
          class="h-10 bg-red-500 b flex items-center rounded-2xl w-10 justify-center"
        >
          <img src="../assets/img/plus.svg" alt="" />
        </div>
        <img src="../assets/img/abonnements.svg" alt="" />
        <img src="../assets/img/abonnements.svg" alt="" />
      </div>
    </div>
  </Teleport>
</template>
