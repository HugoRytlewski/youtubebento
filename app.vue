<template>
  <div class="p-10 w-screen items-center flex flex-col">

  <navbar />
  <div class="w-[77rem]  h-fit flex flex-col justify-center items-center">
    <div class="flex  container  ">
      <SideMenu />
      <videolist />
    </div>
    <div class=" h-96 w-[77rem] flex relative">
      <div class=" h-full w-[57rem]"/>
        <div class="h-[39.6rem]  bg-[#1F2937] w-[18.5rem] rounded-lg absolute bottom-0 right-0">
          <div class="mt-2 flex h-9 pl-5 items-center gap-2 p-3 w-full rounded-lg">
            <p class="text-gray-500 text-sm font-bold">Abonnements</p>
          </div>
        </div>


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
