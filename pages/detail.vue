<script setup>
  const route = useRoute();
  const idRecherche = ref(route.params.id);
  const titreRecherche = ref(route.params.title);
  console.log(route.query);
  const videoData = ref(null);

  //a chaque fois que les datas de la route change
 
  if(route.query){
    watch(() => route.query, (newQuery) => {
      if (newQuery) {
        console.log(JSON.parse(newQuery.data));
        videoData.value = JSON.parse(newQuery.data);
      }
    });
    videoData.value = JSON.parse(route.query.data);
  }
  let video = videos.find((objet) => objet.id.toString() === idRecherche.value);
 

  
  if (!video) {
    console.log("video non trouvée");
    console.log(videoData.value.id);
    video = {
      titre: titreRecherche.value,
      chaine: "Nom de la chaîne",
      nombre_vues: 0,
      logo_chaine: "logo_chaine",
      miniature: "miniature",
      date_sortie: "2021-09-01T00:00:00Z",
      temps: "PT0S",
      link: `https://www.youtube.com/embed/${videoData.value.id}`,
    };
  }
  console.log('https://yt3.ggpht.com/' + route.params.logo);
  </script>
  
  <template>
    <div class="flex flex-col justify-center items-left">
      <div class="flex flex-col gap-10 md:gap-0 md:flex-row">
        <div class="flex flex-col gap-6">
        <div
          class="h-[16rem] w-screen sm:w-[30rem] sm:h-[20rem] md:w-[900px] bg-gray-800 md:h-[500px] rounded-lg p-1 md:p-4 shadow-lg group flex justify-center flex flex-col text-white font-bold"
        >
          <iframe
            width=""
            height="480"
            :src="`https://www.youtube.com/embed/${videoData.id}`"
            frameborder="0"
            allowfullscreen
            autoplay
          ></iframe>
        </div>
        <div class="md:h-[8rem]  bg-gray-800  rounded-xl w-screen md:w-[56.5rem] gap-4 flex flex-col   items-start p-5  md:text-xl">
          <div class="flex  w-full justify-between">
            <p class="text-white font-sans">{{ videoData.titre }}</p>
            <p class="text-white font-sans text-[1rem] flex gap-2">{{ videoData.nombre_vues }} <img src="../assets/img/vues.svg" alt=""></p>
          </div>
          

          <div class="flex flex-col md:flex-row md:w-[53rem] gap-6 md:gap-0 justify-between ">
            <div class="flex gap-4 bg-gray-900 rounded-xl p-2 h-[3rem]">
              <img
              :src="videoData.logo_chaine"
              alt=""
              class=" rounded-lg h-full "
            />
            <div class="flex flex-col justify-around items-start">
              <p class="text-white font-bold text-sm">{{videoData.chaines}}</p>
              <p class="text-neutral-300 text-sm">{{videoData.nombre_vues}} Abonnés</p>
            </div>   
            
            <div class="h-full flex items-center ">
              <button class="bg-gray-700 hover:bg-gray-800 duration-200 p-2 w-20 h-7 flex items-center  text-white text-sm rounded-lg">S'abonner</button>
            
            </div>     
  
          </div>
          <div class="flex gap-4 rounded-xl p-2 h-[3rem] w-fit bg-gray-900  items-center">
            <button class="hover:bg-gray-700 duration-300 bg-gray-900 p-2 flex gap-2 h-10 w-20   items-center justify-center text-white text-sm rounded-lg">
              <img src="/assets/img/like.svg" alt="">
            </button>
            
            <button class="hover:bg-gray-700 duration-300 bg-gray-900 p-2  h-10 w-20 flex items-center justify-center text-white text-sm rounded-lg">
              <img src="/assets/img/dislike.svg" alt="">
            </button>
            </div>
          </div>
        </div>
      </div>
      <p class="md:hidden text-white font-bold pl-6">Suggestions</p>
        <div class="w-screen md:w-fit flex flex-col justify-start items-center gap-4">
              <VideoBoxDetail
                v-for="video in videos"
                :id="video.id"
                :titre="video.titre"
                :chaine="video.chaine"
                :nombre_vues="video.nombre_vues"
                :logo_chaine="video.logo_chaine"
                :miniature="video.miniature"
                :date_sortie="video.date_sortie"
                :temps="video.temps"
              />
        </div>
      </div>
    </div>
    <div class="h-20"></div>
  </template>
  
  <style>
  body {
    background-color: #111827;
    overflow-x: hidden;
  }
  </style>
  