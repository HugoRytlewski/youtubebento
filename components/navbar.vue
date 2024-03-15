<script setup>
import { Teleport } from "vue";

const search = ref("");
const router = useRouter();

function searchFunction() {
  router.push(`/search/${search.value}`);
}
</script>

<template>
  <nav class="flex justify-between w-fit gap-[23px]">
    <NuxtLink to="/">
      <div
        class="sm:w-[8rem] w-20 md:w-[11.68rem] h-[3.75rem] bg-red-600 cursor-pointer hover:bg-red-800 duration-300 rounded-xl flex justify-center items-center"
      >
        <p class="text-white text-xl font-bold">
          <img class="hidden md:flex" src="../assets/img/logo.svg" alt="" />
          <img
            class="md:hidden h-10"
            src="../assets/img/mobilelogo.svg"
            alt=""
          />
        </p>
      </div>
    </NuxtLink>
    <div
      class="flex flex-col xl:w-[51rem] lg:w-[35rem] w-[15rem] sm:w-[20rem] rounded-xl"
    >
      <div class="relative mb-6 bg-[#1F2937] rounded-xl">
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none"
        >
          <img src="../assets/img/loupe.svg" class="ml-2" alt="" />
        </div>
        <div class="group flex justify-between focus:border b outline-red-500">
          <input
            type="text"
            v-model="search"
            id="input-group-1"
            @keyup.enter="searchFunction"
            class="h-[3.75rem] w-[45rem] bg-[#1F2937] text-white text-sm rounded-lg ps-10 p-2.5 apparence-none outline-none"
            placeholder="Rechercher"
          />
          <NuxtLink :to="`/search/${search}`">
            <div
              class="hidden sm:flex h-[3.75rem] group/input group-hover:bg-gray-700 rounded-xl w-24 p-4 ml-2 flex items-center justify-center hover:text-red-500"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-[2.5px] group-hover/input:stroke-white stroke-gray-400 duration-300 text-white"
              >
                <path
                  d="M19.5002 19.5L15.9168 15.9166M17.8333 11.1667C17.8333 14.8486 14.8486 17.8333 11.1667 17.8333C7.48477 17.8333 4.5 14.8486 4.5 11.1667C4.5 7.48477 7.48477 4.5 11.1667 4.5C14.8486 4.5 17.8333 7.48477 17.8333 11.1667Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="hidden md:flex w-[180px] h-[3.75rem] bg-[#1F2937] rounded-xl flex items-center justify-center"
    >
      <div
        class="w-[60px] h-[3.75rem] rounded-xl hover:bg-gray-500 duration-200 cursor-pointer flex items-center justify-center"
      >
        <img src="../assets/img/plus.svg" alt="" />
      </div>
      <div
        class="w-[60px] flex items-center justify-center h-[3.75rem] rounded-xl hover:bg-gray-500 duration-200 cursor-pointer"
      >
        <img src="../assets/img/cloche.svg" alt="" />
      </div>
      <div
        class="w-[60px] flex items-center justify-center h-[3.75rem] overflow-hidden rounded-xl hover:bg-gray-500 duration-200 cursor-pointer"
      >
        <img src="../assets/img/profil.svg" alt="" />
      </div>
    </div>
  </nav>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
}
</style>
