<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router'
import settledBetsData from './assets/settledBetsData';
import LoaderImg from '../../../assets/loader/default-spinner-BIEd0VkD.gif'
import { useBets } from './composables/useBets'
import IconEye from './assets/visibility_off_24dp_000_FILL0_wght400_GRAD0_opsz24.png'
import { useBetsStore } from '../../../stores/betsStore'

const { settledBets, fetchBets, loading } = useBets()
const router = useRouter();
const betsStore = useBetsStore()


const allSettledBets = ref([]);
const isLoading = ref(true);
const isLoadingMore = ref(false);
const displayLimit = ref(11);

// Hii itatumika kushika element ya mwisho wa list
const loadMoreTrigger = ref(null);

const displayedBets = computed(() => {
    return allSettledBets.value.slice(0, displayLimit.value);
});

// Logic ya ku-load data zaidi
const loadMore = () => {
    if (isLoadingMore.value || displayLimit.value >= allSettledBets.value.length) return;

    isLoadingMore.value = true;
    
    // Simulizi ya ku-load (Sekunde 1)
    setTimeout(() => {
        displayLimit.value += 5;
        isLoadingMore.value = false;
    }, 1000);
};

onMounted(async () => {

await fetchBets()

 
allSettledBets.value = settledBets.value
isLoading.value = false
 // Save to localStorage
 localStorage.setItem('settledBets', JSON.stringify(allSettledBets.value))

setupObserver()
})

const setupObserver = () => {
    // IntersectionObserver inaangalia kama element iko "visible"
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadMore();
        }
    }, {
        rootMargin: '100px', // Anza ku-load kabla haijafika mwisho kabisa (100px kabla)
    });

    // Subiri kidogo DOM iwe tayari
    nextTick(() => {
        if (loadMoreTrigger.value) {
            observer.observe(loadMoreTrigger.value);
        }
    });
};

const goToBetDetails = (bet) => {
  // Save to store before navigating
  betsStore.setCurrentBet(bet)
  
  router.push({
    path: `/bets/regular/${bet.id}`
    // No need for state now
  })
}





const formatMoney = (value) => {
  if (value === undefined || value === null) return '0.00'
  
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}







// Hii inatosha - inachukua displayedBets na ku-calculate payout

const displayedBetsWithDetails = computed(() => {
  return displayedBets.value.map(bet => {
    const stake = Number(bet.stake) || 0
    const odds = Number(bet.total_odds) || 0
    
    const potential = (odds - 1) * stake
    const tax = potential * 0.12
    const payout = potential - tax + stake
    
    return {
      ...bet, // Keep all original bet data
      calculatedPayout: formatMoney(payout) // Add calculated payout
    }
  })
})
</script>

