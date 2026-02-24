<script setup>

import HeadBannerImage from '../../../assets/media/lg_990x272_4_cffeb66092.webp' 
import HeadBannerImage2 from '../../../assets/media/lg_ENG_990x272jetx_new_max_multiplier_1_d51ba7c9f9.webp'
import HeadBannerImage3 from '../../../assets/media/lg_990x272_51_0324530c83.webp' 
import AfricanLeague from '../../../assets/media/noun_europe_188772_1_de866e5d6c.svg'
import EuropeanLeague from '../../../assets/media/Europe_43bd11c816.svg'
import leagueShortcut from './league-shortcut.vue';
import FootballBannerImage from '../../../assets/media/lg_990x272_1_4fd3446df7.webp'

import {dummyGamesData} from './data/dummyGameData'
import Football from './components/Football.vue';
import LiveMatches from './components/LiveMatches.vue';
import CasionoGames from './components/CasionoGames.vue';
import Efootball from './components/Efootball.vue';


import {ref,onMounted,computed} from 'vue'
import BasketBall from './components/BasketBall.vue';
import Tennis from './components/Tennis.vue';



import Loader from '../../../assets/loader/default-spinner-BIEd0VkD.gif'


const isLoading = ref(true);
const games = ref([])
onMounted(() => {
    // set time out

    setTimeout(()=>{
       
    
    // Store in localStorage
    // localStorage.setItem('settledBets', JSON.stringify(settledBets.value));
        isLoading.value = false;
        games.value = dummyGamesData;


    },1500)
  
    
   
});





</script>
<template>
                           <div data-v-fc0cbc39="" class="generic-page router-view">
                            
                            <div data-v-fc0cbc39="" class="generic-page-content">
                               
                                <div data-v-fc0cbc39="" class="generic-page-content-wrapper scrollable-container">



                                    <!-- LOADER SECTION -->
                    <div v-if="isLoading" class="loading-container">
                        <img :src="Loader" alt="Loading..." />
                    </div>
                <div data-v-fc0cbc39=""  v-else class="generic-page-content-wrapper ">
                    <div data-v-7c473a5b="" data-v-fc0cbc39="" class="" data-test-id="tag-BannersCollection"
                        data-banner-collection="" data-test-class="cmsTag"><a data-v-7c473a5b=""
                            href="/1up?utm_medium=nli&amp;utm_campaign=1up_dc" class=""
                            data-test-id="nav--1up?utm_medium=nli&amp;utm_campaign=1up_dc-link"><img data-v-5455027b=""
                                data-v-7c473a5b="" :src="HeadBannerImage3"></a></div>

                    <!-- League Shortcut - Container yenye width control -->
                    <div class="league-shortcut-container">
                                    <!-- <leagueShortcut /> -->
                                </div>

       

                    <div data-v-5cd8c607="" data-v-fc0cbc39="" class="events" data-test-id="tag-Events" data-test-class="cmsTag">
                        <div data-v-4310f641="" data-v-5cd8c607="" class="game-category" info-category-id="">
                            

                            <!-- football start here -->
                            <Football/>
                            
                            <LiveMatches :games="games"/>
                            <CasionoGames/>
                            <Efootball/>
                            <BasketBall/>
                            <Tennis/>
            
                            <!-- football endCard  here -->


                        
                        </div>
                    </div>
                
                </div>

</div>
</div>
</div>

</template>



<style lang="scss" scoped>

.loading-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px; 
}
.loading-container img{
    height: 32px;
    width: 32px;
}
.league-shortcut-container {
    // width: 650px; 
    max-width: inherit;
}
.router-view {
    position: relative;
}

img[data-v-5455027b] {
    width: 100%;
}
img {
    overflow-clip-margin: content-box;
    overflow: clip;
}


.events[data-v-5cd8c607] {
    position: relative;
}

.page-headline.category[data-v-97dcd69f] {
    background: #f4f5f0;
}

.page-headline[data-v-97dcd69f] {
    white-space: nowrap;
    background: #fff;
    border-bottom: 1px solid #e6e7e2;
    padding: 10px;
    position: relative;
}

.pointer {
    cursor: pointer;
}

.page-headline .page-headline-title[data-v-97dcd69f] {
    vertical-align: middle;
    word-break: break-word;
    white-space: normal;
    text-align: left;
    margin: 0;
    padding-left: 34px;
    padding-right: 18px;
    display: inline-block;
    position: relative;
    color: #252a2d;
}

.page-headline .page-headline-title[data-v-97dcd69f],
.page-headline .page-headline-title-small[data-v-97dcd69f] {
    font-weight: 700;
}

.page-headline .page-headline-title[data-v-97dcd69f] {
    font-size: 22px;
    line-height: 26px;
}


.page-headline svg.page-headline-icon[data-v-97dcd69f] {
    fill: #000;
    width: 24px;
    height: 24px;
    display: block;
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
}



/* Hakikisha content ina nafasi ya kutosha */
.generic-page-content-wrapper {
  padding-bottom: 20px; /* Ongeza padding chini ili content isifanye mshono */
}


