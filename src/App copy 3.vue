<script setup>
import { provide, ref } from 'vue'
import SvgIcons from './components/svgIcons/SvgIcons.vue';
import Header from './components/Header/Header.vue';
import SubContent from './components/Middle/SubContent.vue';

import { useSidebar } from './components/Middle/grow-0/useSidebar.js'
import LeftSidebarMenu from './components/Middle/grow-0/LeftSidebarMenu.vue'

// State ya account sidebar
const isAccountSidebarOpen = ref(false)

const openAccountSidebar = () => {
  isAccountSidebarOpen.value = true
}

const closeAccountSidebar = () => {
  isAccountSidebarOpen.value = false
}

const { isLeftSidebarOpen, openLeftSidebar, closeLeftSidebar } = useSidebar()

// Provide sidebar functions to child components
provide('leftSidebar', {
  open: openLeftSidebar,
  close: closeLeftSidebar
})

// Provide kwa components zote
provide('accountSidebar', {
  isOpen: isAccountSidebarOpen,
  open: openAccountSidebar,
  close: closeAccountSidebar
})
</script>

<template>
  <div id="app" class="main-app">
    <div class="app">
      <div class="vue-app">
        <SvgIcons/>
        <div class="main-container"> <!-- ONDOA scrollable-content class hapa -->
          <Header/>
          <SubContent/>
          <!-- <div class="bottom-navigation-wrapper">
            bottom navigator
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
/* .bottom-navigation-wrapper{
  height: 40dvh;
  background-color: #cf5656;
} */

/* @media screen and (min-width: 960px) {
  .main-app{
    padding-left: 80px;
    padding-right: 80px;
  }
} */

/* @media screen and (min-width: 1010px) {
  .main-app{
    padding-left: 160px;
    padding-right: 160px;
  }
} */

@media screen and (min-width: 1200px) {
  .main-app{
    /* padding-left: 155px;
    padding-right: 155px; */
    padding-left: 200px;
    padding-right: 200px;
  }
}

.vue-app {
  flex-direction: column;
  width: 100%;
  height: 100vh; /* ADD THIS */
  display: flex;
  overflow: hidden; /* FANYA hidden, sio scroll */
  color: #fff;
}



.main-container {
  flex-direction: column;
  flex: 1; /* ADD THIS */
  display: flex;
  overflow: hidden; /* FANYA hidden */
  /* background-color: blue; */
}

@media (min-width: 960px) {
  .vue-app {
    background: #fff;
    /* max-width: 960px; */
  }
}
</style>