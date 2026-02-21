<script setup>
import { provide, ref } from 'vue'
import SvgIcons from './components/svgIcons/SvgIcons.vue';
import Header from './components/Header/Header.vue';
import SubContent from './components/Middle/SubContent.vue';

// State ya account sidebar
const isAccountSidebarOpen = ref(false)

const openAccountSidebar = () => {
  isAccountSidebarOpen.value = true
}

const closeAccountSidebar = () => {
  isAccountSidebarOpen.value = false
}

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
        <div class="scrollable-content main-container">
          <Header/>
          <SubContent/>
          <div class="bottom-navigation-wrapper">
            bottom navigator
          </div>
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
@media screen and (min-width: 960px) {
    .main-app{
            padding-left: 80px;
            padding-right: 80px;
        }
        
    }
    @media screen and (min-width: 1010px) {
      .main-app{
            padding-left: 160px;
            padding-right: 160px;
        }
        
    }
    @media screen and (min-width: 1200px) {
      .main-app{
            padding-left: 200px;
            padding-right: 200px;
        }
        
    }
   
  .vue-app {
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    color: #fff;
  }
  
  .scrollable-content {
    -ms-overflow-style: none;
    scrollbar-width: none;
    flex-direction: column;
    flex: 1;
    display: flex;
    overflow-y: auto;
  }
  
  .main-container {
    flex-direction: column;
    width: 100%;
    display: flex;
    /* position: absolute; */
    /* top: 0; */
    /* bottom: 0; */
    /* left: 0; */
  }
  
  @media (min-width: 960px) {
    .vue-app {
      background: #fff;
      max-width: 960px;
      margin: 0 auto;
    }
  }
  

  
  </style>