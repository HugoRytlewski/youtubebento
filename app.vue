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
        class="flex mt-4 h-9 flex items-center gap-2 bg-[#111827]  cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/home.svg" alt="" />
        <p class="text-white">Accueil</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/short.svg" alt="" />
        <p class="text-white">Shorts</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/abonnements.svg" alt="" />
        <p class="text-white">Abonnements</p>
      </div>

      <div
        class="flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
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
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/chaine.svg" alt="" />
        <p class="text-white">Votre chaine</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/historique.svg" alt="" />
        <p class="text-white">Historique</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/video.svg" alt="" />
        <p class="text-white">Vos Vidéos</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/plustard.svg" alt="" />
        <p class="text-white">A regarder plus tard</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
      >
        <img src="./assets/img/telechargement.svg" alt="" />
        <p class="text-white">Téléchargements</p>
      </div>

      <div
        class="mt-1 flex h-9 flex items-center gap-2 hover:bg-gray-600  cursor-pointer p-3 w-full rounded-lg"
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
            src="https://s3-alpha-sig.figma.com/img/eff9/28fb/d424f5721be998a944630d5f42626328?Expires=1704672000&Signature=YzDjRE6GxtCZFCyfvG81camfsbGtXgX9mEo61nlTmXzz3xGw6hue24MoatBbYo-28EEw-1YJ3fIixzxpPIEaSW0oaeR5etZHS9btN1j8wpqfhVrJPDlAkkz-R-dhseTZgLtVn9HTZ7OuF5d3gmO3fQi1lHc4Zd8dSSozBysQz2bCbbc7VInLAxP3KJfxbIgxM6~JPfOgVNezk66oBPP-mTAklgP25SiOFecov~spAN-phvpiEdDqWYAjs-JfvnFGOLMLq6qk88zWvXpR-y9Kve8K7T9pcKi8VxgLWniwywDU1p0B5i0PYhPDTAd5m9BHJjdoHIXyZVoXk1o0uINdwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/d4bd/363f/47eb770110aa9b00f0c28f3f4de58373?Expires=1704672000&Signature=lzZ5Nm0BGYIKh7DwcC3lnS3W2tAbsWQd3Az9HxRITjECutaMa0z9AQveNiXcOqsxaWW0xCTAN0kCoW0CTbplULojCL2c-ZdsptbbwWrl4NJ7WAlXJoqA0ss~8aRWkOZ1vl8vBXroH0I-rsbkGVdZXdk-WBimkWH329C6sVvp1ZNwjC5cz0qpmEma6u5qQBaYRk3vaLHNKgIBInDZez6h85kNIllXCN3QcNoIaWR6R29-9dOr9gsb-5oaswTMB5fXXfKWaph7cPSxiuaNWTvNiSDy7iGqsXhv2Fwu0M5Wfn8MtKUw59DU4G601wnMOj6jud0A3juf9q-T4TTp~YNc2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              <img
                src="https://s3-alpha-sig.figma.com/img/d4bd/363f/47eb770110aa9b00f0c28f3f4de58373?Expires=1704672000&Signature=lzZ5Nm0BGYIKh7DwcC3lnS3W2tAbsWQd3Az9HxRITjECutaMa0z9AQveNiXcOqsxaWW0xCTAN0kCoW0CTbplULojCL2c-ZdsptbbwWrl4NJ7WAlXJoqA0ss~8aRWkOZ1vl8vBXroH0I-rsbkGVdZXdk-WBimkWH329C6sVvp1ZNwjC5cz0qpmEma6u5qQBaYRk3vaLHNKgIBInDZez6h85kNIllXCN3QcNoIaWR6R29-9dOr9gsb-5oaswTMB5fXXfKWaph7cPSxiuaNWTvNiSDy7iGqsXhv2Fwu0M5Wfn8MtKUw59DU4G601wnMOj6jud0A3juf9q-T4TTp~YNc2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
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
            src="https://s3-alpha-sig.figma.com/img/c731/5f5d/4cb368052f40e06ac0cc47963e1c20c2?Expires=1704672000&Signature=UlZeBKTNEn0WpEyfDpiCWhfNn4~f3Pg2IHj5OZHXrKEly3OwI4wv2HuJZdxG-HVn-FegUfmi3pRECHk6yqr5Aj6Y02AewjfL3nxyjJtROTM2WynF4suNYvVjmCkwFRFpD8iNuspi6-4x6ZGtuSgamuEkIrAPIBknMemLdFF8vv3oQ2pQVJrCUvhqb-tWKNth6gbkiNHM4Rn0giUBqZbC7-PIru27IG-ISCkgKlBIOxTKOhta0iR5y3doiNmSZ-scXZZPyUpCGVpH-SMquP9GpIdvUbMbczBpJAzGjUJvd1Qh3zrhyDrKi~n36Fwn68iurCMviU5poquXKlA1mUSPHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Image Description"
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
              src="https://s3-alpha-sig.figma.com/img/c731/5f5d/4cb368052f40e06ac0cc47963e1c20c2?Expires=1704672000&Signature=UlZeBKTNEn0WpEyfDpiCWhfNn4~f3Pg2IHj5OZHXrKEly3OwI4wv2HuJZdxG-HVn-FegUfmi3pRECHk6yqr5Aj6Y02AewjfL3nxyjJtROTM2WynF4suNYvVjmCkwFRFpD8iNuspi6-4x6ZGtuSgamuEkIrAPIBknMemLdFF8vv3oQ2pQVJrCUvhqb-tWKNth6gbkiNHM4Rn0giUBqZbC7-PIru27IG-ISCkgKlBIOxTKOhta0iR5y3doiNmSZ-scXZZPyUpCGVpH-SMquP9GpIdvUbMbczBpJAzGjUJvd1Qh3zrhyDrKi~n36Fwn68iurCMviU5poquXKlA1mUSPHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              <img
                src="https://s3-alpha-sig.figma.com/img/4003/a472/08cf9caaf3630ad4fe62406767b2087b?Expires=1704672000&Signature=TKc~9mpp~5c1nZjHVjAr60bAfhmq4u~L-xA0z8nOKA9Ib1X4WQKD-RuZtONVUGasTNPPt-rVbW2XbBhi5iakYdyD7dOoKPvTAmXqWDVu9TBA3RW2qKu5FMVvFpBEAgMPcRv2itZBhjydQ~BzdtFOSo7xZSjpacnCxugu01WIvn0oAZQi7fwa~nQt1objKb3m5mvhfez9H89x9v-Z95-vO575Bhns9pR6ZoXS4T5f5yc36vMFfXiTVyXS8HS4uwWDw~OEvbl4C5-t~eegUJxBemYWRObWMkWPEo~Hb7yLrgDFAU6aOkRD1bqwfFQ2ELUKIW2RmbMfImiCacuE5UaInw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
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
            src="https://s3-alpha-sig.figma.com/img/700b/cbd1/9e432d99f1a9ab626f90b6ba8d5a7bc8?Expires=1704672000&Signature=VyLmKhTOh925qFEei3AXtCUdfbv~vpuHRu0wF~S10XZYvY4ahQm97qOvAlRFy2DrP54vYnkCcqOU0EKiIwIvkSdtbe1ZX6I7RZ2s5uqWWELiamD7eg-YdwWZnGPx-rnL9bjoxtqG-MoljViRFdfm-qxZYroQLUlWoFEa0hOMhUShyJLrigPshpHD2QWTdbwDnZmxx1rQngFsMfoNmr7l-c49uINJtmg58X4KHcAL3r3tvDX~g2dpI2WGif1lhK9lX4eFlEeYrmiXAlnvst528qB4eMLajkSLG1rbXF9xMpNtBjtVspr8KHGvypy58uur01nDYGHenzCuJIGSyuRP5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/700b/cbd1/9e432d99f1a9ab626f90b6ba8d5a7bc8?Expires=1704672000&Signature=VyLmKhTOh925qFEei3AXtCUdfbv~vpuHRu0wF~S10XZYvY4ahQm97qOvAlRFy2DrP54vYnkCcqOU0EKiIwIvkSdtbe1ZX6I7RZ2s5uqWWELiamD7eg-YdwWZnGPx-rnL9bjoxtqG-MoljViRFdfm-qxZYroQLUlWoFEa0hOMhUShyJLrigPshpHD2QWTdbwDnZmxx1rQngFsMfoNmr7l-c49uINJtmg58X4KHcAL3r3tvDX~g2dpI2WGif1lhK9lX4eFlEeYrmiXAlnvst528qB4eMLajkSLG1rbXF9xMpNtBjtVspr8KHGvypy58uur01nDYGHenzCuJIGSyuRP5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              <img
                src="https://s3-alpha-sig.figma.com/img/8d4f/d246/2ead2462dda1f27365c9c6e10afbcccd?Expires=1704672000&Signature=GViSM9rsKw7xMo6wFMh89MvvP3FLCTKWnfewffHE55U6-Z-tFCsdC6wPF4Kwz531TAgVJhK8cfMjL-s4NgWm7YxWsr4N1OcG3oqyaCId3lKkOJ78VfmLgltkFbr~vzA2fboSUeHG6tK0iv3-RjeMoNyAn3STVI1DW6CjGoL1XnIHqR0ngDOj36vlviawynI4FrF7cLmBswEfyXlDN3S-~ZrpeRIAYlXSPB-BvOoKfd~AzhWPcvXOrRgWuXZ4SYhGdx24YGhhLKRwQ8DX55WpZCCccysgZd-r2HYgZ0VyGpKEV5-SckghbHfOtrf9ToDoSQHnCD7szvqM7xbQgxGrFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
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
            src="https://s3-alpha-sig.figma.com/img/ba99/44d0/e8180631c23f8fc12903f5a881f83b79?Expires=1704672000&Signature=LfRvtZgTdW9A9KHRSNMdMihZVDg9K8a4pwYvU0MMfvnqo~Cfp-QtS1bwxY532YDiM1yxkIwi8XhpnD0JaPlQ67O4oyJ~klCerqn0bK13UxtC9JeEipKpH~KHqLWc5mwnNOtY~4XyD2e13T2uR~oLaDQ~kSH~~sWJHc-SVZ~UpO~bonOWfqynApIDnINkwx2CslLolQluSt8qqN5kjy0n-f8ga705kq~A1UI8DckghNnZtkPfZG9w9lFewWC5e2i~KeixbtVlRcwiofkHp~bj~f5vkNFuzH7ezJPJdIndXcYhxDkOg-ZYC6HBxyKlbPgiOiw-yaMZweV2M7z2-qpSow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/ba99/44d0/e8180631c23f8fc12903f5a881f83b79?Expires=1704672000&Signature=LfRvtZgTdW9A9KHRSNMdMihZVDg9K8a4pwYvU0MMfvnqo~Cfp-QtS1bwxY532YDiM1yxkIwi8XhpnD0JaPlQ67O4oyJ~klCerqn0bK13UxtC9JeEipKpH~KHqLWc5mwnNOtY~4XyD2e13T2uR~oLaDQ~kSH~~sWJHc-SVZ~UpO~bonOWfqynApIDnINkwx2CslLolQluSt8qqN5kjy0n-f8ga705kq~A1UI8DckghNnZtkPfZG9w9lFewWC5e2i~KeixbtVlRcwiofkHp~bj~f5vkNFuzH7ezJPJdIndXcYhxDkOg-ZYC6HBxyKlbPgiOiw-yaMZweV2M7z2-qpSow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              <img
                src="https://s3-alpha-sig.figma.com/img/7f4a/4e3c/c878131e1ff2e187627e67a1cbbfc352?Expires=1704672000&Signature=H3-lCwG~nmj9QdAfB8ITYMLqm~hlPLSrtgbTrT26LoV14eMqyOH6hYdiE2mK1CgEYLf72PjvQiyIyVqII-mTP5~ooqG0oLFFPdp6wYPrqyifhxZx2bIYDYSiNol1LCzLg358xFTM2gU07nR2A8L1SQSF4SZ0J5U6WldL2uHdv9XJn6aKoaayrLH7N9AqFhArW0vTusuY9QrqG79yyVlwEiwjOo9lG6s8GMaQ22PlmrbuXgbVnEfJHXmWo5jxvUF368R4Nct7qntEDwR7r3Als3cLmhXKajTFSiJxy9KS642HyeJsCDhhLppqgkiFgotrsFh3wpm9pxe3eddO0OKjrA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
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
            src="https://s3-alpha-sig.figma.com/img/7330/2c78/f4c6843c1926fe38e02852c7ef75cc72?Expires=1704672000&Signature=VipGeddIjWQKyR3sR4MJ-u5eSifE4sbH98StuoJEhOXDrdpROZQK3DRlVq368x-3DCa-IeWXe8V08cvCNoj4BSKOOHReUAPF0b~46Uz~G5tgHH-emMihKIP6PQLxOYliLsWt0MZcG68foXw5ARFwmBAO4wIutytJ7Fwrf7uHdKvpijFCrHkYdHH3smT-5JYRN2bbLkUId4aSKfk9xSln8jMqFkZQuF12os-PK-UW63vMvQQqJShdC5VamWfqi2p3w1oh9v31zNG3UZPvcvMWo8Vqmh12OgC4az2MhALFXaP9Sgw97p96WsYo4tzdiSa6jkw7JtVbUZToDOW5Jw9kTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/7330/2c78/f4c6843c1926fe38e02852c7ef75cc72?Expires=1704672000&Signature=VipGeddIjWQKyR3sR4MJ-u5eSifE4sbH98StuoJEhOXDrdpROZQK3DRlVq368x-3DCa-IeWXe8V08cvCNoj4BSKOOHReUAPF0b~46Uz~G5tgHH-emMihKIP6PQLxOYliLsWt0MZcG68foXw5ARFwmBAO4wIutytJ7Fwrf7uHdKvpijFCrHkYdHH3smT-5JYRN2bbLkUId4aSKfk9xSln8jMqFkZQuF12os-PK-UW63vMvQQqJShdC5VamWfqi2p3w1oh9v31zNG3UZPvcvMWo8Vqmh12OgC4az2MhALFXaP9Sgw97p96WsYo4tzdiSa6jkw7JtVbUZToDOW5Jw9kTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              <img
                src="https://s3-alpha-sig.figma.com/img/424d/70a6/4fcbc04e12a72243daeda25de01a811e?Expires=1704672000&Signature=SycpSaEHB87j3WvZeF4whdk-V-H9Y0qe6XB9q1olB5BuPlBa7GFqUsAZWgnqwg7YTmjnSsD1zfyZH3FxRCsxrs2OLMChtjIDOoyiMAuAc~qJsY4AoqXi~cVbEMsxFKbazziT1FmgVWzr2uXjcxzoDw3VFObSdGwAXT9KJgyF0msPn0S5DA-N-ygcUX1PABbySfiMEqT3xB9bqvAPzGjvuDyrmw-vZ8sox-iE0OvrnHmN4PCUM~iyQewfdkTLUPkL819sgNsEy19lw9w63Iz9u2rsg0rfozJDYb1CKE2g7qDuHTS3mxwznY4ZB4Xel6bRq3jRMPnLTwx7o9-9AcuUVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
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
