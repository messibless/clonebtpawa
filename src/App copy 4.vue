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

// Left sidebar state kutoka useSidebar hook
const { isLeftSidebarOpen, openLeftSidebar, closeLeftSidebar } = useSidebar()

// Provide left sidebar functions to child components
provide('leftSidebar', {
  isOpen: isLeftSidebarOpen,
  open: openLeftSidebar,
  close: closeLeftSidebar
})

// Provide account sidebar functions to child components
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
        
        
        <!-- Left Sidebar Component -->
        <!-- <LeftSidebarMenu 
          :is-open="isLeftSidebarOpen" 
          @close="closeLeftSidebar" 
        /> -->
        <!-- Main Container -->
        <div class="main-container">
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
/* @media screen and (min-width: 960px) {
  .main-app{
    padding-left: 80px;
    padding-right: 80px;
  }
} */

@media screen and (min-width: 1200px) {
  .main-app{
    padding-left: 200px;
    padding-right: 200px;
  }
}

.vue-app {
  flex-direction: column;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  color: #fff;
  position: relative; /* ADD THIS - kwa ajili ya sidebar positioning */
}

.main-container {
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow: hidden;
  transition: margin-left 0.3s ease; /* OPTIONAL - smooth transition when sidebar opens */
}

@media (min-width: 960px) {
  .vue-app {
    background: #fff;
  }
}

/* Sidebar overlay - inaweza kuongezwa kwenye LeftSidebarMenu component */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
}
</style>