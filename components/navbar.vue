<script setup>
const search = ref("");
const router = useRouter();

function searchFunction() {
  console.log(search.value);
  router.push(`/search/${search.value}`);
}
</script>

<template>
  <nav class="w-[77rem] flex justify-center gap-[23px]">
    <NuxtLink to="/">
      <div
        class="w-[11.68rem] h-[3.75rem] bg-red-600 cursor-pointer hover:bg-red-800 duration-300 rounded-xl flex justify-center items-center"
      >
        <p class="text-white text-xl font-bold">
          <img src="../assets/img/logo.svg" alt="" />
        </p>
      </div>
    </NuxtLink>
    <div class="w-[51rem] rounded-xl">
      <div class="relative mb-6 bg-[#1F2937] rounded-xl">
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none"
        >
          <img src="../assets/img/loupe.svg" class="ml-2" alt="" />
        </div>
        <div class="flex justify-between focus:border b outline-red-500">
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
              class="h-[3.75rem] w-24 p-4 ml-2 flex items-center justify-center hover:text-red-500"
            >
              <img
                src="../assets/img/micro.svg"
                class="cursor-pointer"
                alt=""
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="w-[180px] h-[3.75rem] bg-[#1F2937] rounded-xl flex items-center justify-center"
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
