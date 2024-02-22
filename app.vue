<template>
  <nav class="mt-[40px] w-screen flex justify-center gap-[23px]">
    <div
      class="w-[11.68rem] h-[3.75rem] bg-red-600 cursor-pointer hover:bg-red-700 duration-500 rounded-xl flex justify-center items-center"
    >
      <a href="https://www.youtube.com" class="text-white text-xl font-bold"
        ><img src="./assets/img/logo.svg" alt=""
      /></a>
    </div>
    <div class="w-[51rem] rounded-xl">
      <div class="relative mb-6 bg-[#1F2937] rounded-xl">
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none"
        >
          <img src="./assets/img/loupe.svg" class="ml-2" alt="" />
        </div>
        <div class="flex justify-between">
          <input
            type="text"
            id="input-group-1"
            class="h-[3.75rem] w-[45rem] bg-[#1F2937] text-white text-sm rounded-lg ps-10 p-2.5"
            placeholder="Rechercher"
          />
          <div
            class="h-[3.75rem] w-24 p-4 ml-2 flex items-center justify-center"
          >
            <img src="./assets/img/micro.svg" class="cursor-pointer" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[180px] h-[3.75rem] bg-[#1F2937] rounded-xl flex items-center justify-center"
    >
      <div
        class="w-[60px] h-[3.75rem] rounded-xl hover:bg-gray-500 duration-200 cursor-pointer flex items-center justify-center"
      >
        <img src="./assets/img/plus.svg" alt="" />
      </div>
      <div
        class="w-[60px] flex items-center justify-center h-[3.75rem] rounded-xl hover:bg-gray-500 duration-200 cursor-pointer"
      >
        <img src="./assets/img/cloche.svg" alt="" />
      </div>
      <div
        class="w-[60px] flex items-center justify-center h-[3.75rem] overflow-hidden rounded-xl hover:bg-gray-500 duration-200 cursor-pointer"
      >
        <img src="./assets/img/profil.svg" alt="" />
      </div>
    </div>
  </nav>

  <div class="flex justify-center w-screen pl-[11.5rem]">
    <div
      class="h-[510px] w-[292px] bg-[#1F2937] rounded-xl flex flex-col pl-3 pr-3 gap-1"
    >
      <div
        class="flex mt-4 h-9 flex items-center gap-2 bg-[#111827] cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/home.svg" alt="" />
        <p class="text-white">Accueil</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/short.svg" alt="" />
        <p class="text-white">Shorts</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/abonnements.svg" alt="" />
        <p class="text-white">Abonnements</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/music.svg" alt="" />
        <p class="text-white">Youtube music</p>
      </div>

      <div class="mt-2 flex h-9 flex items-center gap-2 p-3 w-full rounded-lg">
        <p class="text-gray-500 text-sm font-bold">Vous</p>
        <div>
          <div
            class="mt-1 h-[18px] border-b-[1px] border-slate-600 w-[12rem]"
          ></div>
          <div class="h-[18px]"></div>
        </div>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/chaine.svg" alt="" />
        <p class="text-white">Votre chaine</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/historique.svg" alt="" />
        <p class="text-white">Historique</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/video.svg" alt="" />
        <p class="text-white">Vos Vidéos</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/plustard.svg" alt="" />
        <p class="text-white">A regarder plus tard</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/telechargement.svg" alt="" />
        <p class="text-white">Téléchargements</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600 cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/voirplus.svg" alt="" />
        <p class="text-white">Plus</p>
      </div>
    </div>

    <div class="flex flex-wrap w-[70rem] gap-y-[10px]">
      <div
        class="relative w-[292px] ml-[24px] rounded-xl h-[250px] overflow-hidden"
      >
        <div class="h-[164px] overflow-hidden relative">
          <img
            class="z-50 absolute"
            src="./assets/img/corseInox.jpg"
            alt="Image Description"
          />
          <div
            class="z-50 absolute bottom-2 right-2 p-2 h-[16px] text-white bg-black bg-opacity-75 rounded-full text-center flex items-center justify-center"
          >
            <p class="text-[12px]">1:07:40</p>
          </div>
        </div>

        <div class="relative absolute bottom-0 bg-neutral-800 h-[164px]">
          <div class="relative w-72 h-40 shadow-2xl">
            <img
              class="w-full h-full object-cover filter blur-xl"
              src="./assets/img/corseInox.jpg"
            />
            <div
              class="absolute top-0 h-full w-[110%] bg-gray-500 opacity-50"
            ></div>
          </div>
          <div
            class="absolute bottom-0 h-[164px] bg-gradient-to-t from-black p-[12px] w-full flex gap-[8px]"
          >
            <div
              class="absolute w-[28px] h-[28px] bg-red-600 rounded-lg overflow-hidden"
            >
              <img src="./assets/img/logoInox.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <p class="ml-[40px] text-white text-[14px]">
                5 jours pour traverser la Corse à pied ! (La randonnée la plus
                dure ...
              </p>
              <p class="ml-[40px] text-neutral-300 text-[12px]">
                Inoxtag • 4,6 M de vues • il y a 1 m
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative w-[292px] ml-[24px] rounded-xl h-[250px] overflow-hidden"
      >
        <div class="h-[164px] overflow-hidden relative">
          <img
            class="z-50 absolute"
            src="./assets/img/Bazar.jpg"
            alt="Image
          Description"
          />
          <div
            class="z-50 absolute bottom-2 right-2 p-2 h-[16px] text-white bg-black bg-opacity-75 rounded-full text-center flex items-center justify-center"
          >
            <p class="text-[12px]">22:16</p>
          </div>
        </div>

        <div class="relative absolute bottom-0 bg-neutral-800 h-[164px]">
          <div class="relative w-72 h-40 shadow-2xl">
            <img
              class="w-full h-full object-cover filter blur-xl"
              src="./assets/img/Bazar.jpg"
            />
            <div
              class="absolute top-0 h-full w-[110%] bg-gray-500 opacity-50"
            ></div>
          </div>

          <div
            class="absolute bottom-0 h-[164px] bg-gradient-to-t from-black w-full p-[12px] flex gap-[8px]"
          >
            <div
              class="absolute w-[28px] h-[28px] bg-red-600 rounded-lg overflow-hidden"
            >
              <img src="./assets/img/logoBazar.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <p class="ml-[40px] full text-white text-[14px]">
                Tout sur Tortues Ninja (1987) !
              </p>
              <p class="ml-[40px] text-neutral-300 text-[12px]">
                Bazar du Grenier • 685 k vues • il y a 3 j
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative w-[292px] ml-[24px] rounded-xl h-[250px] overflow-hidden"
      >
        <div class="h-[164px] overflow-hidden relative">
          <img
            class="z-50 absolute"
            src="./assets/img/Micka.jpg"
            alt="Image Description"
          />
          <div
            class="z-50 absolute bottom-2 right-2 p-2 h-[16px] text-white bg-black bg-opacity-75 rounded-full text-center flex items-center justify-center"
          >
            <p class="text-[12px]">07:05</p>
          </div>
        </div>

        <div class="relative absolute bottom-0 bg-neutral-800 h-[164px]">
          <div class="relative w-72 h-40 shadow-2xl">
            <img
              class="w-full h-full object-cover filter blur-xl"
              src="./assets/img/Micka.jpg"
            />
            <div
              class="absolute top-0 h-full w-[110%] bg-gray-500 opacity-50"
            ></div>
          </div>

          <div
            class="absolute bottom-0 h-[164px] bg-gradient-to-t from-black w-[110%] p-[12px] flex gap-[8px]"
          >
            <div
              class="absolute w-[28px] h-[28px] bg-red-600 rounded-lg overflow-hidden"
            >
              <img src="./assets/img/logoMicka.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <p class="ml-[40px] text-white text-[14px] w-[14rem]">
                Je prototype le dernier Dropdown de ma carrière. Et je te
                l’offre 🎁
              </p>
              <p class="ml-[40px] text-neutral-300 text-[12px]">
                Mickadoule • 887 vues • il y a 1 s
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative w-[292px] ml-[24px] rounded-xl h-[250px] overflow-hidden"
      >
        <div class="h-[164px] overflow-hidden relative">
          <img
            class="z-50 absolute"
            src="./assets/img/bagel.jpg"
            alt="Image Description"
          />
          <div
            class="z-50 absolute bottom-2 right-2 p-2 h-[16px] text-white bg-black bg-opacity-75 rounded-full text-center flex items-center justify-center"
          >
            <p class="text-[12px]">34:34</p>
          </div>
        </div>

        <div class="relative absolute bottom-0 bg-neutral-800 h-[164px]">
          <div class="relative w-72 h-40 shadow-2xl">
            <img
              class="w-full h-full object-cover filter blur-xl"
              src="./assets/img/bagel.jpg"
            />
            <div
              class="absolute top-0 h-full w-[110%] bg-gray-500 opacity-50"
            ></div>
          </div>

          <div
            class="absolute bottom-0 h-[164px] bg-gradient-to-t from-black w-[110%] p-[12px] flex gap-[8px]"
          >
            <div
              class="absolute w-[28px] h-[28px] bg-red-600 rounded-lg overflow-hidden"
            >
              <img src="./assets/img/logoBagel.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <p class="ml-[40px] text-white text-[14px] w-[14rem]">
                HOT ONES : Mister V sera-t-il meilleur qu'au GP Explorer ?
              </p>
              <p class="ml-[40px] text-neutral-300 text-[12px]">
                Studio Bagel • 1,9 M de vues • il y a 2 j
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative w-[292px] ml-[24px] rounded-xl h-[250px] overflow-hidden"
      >
        <div class="h-[164px] overflow-hidden relative">
          <img
            class="z-50 absolute"
            src="./assets/img/Cyril.jpg"
            alt="Image Description"
          />
          <div
            class="z-50 absolute bottom-2 right-2 p-2 h-[16px] text-white bg-black bg-opacity-75 rounded-full text-center flex items-center justify-center"
          >
            <p class="text-[12px]">17:09</p>
          </div>
        </div>

        <div class="relative absolute bottom-0 bg-neutral-800 h-[164px]">
          <div class="relative w-72 h-40 shadow-2xl">
            <img
              class="w-full h-full object-cover filter blur-xl"
              src="./assets/img/Cyril.jpg"
            />
            <div
              class="absolute top-0 h-full w-[110%] bg-gray-500 opacity-50"
            ></div>
          </div>

          <div
            class="absolute bottom-0 h-[164px] bg-gradient-to-t from-black w-[110%] p-[12px] flex gap-[8px]"
          >
            <div
              class="absolute w-[28px] h-[28px] bg-red-600 rounded-lg overflow-hidden"
            >
              <img src="./assets/img/logoCyril.jpg" alt="" />
            </div>
            <div class="flex flex-col">
              <p class="ml-[40px] text-white text-[14px] w-[14rem]">
                5€ pendant une journée en Amérique du Sud
              </p>
              <p class="ml-[40px] text-neutral-300 text-[12px]">
                CYRILmp4 • 370 k vues • il y a 1 j
              </p>
            </div>
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