.page-headline .page-headline-count[data-v-97dcd69f] {
    justify-content: center;
    align-items: center;
    gap: 8px;
    display: flex;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}

.box-count.font-size-bigger[data-v-fa100c61],
.box-count[data-v-fa100c61] {
    font-weight: 400;
}

.box-count.font-size-bigger[data-v-fa100c61] {
    font-size: 12px;
    line-height: 16px;
}

.box-count[data-v-fa100c61] {
    color: #252a2d;
    background-color: #d9edb2;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    min-width: 16px;
    padding: 0 4px;
    display: flex;
}

svg.icon-size-little[data-v-02f45589],
img.icon-size-little[data-v-02f45589] {
    width: 12px;
    height: 12px;
}

.game-events-container[data-v-ea5d556a] {
    border-bottom: 1px solid #e6e7e2;
    padding: 12px;
}

.game-event-wrapper[data-v-ea5d556a] {
    width: 100%;
}

.pointer {
    cursor: pointer;
}

.game-event-header[data-v-ea5d556a] {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    display: flex;
}

.game-event-header-left-content[data-v-ea5d556a],
.game-event-header-right-content[data-v-ea5d556a] {
    font-weight: 400;
}

.game-event-date[data-v-ea5d556a],
.game-event-subtitle[data-v-ea5d556a],
.game-event-header-left-content[data-v-ea5d556a],
.game-event-header-right-content[data-v-ea5d556a] {
    font-size: 14px;
    line-height: 18px;
}

.game-event-header-left-content[data-v-ea5d556a],
.game-event-header-right-content[data-v-ea5d556a] {
    font-weight: 400;
}

.game-event-date[data-v-ea5d556a] {
    font-weight: 700;
}

.game-event-date[data-v-ea5d556a],
.game-event-subtitle[data-v-ea5d556a],
.game-event-header-left-content[data-v-ea5d556a],
.game-event-header-right-content[data-v-ea5d556a] {
    font-size: 14px;
    line-height: 18px;
}

.type-best-odds[data-v-891f4695] {
    vertical-align: middle;
    margin-right: 0;
    padding: 0;
}

.badge {
    text-align: center;
    color: #252a2d;
    background: #ffffff border-box;
    border: 0;
    border-radius: 0;
    margin-right: 7px;
    padding: 2px 7px;
    display: inline-block;
    font-size: 13px;
    line-height: 16px;
}

.badge,
.button.button-bordered,
.indicator-grey,
.indicator-white,
.indicator-green,
.indicator-yellow,
.indicator-orange,
.indicator-red,
.indicator-green-blank {
    font-weight: 400;
}

.badge,
.button.button-bordered,
.indicator-grey,
.indicator-white,
.indicator-green,
.indicator-yellow,
.indicator-orange,
.indicator-red,
.indicator-green-blank {
    font-weight: 400;
}

.type-best-odds .icon[data-v-891f4695] {
    margin-right: 0;
}

svg.icon-size-huge[data-v-02f45589],
img.icon-size-huge[data-v-02f45589] {
    width: 20px;
    height: 20px;
}

.icon[data-v-891f4695] {
    margin-right: 4px;
}

.game-best-odds-badge[data-v-ea5d556a] {
    margin-left: 4px;
}

.type-best-odds[data-v-891f4695] {
    vertical-align: middle;
    margin-right: 0;
    padding: 0;
}

.badge {
    text-align: center;
    color: #252a2d;
    background: #fff border-box;
    border: 0;
    border-radius: 0;
    margin-right: 7px;
    padding: 2px 7px;
    display: inline-block;
}

.badge,
.button.button-bordered,
.indicator-grey,
.indicator-white,
.indicator-green,
.indicator-yellow,
.indicator-orange,
.indicator-red,
.indicator-green-blank {
    font-weight: 400;
}

.type-best-odds .icon[data-v-891f4695] {
    margin-right: 0;
}

svg.icon-size-huge[data-v-02f45589],
img.icon-size-huge[data-v-02f45589] {
    width: 20px;
    height: 20px;
}

.icon[data-v-891f4695] {
    margin-right: 4px;
}

.game-scoreboard[data-v-ea5d556a] {
    width: 100%;
    margin-bottom: 4px;
}

.scoreboard-period[data-v-43935c7e] {
    align-items: center;
    column-gap: 4px;
    width: 100%;
    display: grid;
}

.scoreboard-period-participant-name-wrapper[data-v-43935c7e] {
    align-items: center;
    gap: 6px;
    display: flex;
}

.scoreboard-period-participant-name[data-v-43935c7e],
.scoreboard-participant-name[data-v-43935c7e],
.scoreboard-participant-score[data-v-43935c7e],
.scoreboard-period-score-cell.bigger[data-v-43935c7e] {
    font-weight: 700;
}

.scoreboard-period-participant-name[data-v-43935c7e],
.scoreboard-participant-name[data-v-43935c7e],
.scoreboard-participant-score[data-v-43935c7e] {
    font-size: 18px;
    line-height: 24px;
}

