<script setup>
    import InternationalFlag from '../../../assets/img/flags/international.png';
  
    // import InternationalFlag from '../../../assets/img/flags/international.png';

    import LeftSidebarMenu from './LeftSidebarMenu.vue';

    import {inject} from 'vue';

    const leftSidebar = inject('leftSidebar');

    // Function ya kufunga sidebar
const closeLeftSidebar = () => {
  if (leftSidebar) {
    leftSidebar.close()
  }
}
</script>

<template>
  <div class="section grow-0">
    <div class="absolute-content content">

      <Transition name="fade">
        <div v-if="leftSidebar?.isOpen.value" class="sidebar-overlay" @click="closeLeftSidebar"></div>
      </Transition>

      <div class="absolute-content content">
        <Transition name="slide-left">
          <LeftSidebarMenu v-if="leftSidebar?.isOpen.value" @close="closeLeftSidebar" class="account-sidebar-child" />
        </Transition>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
    .section.grow-0 {
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
}
.section {
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    display: flex;
    position: relative;
}

.absolute-content {
    position: relative;
    height: 100%;
    width: 100%;
    // top: 0;
    // bottom: 0;
    // left: 0;

}

.account-sidebar-child {
    position: fixed !important; /* Muhimu: Inafuata parent yake */
    top: 0;
    // left: 200px !important;
    left: 0 !important;
    margin-left: 200px !important;
    /* Hakikisha ina z-index ya juu zaidi */
    z-index: 10003 !important;
    
    /* Ongeza transition kwa smoother movement */
    transition: right 1s ease-in !important;
    
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 1s ease-in-out !important;
}

/* Kama sidebar inatokea KULIA kwenda KUSHOTO (Slide in from right) */
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%) !important; 
  opacity: 0 !important;
}
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

/* Style ya Overlay */
.sidebar-overlay {
  position: fixed !important;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent; /* Rangi ya giza kiasi */
  z-index: 10002; /* Chini kidogo ya sidebar (ambayo ni 10003) */
  cursor: pointer;
}


/* Transition ya kufifia kwa Overlay (Fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



</style>