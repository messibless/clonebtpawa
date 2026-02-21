<script setup>
import SectionGrow0 from './grow-0/SectionGrow0.vue';
import SectionGrow6 from './grow-6/SectionGrow6.vue';
import SectionGrow4 from './grow-4/SectionGrow4.vue';
import MainFooter from './footer/MainFooter.vue';
</script>

<template>
    <div class="sub-content">
        <SectionGrow0 />
        <!-- <SectionGrow6 /> -->
        <div class="section grow-6">
            <div class="absolute-content flex-column content">
                <div></div>
                <div></div>
                <div class="section-middle flex-column">
                    <div class="scrollable-content flex-column">
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