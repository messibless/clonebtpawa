<script setup>
    import SectionGrow0 from './grow-0/SectionGrow0.vue';
    import SectionGrow6 from './grow-6/SectionGrow6.vue';
    import SectionGrow4 from './grow-4/SectionGrow4.vue';
// import {}    
    
   
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

                    <div class="main-content-2">
                        <router-view/>
 
                    </div>
                    <div class="main-footer">
                        main foota
                    </div>
                    BAck to top component
                </div>
            </div>
        </div>
    </div>
            <SectionGrow4 />
        </div>
    </template>



<style lang="scss" scoped>
.main-footer{
    height: 20dvh;
}
    .sub-content {
    flex: 1;
    display: flex;
    overflow: hidden;
}
.section.grow-6 {
    flex-grow: 3;
    flex-shrink: 3;
}

.section {
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    display: flex;
    position: relative;
}

.flex-column {
    flex-direction: column;
    display: flex;
}

.absolute-content {
    position: relative;
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
}

.flex-column {
    flex-direction: column;
    display: flex;
}

.section-middle {
    flex: 1;
    position: relative;
    overflow: hidden;
}

.scrollable-content {
    -ms-overflow-style: none;
    scrollbar-width: none;
    flex-direction: column;
    flex: 1;
    display: flex;
    overflow-y: auto;
}

.main-content-2 {
    flex: 1 0 100%;
}

</style>