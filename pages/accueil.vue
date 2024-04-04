<template>
    <div class="h-fit flex flex-col gap-2 justify-center items-center">
      <div class="flex container md:w-[77rem]">
        <SideMenu />
        <videolist />
      </div>
      <div class="h-96 flex relative">
        <div class="max-w-[77rem] xl:w-screen md:w-[50rem] flex rounded-xl">
          <shortslist />
          <FollowMenu />
        </div>
      </div>
    </div>
    <div class="h-20 w-6"></div>
  
  </template>
  

  