.scoreboard-period-participant-name-wrapper[data-v-43935c7e] {
    align-items: center;
    gap: 6px;
    display: flex;
}

.scoreboard-period-participant-name[data-v-43935c7e],
.scoreboard-participant-name[data-v-43935c7e],
.scoreboard-participant-score[data-v-43935c7e],
.scoreboard-period-score-cell.bigger[data-v-43935c7e] {
    font-weight: 700;
}

.scoreboard-period-participant-name[data-v-43935c7e],
.scoreboard-participant-name[data-v-43935c7e],
.scoreboard-participant-score[data-v-43935c7e] {
    font-size: 18px;
    line-height: 24px;
}

a {
    cursor: pointer;
    user-select: none;
    color: #252a2d;
    text-decoration: none;
}

.game-event-breadcrumbs[data-v-ea5d556a] {
    color: #8e9398;
    margin-bottom: 7px;
    font-style: normal;
}

.game-event-minutes[data-v-ea5d556a],
.game-event-breadcrumbs[data-v-ea5d556a] {
    font-weight: 400;
}

.game-event-minutes[data-v-ea5d556a],
.game-event-breadcrumbs[data-v-ea5d556a] {
    font-size: 12px;
    line-height: 16px;
}

.betline-list[data-v-5d6a591a] {
    flex-direction: row;
    flex: 1;
    width: 100%;
    display: flex;
}

.betline-list-data[data-v-5d6a591a] {
    flex-direction: column;
    flex: 1;
    width: 100%;
    display: flex;
}

.betline-market[data-v-5d6a591a]:last-child {
    margin-bottom: 0;
}

.betline-market[data-v-5d6a591a] {
    margin-bottom: 16px;
}

.event-bets[data-v-00428546] {
    text-align: center;
    flex-wrap: nowrap;
    flex: 1;
    justify-content: stretch;
    align-items: stretch;
    margin: 0;
    line-height: 16px;
    display: flex;
}

.chunks[data-v-00428546] {
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 8px;
    max-width: 100%;
    display: flex;
}

.chunk[data-v-00428546] {
    width: 100%;
    display: flex;
}

.bet-price[data-v-00428546] {
    margin-right: 8px;
}

.event-bet-wrapper[data-v-9fc495af] {
    flex: 1;
    display: flex;
    overflow: hidden;
}

.event-bet[data-v-9fc495af] {
    cursor: pointer;
    color: #252a2d;
    white-space: nowrap;
    background: #f4f5f0;
    border: 1px solid #e6e7e2;
    border-radius: 4px;
    width: 100%;
    display: flex;
}

.event-bet .anchor-wrap[data-v-9fc495af] {
    justify-content: space-between;
    width: 100%;
    display: flex;
}

.event-bet .event-selection[data-v-9fc495af] {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 0;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    font-weight: 400;
}

.event-bet .event-selection[data-v-9fc495af],
.event-bet .event-odds[data-v-9fc495af] {
    padding: 7px 10px;
}

.event-bet .event-odds[data-v-9fc495af],
.event-bet .event-selection[data-v-9fc495af] {
    font-size: 14px;
    line-height: 18px;
}

.event-bet .event-odds[data-v-9fc495af] {
    white-space: nowrap;
    text-align: left;
    border-radius: 0;
    flex-shrink: 0;
    font-weight: 700;
}

.event-bet .event-odds[data-v-9fc495af],
.event-bet .event-selection[data-v-9fc495af] {
    font-size: 14px;
    line-height: 18px;
}

.event-bet-wrapper[data-v-9fc495af] {
    flex: 1;
    display: flex;
    overflow: hidden;
}

.event-bet .anchor-wrap[data-v-9fc495af] {
    justify-content: space-between;
    width: 100%;
    display: flex;
}

.betline-count-button[data-v-74c3b014] {
    white-space: nowrap;
    color: #252a2d;
    background: 0 0;
    border: 1px solid #e6e7e2;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    min-width: 48px;
    padding: 7px 6px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    display: flex;
}

svg.icon-size-very-small[data-v-02f45589],
img.icon-size-very-small[data-v-02f45589] {
    width: 10px;
    height: 10px;
}

.event-bet .anchor-wrap .icon-hot[data-v-9fc495af] {
    fill: #ff7a00;
    margin-right: 4px;
}

.event-bet .anchor-wrap .price-icon[data-v-9fc495af] {
    vertical-align: top;
    width: 14px;
    height: 14px;
    margin-top: -4px;
}
.event-counter[data-v-4310f641] {
    color: #252a2d;
    text-align: center;
    padding: 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
}
.event-counter>span[data-v-4310f641] {
    text-decoration: underline;
}
.pointer {
    cursor: pointer;
}
.event-counter>svg[data-v-4310f641] {
    margin-left: 8px;
}
svg.icon-size-very-small[data-v-02f45589], img.icon-size-very-small[data-v-02f45589] {
    width: 10px;
    height: 10px;
}
</style>