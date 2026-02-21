<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SectionGrow0 from './grow-0/SectionGrow0.vue';
import SectionGrow4 from './grow-4/SectionGrow4.vue';
import MainFooter from './footer/MainFooter.vue';
import BackToTop from './bakTop/BackToTop.vue';

const scrollContainer = ref(null);
const showBackToTop = ref(false);

// Handle scroll event
const handleScroll = () => {
  if (!scrollContainer.value) return;
  
  const scrollTop = scrollContainer.value.scrollTop;
  // Show button after scrolling 300px (adjust as needed)
  showBackToTop.value = scrollTop > 300;
};

// Smooth scroll to top
const scrollToTop = () => {
  if (!scrollContainer.value) return;
  
  scrollContainer.value.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Optional: Add scroll event listener on mount
onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
  }
});

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<template>
    <div class="sub-content">
        <SectionGrow0 />
        <div class="section grow-6">
            <div class="absolute-content flex-column content">
                <div></div>
                <div></div>
                <div class="section-middle flex-column">
                    <div class="scrollable-content flex-column" ref="scrollContainer" @scroll="handleScroll">
                        <!-- Content yote inayotakiwa kuscroll -->
                        <div class="main-content-wrapper">
                            <div class="main-content-2">
                                <router-view/>
                            </div>
                            <div class="main-footer">
                                <MainFooter />
                            </div>
                        </div>
                    </div>
                    <!-- BackToTop iko nje ya scrollable-content lakini ndani ya section-middle -->
                    <BackToTop 
                        :visible="showBackToTop" 
                        @click="scrollToTop"
                    />
                </div>
            </div>
        </div>
        <SectionGrow4 />
    </div>
</template>

<style lang="scss" scoped>

.sub-content {
    flex: 1;
    display: flex;
    overflow: hidden;
}

.section.grow-6 {
    flex-grow: 3;
    flex-shrink: 3;
    min-height: 0; /* Important for flex children */
}

.section {
    flex-direction: column;
    flex-grow: 1;
    min-height: 0; /* Important for proper scrolling */
    display: flex;
    position: relative;
}

.flex-column {
    flex-direction: column;
    display: flex;
}

.absolute-content {
    position: relative;
    height: 100%;
}

.section-middle {
    flex: 1;
    position: relative;
    overflow: hidden;
    min-height: 0; /* Important for scrolling */
}

.scrollable-content {
    -ms-overflow-style: none;
    scrollbar-width: none;
    flex-direction: column;
    flex: 1;
    display: flex;
    overflow-y: auto;
    height: 100%;
    min-height: 0;
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }
}

.main-content-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%; /* Ensures wrapper takes full height */
}

.main-content-2 {
    flex: 1 0 auto; 
    // max-width: 670px;
    border-right: 1px solid #252a2d;

}

.main-footer {
    height: 20dvh;
    color: black;
    flex-shrink: 0; /* Prevent footer from shrinking */
}

.back-to-top {
    flex-shrink: 0; /* Prevent back-to-top from shrinking */
    color: black;
}


</style>