<template>
    <div data-v-beccd7ea="" class="bets-list-container">
   
                       <!-- LOADER SECTION -->
                       <div v-if="loading" class="loading-container">
                           <img :src="LoaderImg" alt="Loading..." />
                       </div>
   
               <div v-else>
                   <section data-v-beccd7ea="" aria-hidden="false" class="tab-section">
                      
                    <div class="SettledBetsFilterToggle_container__xZZbS">
     
                        <img :src="IconEye" alt="" srcset="">
                    <div class="SettledBetsFilterToggle_content__G1aSL"><span
                            class="SettledBetsFilterToggle_label__gJQvm">Hide lost betslips</span><span
                            class="SettledBetsFilterToggle_helperText__pQPr2">Only won bets will be shown</span></div>
                    <div class="Toggle_toggleContainer__pZU0c">
                        <div class="Toggle_toggle__QrBXX Toggle_toggleBinaryTheme__1nn8h"><button type="button"
                                class="Toggle_toggleButton__5dYiw Toggle_active__u5wYc"></button><button type="button"
                                class="Toggle_toggleButton__5dYiw"></button></div>
                    </div>
                </div>

                       <div >
                           <div  v-if="allSettledBets.length === 0"  data-v-34417751="" class="bet" data-test-id="bet-settled-9336337628" data-test-class="bet-settled">
   
                               <div class="empty-state">
                                   No settled bets found
                               </div>
   
                           </div>
   
                           <div v-else>
   
                           
                               <div 
                               v-for="bet in displayedBetsWithDetails" 
                               :key="bet.id"
                               @click="goToBetDetails(bet)"

                              
                               
                               data-v-34417751="" class="bet" data-test-id="bet-settled-9336337628" data-test-class="bet-settled">
                              
   
                                       <div data-v-34417751="" class="bet-line bet-header">
                                           <div data-v-34417751="" class="header-container">
                                               <div data-v-34417751="" class="header-title"><span data-v-34417751="" class="time">
                                                       {{ bet.time }},&nbsp; </span> <span data-v-34417751="" class="date">{{ bet.date }}</span> <span
                                                       data-v-34417751="" class="bet-live-now"></span></div>
                                               <div data-v-34417751="" class="id" data-test-id="bet-id">ID: #{{ bet.id }} <!----></div>
                                           </div>
                                       </div>
                                       <div data-v-34417751="" class="bet-line bet-status">
                                           <div data-v-34417751="" class="result-container"><span data-v-34417751=""
                                                   class="result-text result-text-grey">Result:
                                               </span> <span data-v-34417751="" class="positive status-text">WON <span data-v-891f4695=""
                                                       data-v-34417751="" class="badge type-win mode-medium badge-result"><!---->
                                                       </span></span></div>
                                       </div>
                                       <div data-v-34417751="" class="bet-status-line"></div>
                                       <div data-v-34417751="" class="bet-line bet-body">
                                           <div data-v-34417751="" class="bet-detail"><span data-v-34417751="" class="label">STAKE</span>
                                               <div data-v-34417751="" class="currency-container">
                                                   <div data-v-34417751="" class="currency value"> <span class="amount">{{ formatMoney(bet.stake) }}</span>
                                                       </div>
                                               </div>
                                           </div>
                                           <div data-v-34417751="" class="bet-detail"><span data-v-34417751="" class="label">ODDS</span> <span
                                                   data-v-34417751="" class="value">{{ bet.total_odds }}</span> <!----></div>
                                           <div data-v-34417751="" class="bet-detail end"><span data-v-34417751="" class="label">PAYOUT</span>
                                               <div data-v-34417751="" class="currency-container bold-symbol">
                                                   <div data-v-34417751="" class="currency value"> <span class="symbol contrast">TSh</span>
                                                       <span class="amount">{{ bet.calculatedPayout }}</span> <!----></div>
                                               </div> 
                                           </div>
                                       </div>
   
                           </div>
                           <div ref="loadMoreTrigger" class="load-more-trigger">
                            <div v-if="isLoadingMore" class="load-more-loader">
                                <img :src="LoaderImg" alt="Loading more..." />
                            </div>
                        </div>

                        <div v-if="displayLimit >= allSettledBets.length && allSettledBets.length > 0" class="no-more-data">
                           
                        </div>
                           </div>
   
                   </div>
               
   
                   </section>
   
               </div>


               </div>
   </template>
<style lang="scss" scoped>


.SettledBetsFilterToggle_container__xZZbS {
    border: 1px solid #e6e7e2;
    margin: 12px 0px 12px;
    padding: 12px;
}

.SettledBetsFilterToggle_container__xZZbS {
    align-items: center;
    display: flex;
    gap: 12px;
    justify-content: space-between;
}
.fa-kit.fa-eyeoff {
    --fa: "\e0ab";
}

.SettledBetsFilterToggle_icon__QPEW5, .SettledBetsFilterToggle_label__gJQvm {
    color: #252a2d;
}
.SettledBetsFilterToggle_icon__QPEW5 {
    flex-shrink: 0;
    font-size: 1.25rem;
}
.SettledBetsFilterToggle_icon__QPEW5, .SettledBetsFilterToggle_label__gJQvm {
    color: #252a2d;
}
.SettledBetsFilterToggle_content__G1aSL {
    flex: 1 1;
    min-width: 0;
}

