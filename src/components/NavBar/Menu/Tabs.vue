<script setup>
import {Icon} from "@iconify/vue";
import StracturesFlex from "@/components/StracturesFlex.vue";
const routes = ref([
  { link: "/"},
  { link: "/contact"},
  { link: "/about"}
])

import {useConfigureStore} from "@/stores/configure.js";
import {onMounted, ref, watch} from "vue";
const configureStore = useConfigureStore()
const {themes,trans} = useConfigureStore();

const mode = ref(false)
const theme = window.localStorage.getItem("theme");
const darkThemeMq = ref(window.matchMedia("(prefers-color-scheme: dark)"));

onMounted(()=> {
  if (theme) {
    (theme === `dark`) ? configureStore.themeNum=0 : configureStore.themeNum=1 ;
  } else {
    (darkThemeMq.value.matches) ? configureStore.themeNum=0 : configureStore.themeNum=1;
    (darkThemeMq.value.matches) ? window.localStorage.setItem(`theme`,`dark`) : window.localStorage.setItem(`theme`,`light`);
  }
  document.body.style.backgroundImage = `${configureStore.themes[configureStore.themeNum].backgroundColor}`;
  configureStore.open = false;
})

watch(mode, ()=>{
  (configureStore.themeNum===1) ? configureStore.themeNum=0 : configureStore.themeNum=1;
  (configureStore.themeNum===1) ? window.localStorage.setItem(`theme`,`light`) : window.localStorage.setItem(`theme`,`dark`);
  document.body.style.backgroundImage = `${configureStore.themes[configureStore.themeNum].backgroundColor}`;
})
</script>

<template>
  <StracturesFlex :column="true" justify="center" items="center" class="w-[100%]">
    <RouterLink v-for="(value,index) in routes"
                @click="configureStore.open=false"
                :active-class="(configureStore.themeNum === 0)
                                  ? `text-yellow-400 after:hidden text-3xl bg-eggplant-500`
                                  : `bg-weather-800 brightness-150 text-yellow-400 after:hidden text-3xl`"
                :class="[(configureStore.themeNum === 0) ? `hover:bg-eggplant-500` : `hover:bg-weather-800 brightness-125`,themes[configureStore.themeNum].text_trans, trans]"
                class="text-white w-[100%] text-center py-4 text-2xl font-semibold
                       max-md:after:hidden after:bg-yellow-400 after:relative after:block after:left-0 after:w-[0%] hover:after:w-[100%] after:h-0.5 after:duration-500 after:ease-in after:mt-0.5"
                :to="value.link">
      {{$t(`nav.link${index+1}`)}}</RouterLink>
    <div class="mt-2 py-0.5 active:outline-0 focus:outline-0 hidden max-sm:block">
      <button type="button" @click="mode=!mode" :class="[(configureStore.themeNum===0) ? `rotate-0` : `rotate-180` ,trans]" :title="$t(`nav.theme`)" class="hover:scale-110 hover:brightness-150">
        <Icon width="30" :class="[themes[configureStore.themeNum].about,trans]" icon="line-md:light-dark-loop"/></button>
    </div>
  </StracturesFlex>
</template>