.SettledBetsFilterToggle_content__G1aSL {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.SettledBetsFilterToggle_label__gJQvm {
    font-size: .9375rem;
    font-weight: 400;
}

.SettledBetsFilterToggle_icon__QPEW5, .SettledBetsFilterToggle_label__gJQvm {
    color: #252a2d;
}
.SettledBetsFilterToggle_helperText__pQPr2 {
    color: #8e9499;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.3;
}
.Toggle_toggleContainer__pZU0c {
    box-sizing: border-box;
}
.Toggle_toggle__QrBXX.Toggle_toggleBinaryTheme__1nn8h, .Toggle_toggleButton__5dYiw {
    cursor: pointer;
}

.Toggle_toggle__QrBXX.Toggle_toggleBinaryTheme__1nn8h, .Toggle_toggleButton__5dYiw {
    cursor: pointer;
}
.Toggle_toggle__QrBXX {
    background-color: #f4f5f0;
    border: 1px solid #e6e7e2;
    border-radius: 12px;
    display: inline-flex;
    padding: 1px;
    width: 100%;
}
.Toggle_toggleButton__5dYiw.Toggle_active__u5wYc {
    background-color: #fff;
    border: 1px solid #e6e7e2;
    color: #252a2d;
    font-weight: 600;
}

.Toggle_toggleButton__5dYiw.Toggle_active__u5wYc {
    background-color: #fff;
    border: 1px solid #e6e7e2;
    color: #252a2d;
    font-weight: 600;
}
.Toggle_toggleButton__5dYiw {
    background: transparent;
    border: none;
    border-radius: 10px;
    color: #8e9398;
    flex: 1 1;
    font-family: inherit;
    font-size: 13px;
    padding: 8px;
    transition: background-color .2s ease;
}
.Toggle_toggle__QrBXX.Toggle_toggleBinaryTheme__1nn8h, .Toggle_toggleButton__5dYiw {
    cursor: pointer;
}

.Toggle_toggleButton__5dYiw {
    background: transparent;
    border: none;
    border-radius: 10px;
    color: #8e9398;
    flex: 1 1;
    font-family: inherit;
    font-size: 13px;
    padding: 8px;
    transition: background-color .2s ease;
}

.Toggle_toggle__QrBXX.Toggle_toggleBinaryTheme__1nn8h, .Toggle_toggleButton__5dYiw {
    cursor: pointer;
}



.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px; 
}

// CSS MPYA
.load-more-trigger {
    height: 50px; /* Inatakiwa iwe na urefu kidogo ili observer iione */
    display: flex;
    justify-content: center;
    align-items: center;
}

.load-more-loader img {
    height: 24px;
    width: 24px;
}

.no-more-data {
    text-align: center;
    padding: 15px;
    color: #8e9398;
    font-size: 12px;
}
.load-more-loader {
    display: flex;
    justify-content: center;
    padding: 15px 0;
    
    img {
        height: 24px;
        width: 24px;
    }
}
.loading-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px; 
}
.loading-container img{
    height: 32px;
    width: 32px;
}
    .bets-list-container[data-v-beccd7ea] {
    padding: 20px 12px;
}
section {
    display: block;
    unicode-bidi: isolate;
}
.hide-lose-container[data-v-beccd7ea] {
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    display: flex;
}
.text-small {
    font-size: 12px;
}
.hide-lose-container .toggle-container[data-v-beccd7ea] {
    width: 35px;
    height: 20px;
}
.toggle-container[data-v-f36b6f6d] {
    box-sizing: border-box;
    margin: 12px 0;
}
.toggle[data-v-f36b6f6d] {
    background-color: #f4f5f0;
    border: 1px solid #e6e7e2;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    padding: 1px;
    display: inline-flex;
}
.toggle button.active[data-v-f36b6f6d] {
    color: #252a2d;
    background-color: #fff;
    border: 1px solid #e6e7e2;
    font-weight: 600;
}
.toggle button.no-padding[data-v-f36b6f6d] {
    padding: 0;
}
.toggle button[data-v-f36b6f6d] {
    color: #8e9398;
    cursor: pointer;
    background: 0 0;
    border: none;
    border-radius: 10px;
    flex: 1;
    height: 100%;
    padding: 8px;
    transition: background-color .2s;
}
.toggle button.no-padding[data-v-f36b6f6d] {
    padding: 0;
}
.toggle button[data-v-f36b6f6d] {
    color: #8e9398;
    cursor: pointer;
    background: 0 0;
    border: none;
    border-radius: 10px;
    flex: 1;
    height: 100%;
    padding: 8px;
    transition: background-color .2s;
}



.bet[data-v-34417751] {
    color: #252a2d;
    border: 1px solid #e6e7e2;
    margin-bottom: 12px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;

}
.bet-line.bet-header[data-v-34417751] {
    background-color: #f4f5f0;
    border-bottom: 1px solid #e6e7e2;
    align-items: flex-start;
    padding: 10px 12px;
    display: flex;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
}
.bet-line.bet-header .header-container[data-v-34417751] {
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    display: flex;
}
.bet .header-title[data-v-34417751] {
    align-items: center;
    display: flex;
}
.bet-line.bet-header .time[data-v-34417751]{
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}
.bet-line.bet-header .date[data-v-34417751]{
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
}
.bet-line.bet-header .id[data-v-34417751] {
    color: #8e9398;
    text-align: right;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
}
.bet-line.bet-status[data-v-34417751] {
    color: #ff7a00;
    text-align: right;
    white-space: nowrap;
    fill: #ff7a00;
    justify-content: space-between;
    padding: 10px 12px;
    font-weight: 700;
    display: flex;
}
.bet-line.bet-status .result-container[data-v-34417751] {
    flex-flow: wrap;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    display: flex;
    overflow: hidden;
}
.bet-line.bet-status .result-container .result-text-grey[data-v-34417751] {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #8e9398;
}
.bet-line.bet-status .result-container .result-text[data-v-34417751] {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.bet-line .positive[data-v-34417751] {
    color: #8dc63f;
}
.bet-line .status-text[data-v-34417751] {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
}
.type-win[data-v-891f4695] {
    color: #252a2d;
    background: #8dc63f;
}
.mode-medium[data-v-891f4695] {
    vertical-align: text-bottom;
    width: 16px;
    height: 16px;
    margin: 0 0 0 8px;
}
.badge {
    text-align: center;
    color: #252a2d;
    background: #fff border-box;
    border: 0;
    border-radius: 0;
    // margin-right: 7px;
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
    // padding: 2px 7px;
    display: inline-block;
}

.bet-status-line[data-v-34417751] {
    border-bottom: 1px solid #e6e7e2;
    margin-left: 12px;
    margin-right: 12px;
}
.bet-line[data-v-34417751]:last-child {
    margin-bottom: 0;
}
.bet-line.bet-body[data-v-34417751] {
    flex-wrap: wrap;
    display: flex;
    margin: 12px 12px;
}
.bet-line .bet-detail[data-v-34417751] {
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    gap: 1px;
    padding-right: 4px;
    font-weight: 700;
    display: flex;
}
.bet-line .bet-detail .label[data-v-34417751] {
    color: #8e9398;
}
.bet-line .bet-detail .label[data-v-34417751] {
    font-weight: 500;
}
.bet-line .bet-detail .label[data-v-34417751], .bet[data-v-34417751] {
    font-size: 12px;
    line-height: 16px;
}
.bet-line .bet-detail .currency-container[data-v-34417751] {
    align-items: center;
    display: flex;
}
.bet-line .bet-detail .value[data-v-34417751]{
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
}
.bet-line .bet-detail[data-v-34417751] {
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    gap: 1px;
    padding-right: 4px;
    font-weight: 700;
    display: flex;
}
.bet-line .bet-detail .label[data-v-34417751] {
    color: #8e9398;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
}
.bet-line .bet-detail.end[data-v-34417751] {
    align-items: flex-end;
    padding-right: 0;
}

.bet-line .bet-detail[data-v-34417751] {
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    gap: 1px;
    padding-left: 4px;
    font-weight: 700;
    display: flex;
}
.bet-line .bet-detail .label[data-v-34417751] {
    color: #8e9398;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
}
.bet-line .bet-detail .currency-container[data-v-34417751] {
    align-items: center;
    display: flex;
}
.bet-line .bet-detail .bold-symbol .value[data-v-34417751]{
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
}
.bet-line .bet-detail .currency.value[data-v-34417751] .symbol {
    color: #aaaeb0;
    font-size: 12px;
    margin-right: 2px;
}

</style>
