
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted,onUnmounted, computed } from 'vue'
import { useBetsStore } from '../../../stores/betsStore' // Adjust path based on your structure
import WiningCupImage from '../../../assets/media/main_trophy_bronze_b8a77b5e1a.webp' 
import WiningCupImageBackground from '../../../assets/media/Property_1_Bronze_confetti_b5028c1425.webp' 
import Loader from '../../../assets/loader/default-spinner-BIEd0VkD.gif'

const route = useRoute()
const router = useRouter()
const betsStore = useBetsStore()

// Get current bet from store
const currentBet = computed(() => betsStore.currentBet)
const isTaxDetailsOpen = ref(false)
const isLoading = ref(true)

// Countdown functionality
// Countdown functionality
const countdownNumber = ref(5)
const circleOffset = ref(0)
const circumference = 2 * Math.PI * 10 // 2πr where r=10
const circleColor = ref('#f1ab11') // Yellow/Orange color
let countdownInterval = null

// Update countdown - FULL CYCLE kama Betpawa
const updateCountdown = () => {
  // Update number
  if (countdownNumber.value > 1) {
    countdownNumber.value--
  } else {
    countdownNumber.value = 5
  }
  
  // Calculate circle progress
  // When number is 5: circleOffset = circumference (tupu)
  // When number is 1: circleOffset = circumference * 0.2 (imesoma kidogo tu)
  circleOffset.value = circumference * (countdownNumber.value / 5)
  
  // Badilisha color inapofika 1 (optional - kama Betpawa)
  if (countdownNumber.value === 1) {
    circleColor.value = '#ff4444' // Nyekundu inapokaribia kuisha
  } else {
    circleColor.value = '#f1ab11' // Rudi kwenye yellow/orange
  }
}

// Start countdown
const startCountdown = () => {
  // Set initial state - anza na 5, circle tupu
  countdownNumber.value = 5
  circleOffset.value = circumference
  
  // Clear existing interval
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
  
  // Start new interval
  countdownInterval = setInterval(updateCountdown, 1000)
}


onUnmounted(() => {
  // Cleanup interval
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})


onMounted(async () => {
  const betId = route.params.id
  startCountdown()
  
  // Check if we have the bet in store
  if (currentBet.value) {
    console.log('Bet received from store:', currentBet.value)
    isLoading.value = false
    return
  }
  setInterval(updateCountdown, 1000)
  
  // Try to find bet by ID from store's settledBets
  const foundBet = betsStore.getBetById(betId)
  if (foundBet) {
    betsStore.setCurrentBet(foundBet)
    console.log('Found bet in store by ID:', foundBet)
    isLoading.value = false
    return
  }
  
  // Fallback: Try localStorage
  const storedBets = localStorage.getItem('settledBets')
  if (storedBets) {
    const bets = JSON.parse(storedBets)
    const foundBet = bets.find(b => b.id == betId)
    if (foundBet) {
      betsStore.setCurrentBet(foundBet)
      betsStore.setSettledBets(bets) // Also update store
      console.log('Found bet via localStorage:', foundBet)
      isLoading.value = false
      return
    }
  }
  
  // If all else fails, load from API
  await loadBetFromApi(betId)
})

// Load bet from API
const loadBetFromApi = async (betId) => {
  try {
    isLoading.value = true
    
 
    
    // Simulating API call for now
    await new Promise(resolve => setTimeout(resolve, 500))
    
    
    
    // Update settledBets if needed
    const currentSettledBets = betsStore.settledBets
    if (!currentSettledBets.find(b => b.id == betId)) {
      betsStore.setSettledBets([...currentSettledBets])
    }
    
  } catch (error) {
    console.error('Failed to load bet from API:', error)
  } finally {
    isLoading.value = false
  }
}

const toggleTaxDetail = () => {
  isTaxDetailsOpen.value = !isTaxDetailsOpen.value
}


const formatMoney = (value) => {
  if (value === undefined || value === null) return '0.00'
  
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}
const goBack = () => {
  // Clear current bet when going back (optional)
  // betsStore.clearCurrentBet()
  router.push({ name: 'Settled' })
}

// Helper computed properties for bet data
const betPayout = computed(() => {
  return currentBet.value?.payout || '0.00'
})

const betStake = computed(() => {
  return currentBet.value?.stake || '0.00'
})


const potentialWin = computed(() => {
  // Check if currentBet exists and has value
  if (!currentBet.value) return 0
  
  const holdOdds = currentBet.value.total_odds - 1
  const rst = (holdOdds * currentBet.value.stake).toFixed(2)
  return formatMoney(rst)
})


const withHoldingTax = computed(() => {
  // First, remove commas and convert to number
  const potential = Number(String(potentialWin.value).replace(/,/g, '')) || 0
  const result = (potential * 0.12).toFixed(2)
  return formatMoney(result)
})

const payoutWin = computed(() => {
  // Remove commas from both formatted values
  const potential = Number(String(potentialWin.value).replace(/,/g, '')) || 0
  const tax = Number(String(withHoldingTax.value).replace(/,/g, '')) || 0
  const stake = Number(currentBet.value?.stake) || 0
  
  const result = (potential - tax + stake).toFixed(2)
  return formatMoney(result)
})







</script>

<template>
    


  <div data-v-7f504cc4="" v-if="currentBet" class="single-betslip router-view">
     <!-- LOADER SECTION -->
     <div v-if="isLoading" class="loading-container">
                        <img :src="Loader" alt="Loading..." />
            </div>
        <div v-else>
        <div data-v-7f504cc4="" class="header">
            <div data-v-7f504cc4="" @click="goBack"  data-test-id="single-betslip-back-button" class="back">
                <svg data-v-02f45589=""  
                    data-v-7f504cc4="" class="svg-icon icon" style="vertical-align: middle;">
                    <use data-v-02f45589="" xlink:href="#arrow_left"></use>
                </svg></div>
            <div data-v-7f504cc4="" class="betslip-title">
                <div data-v-7f504cc4="" class="id" data-test-id="betSlipID">BET ID # {{ currentBet.id }}</div> 
            </div> 
        </div>
        <div data-v-7f504cc4="" class="summary">
            <!-- <div data-v-af0326d2="" data-v-7f504cc4="" class="tier-banner"><img data-v-5455027b="" data-v-af0326d2=""
                :src="WiningCupImage" class="trophy-img"> <img data-v-5455027b=""
                    data-v-af0326d2="" :src="WiningCupImageBackground" class="trophy-bg">
                <div data-v-af0326d2="" class="currency congrats-text"><span data-v-af0326d2="">Congratulations on <br>
                        <span class="win-big-text">winning big </span></span> <span class="symbol">TSh</span> <span
                        class="amount">{{ payoutWin }}</span> </div>
            </div>  -->
            <div data-v-7f504cc4="" class="betslip-summary-container win-tier"  style="margin-bottom: 20px;"

                >
                <div data-v-7f504cc4="" class="summary-line">
                    <div data-v-7f504cc4="" class="label">Odds:</div>
                    <div data-v-7f504cc4="" class="value">{{ currentBet.total_odds }}</div>
                </div>
                <div data-v-7f504cc4="" class="summary-line selected">
                    <div data-v-7f504cc4="" class="label">Stake:</div>
                    <div data-v-7f504cc4="" class="currency value" data-test-id="stakeAmount"> <span
                            class="symbol contrast">TSh</span> {{ formatMoney(currentBet.stake) }}<span class="amount"></span> <!----></div>
                </div> 
                <div data-v-7f504cc4="" class="summary-line selected">
                    <div data-v-7f504cc4="" class="label">Potential Winnings:</div>
                    <div data-v-7f504cc4="" class="currency value" data-test-id="possibleWinAmount"> <span
                            class="symbol contrast">TSh</span> <span class="amount">{{ potentialWin }}</span> <!----></div>
                </div> 
                <div data-v-5d3da755="" data-v-7f504cc4="" class="tax-details">
    <div data-v-aabe1219="" data-v-5d3da755=""
         :class="['expansion-panel', 'minimal', 'small', 
                  isTaxDetailsOpen ? 'is-open' : '', 
                  'tax-details-expansion', 'light']">
        
        <!-- Clickable header -->
        <div data-v-aabe1219="" @click="toggleTaxDetail" 
             data-test-id="toggle-open-button" 
             class="title table pointer">
            
            <div data-v-aabe1219="" class="row-cell align-middle expand-icon expand-icon-left">
                <svg data-v-02f45589="" data-v-aabe1219="" 
                     class="svg-icon icon-size-very-small"
                     :style="{ transform: isTaxDetailsOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                               transition: 'transform 0.3s ease' }">
                    <use data-v-02f45589=""
                         :xlink:href="isTaxDetailsOpen ? '#icon-arrow-up' : '#icon-arrow-down'"></use>
                </svg>
            </div>
            
            
                <div v-if="isTaxDetailsOpen" data-v-aabe1219="" class="row-cell align-middle title-text">
                    <h3 data-v-aabe1219="">Tax Details :</h3>
                </div>
            
            <div v-else data-v-aabe1219="" style="display: flex; align-items: center; justify-content: space-between;" class=" row-cell align-middle title-text">


                <h3 data-v-aabe1219="">Withholding Tax 12% :</h3>

                <!-- Show tax amount in header (always visible) -->
            <div data-v-aabe1219="" class="row-cell align-middle tax-amount-header">
                <div data-v-5d3da755="" class="currency value">
                    <span class="symbol contrast">TSh</span>
                    <span class="amount">{{ withHoldingTax }}</span>
                </div>
            </div>
            </div>
            
            

            
            
        </div>
        
        <!-- Collapsible content - GROSS WINNINGS ONLY -->
        <div data-v-aabe1219="" 
             v-show="isTaxDetailsOpen" 
             class="expansion-panel-content">
            
            <!-- Gross Winnings (hidden by default) -->
            <div data-v-5d3da755="" class="summary-line">
                <div data-v-5d3da755="" class="label">Gross Winnings:</div>
                <div data-v-5d3da755="" class="currency value" data-test-id="grossWinnings">
                    <span class="symbol contrast">TSh</span>
                    <span class="amount">{{ potentialWin }}</span>
                </div>
            </div>
            
            <div data-v-5d3da755="" class="divider"></div>

            <!-- Withholding Tax (also shown in header) -->
            <div data-v-5d3da755="" class="summary-line">
                <div data-v-5d3da755="" class="label">Withholding Tax 12%:</div>
                <div data-v-5d3da755="" class="currency value" data-test-id="withholdingTax">
                    <span class="symbol contrast">TSh</span>
                    <span class="amount">{{ withHoldingTax }}</span>
                </div>
            </div>
            
        </div>
        
    </div>
</div>

                <div data-v-7f504cc4="" class="summary-line result" data-test-id="summaryLine">
                    <div data-v-7f504cc4="" class="label winning-result"><span style="color: black;">Payout:</span></div>
                    <div data-v-7f504cc4="" class="currency value winning-result" data-test-class="betResult"
                        data-test-id="betResultWon">WON <span class="symbol">TSh</span> <span class="amount">{{payoutWin }}</span>
                        </div>
                </div>
            </div>
            <!-- <div data-v-7f504cc4="" class="betslip-sharing"><button data-v-7f504cc4=""
                    data-test-id="open-bet-sharing-modal-button" class="button button-primary share-win-button"><svg
                        data-v-02f45589="" data-v-7f504cc4="" class="svg-icon icon icon-size-medium"
                        style="vertical-align: middle;">
                        <use data-v-02f45589="" xlink:href="#icon-share"></use>
                    </svg> <span data-v-7f504cc4="">Share your win</span></button
                    ></div>  -->
        </div> 


    

        <!-- <div class="in-play-wrapper" data-test-id="in-play-wrapper">
    <div class="countdown-container">
      <div class="countdown-circle">
        <span class="countdown-number">{{ countdownNumber }}</span>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <circle
            class="circle-bg"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="#e6e7e2"
            stroke-width="2"
          />
          <circle
            class="circle-progress"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            :stroke="circleColor"
            stroke-width="2.5"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="circleOffset"
            transform="rotate(-90 12 12)"
          />
        </svg>
      </div>
      <span class="in-play-text">
        Livescores shown are for informational purposes only, and may be delayed or differ from actual results.
        <a href="/rules" class="read-more">Read more</a>.
      </span>
    </div>
  </div> -->
      
           <!-- Teams start here -->
        <div data-v-695b065a="" data-v-7f504cc4="" class="event" data-test-id="stakeInfo" >
            <div data-v-695b065a="" class="event-line event-header"><!---->
                <div data-v-695b065a="" class="event-label">
                    <div data-v-695b065a="" class="label">
                        <div data-v-695b065a="">{{ currentBet.timeMatche1 }} <span data-v-695b065a="" class="date">{{ currentBet.dateMatche1 }}</span></div>
                    </div> 
                </div>
                <div data-v-695b065a="" class="value odd win"><span data-v-695b065a="" class="">{{ currentBet.oddsMatche1}}</span>
                     <span
                        data-v-891f4695="" data-v-695b065a="" class="badge type-win mode-circle badge-result"><!---->
                </span>
                    
                </div>
            </div>
            <div data-v-695b065a="" class="event-line">
                <div data-v-695b065a="" class="label">
                    <div data-v-695b065a="" class="match" data-test-id="matchName"><svg data-v-02f45589=""
                            data-v-695b065a="" class="svg-icon sport-icon" style="vertical-align: middle;"><!---->
                            <use data-v-02f45589="" xlink:href="#icon-football"></use>
                        </svg> <span data-v-95226610="" data-v-695b065a="">{{ currentBet.homeMatche1 }} - {{ currentBet.awayMatche1 }}</span></div>
                    <div data-v-695b065a="" class="league">{{ currentBet.leagueMatche1 }}</div>
                    <div data-v-695b065a="" class="bold"><span data-v-695b065a="">Correct Score | Full Time {{ currentBet.scoreMatche1 }}
                            </span></div>
                </div>
                <div data-v-695b065a="" class="value">
                    <div data-v-695b065a=""><span data-v-695b065a="" class="result">{{ currentBet.scoreMatche1 }}</span></div>
                    <div data-v-695b065a="" class="event-info"></div>
                </div>
            </div>
        </div>






        <div data-v-695b065a="" data-v-7f504cc4="" class="event" data-test-id="stakeInfo">
            <div data-v-695b065a="" class="event-line event-header"><!---->
                <div data-v-695b065a="" class="event-label">
                    <div data-v-695b065a="" class="label">
                        <div data-v-695b065a="">{{ currentBet.timeMatche2 }} <span data-v-695b065a="" class="date">{{ currentBet.dateMatche2 }}</span></div>
                    </div> 
                </div>
                <div data-v-695b065a="" class="value odd win"><span data-v-695b065a="" class="">{{ currentBet.oddsMatche2}}</span>
                     <span
                        data-v-891f4695="" data-v-695b065a="" class="badge type-win mode-circle badge-result"><!---->
                </span>
                    
                </div>
            </div>
            <div data-v-695b065a="" class="event-line">
                <div data-v-695b065a="" class="label">
                    <div data-v-695b065a="" class="match" data-test-id="matchName"><svg data-v-02f45589=""
                            data-v-695b065a="" class="svg-icon sport-icon" style="vertical-align: middle;"><!---->
                            <use data-v-02f45589="" xlink:href="#icon-football"></use>
                        </svg> <span data-v-95226610="" data-v-695b065a="">{{ currentBet.homeMatche2 }} - {{ currentBet.awayMatche2 }}</span></div>
                    <div data-v-695b065a="" class="league">{{ currentBet.leagueMatche2 }}</div>
                    <div data-v-695b065a="" class="bold"><span data-v-695b065a="">Correct Score | Full Time {{ currentBet.scoreMatche2 }}
                            </span></div>
                </div>
                <div data-v-695b065a="" class="value">
                    <div data-v-695b065a=""><span data-v-695b065a="" class="result">{{ currentBet.scoreMatche2 }}</span></div>
                    <div data-v-695b065a="" class="event-info"></div>
                </div>
            </div>
        </div>








        


        <!-- Teams end here -->


        <div data-v-7f504cc4="" class="legend">
            <div data-v-7f504cc4="" class="lightgray placed-date">
                <div data-v-7f504cc4="">Bet placed on <span data-v-7f504cc4="" class="nowrap">{{ currentBet.date }} at {{ currentBet.time }}</span></div>
                <div data-v-7f504cc4="" class="summary-legend"><span data-v-891f4695="" data-v-7f504cc4=""
                        class="badge type-pending mode-circle"></span> <span
                        data-v-7f504cc4="">Pending</span> <span data-v-891f4695="" data-v-7f504cc4=""
                        class="badge type-win mode-circle"></span> <span data-v-7f504cc4="">Won</span>
                    <span data-v-891f4695="" data-v-7f504cc4="" class="badge type-lose mode-circle"><!---->
                        </span> <span data-v-7f504cc4="">Lost</span> <span data-v-891f4695="" data-v-7f504cc4=""
                        class="badge type-cancelled mode-circle"><svg data-v-02f45589="" data-v-891f4695=""
                            class="svg-icon icon icon-size-medium" style="vertical-align: middle;"><!---->
                            <use data-v-02f45589="" xlink:href="#icon-close"></use>
                        </svg> </span> <span data-v-7f504cc4="">Void</span></div>
            </div>
        </div>

        <div data-v-fb673205="" data-v-7f504cc4="" class="mybets-regulation">
            <p data-v-fb673205="" class="mybets-regulation-msg"><span data-v-fb673205="">All bets are accepted and
                    settled in accordance with our <b><a href="/terms" class="underline">Terms and Conditions</a></b>
                    and <b><a href="/rules" class="underline">Rules</a></b>.</span></p>
        </div>
    </div>


</div>

  






 



    
  </template>
  
  
  
  <style scoped>

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

.expansion-panel-content {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.3s ease;
}

.expansion-panel.is-open .expansion-panel-content {
    max-height: 150px; /* Adjust based on content */
    opacity: 1;
    margin-top: 8px;
}

/* Show tax amount in header */
.tax-amount-header {
    margin-left: auto;
    padding-left: 16px;
}

/* Style for the header tax amount */
.tax-amount-header .currency.value {
    font-weight: 700;
    font-size: 12px;
}

/* Ensure proper spacing */
.expansion-panel .title {
    display: flex;
    align-items: center;
    width: 100%;
}

.title-text {
    flex-grow: 1;
}

/* Arrow rotation */
.expand-icon svg {
    transition: transform 0.3s ease;
}

/* Optional: Add padding to the container when open */
.expansion-panel.is-open {
    padding-bottom: 12px;
}
    .expansion-panel-content {
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 0;
  opacity: 0;
}

/* When open */
.expansion-panel-content.show {
  max-height: 200px; /* Adjust based on your content height */
  opacity: 1;
}

/* Alternative: Use v-show with transition classes */
.expansion-panel-content-enter-active,
.expansion-panel-content-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.expansion-panel-content-enter-from,
.expansion-panel-content-leave-to {
  max-height: 0;
  opacity: 0;
}

.expansion-panel-content-enter-to,
.expansion-panel-content-leave-from {
  max-height: 200px;
  opacity: 1;
}

/* Ongeza hii kwa arrow icon */
.expand-icon svg {
  transition: transform 0.3s ease;
}

/* Optional: Smooth padding for the container */
.tax-details .tax-details-expansion.light[data-v-5d3da755] {
  transition: padding-bottom 0.3s ease;
}

.tax-details .tax-details-expansion.light.is-open[data-v-5d3da755] {
  padding-bottom: 16px; /* Ongeza padding wakati inafunguka */
}

/* Optional: Add hover effect to clickable area */
.title.pointer {
  cursor: pointer;
  user-select: none;
}

.title.pointer:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

  .router-view {
    position: relative;
    min-width: 38dvw;
}
.header[data-v-7f504cc4] {
    background-color: #fff;
    border-bottom: 1px solid #e6e7e2;
    align-items: center;
    padding: 12px;
    display: flex;
    color: #252a2d;
}
.header .back[data-v-7f504cc4], .header .share[data-v-7f504cc4] {
    color: #252a2d;
    cursor: pointer;
}
.header .back .icon[data-v-7f504cc4], .header .share .icon[data-v-7f504cc4] {
    width: 16px;
    max-width: 16px;
    height: 16px;
    max-height: 16px;
}
.header .betslip-title[data-v-7f504cc4] {
    text-align: center;
    width: 100%;
    display: inline-block;
}
.header .betslip-title .id[data-v-7f504cc4] {
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    display: flex;
}
.summary[data-v-7f504cc4] {
    background: #f4f5f0;
    border-bottom: 1px solid #e6e7e2;
    padding-top: 8px;
    color: #252a2d;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
}

.tier-banner[data-v-af0326d2] {
    align-items: center;
    column-gap: 16px;
    width: 100%;
    max-width: 350px;
    margin: auto;
    padding: 8px 12px 16px;
    display: flex;
    position: relative;
}
.tier-banner .trophy-img[data-v-af0326d2] {
    width: auto;
    height: 60px;
}
.tier-banner .trophy-bg[data-v-af0326d2] {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
}
.tier-banner .congrats-text[data-v-af0326d2] {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}
.tier-banner .congrats-text[data-v-af0326d2] .amount {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;


}
.tier-banner .congrats-text[data-v-af0326d2] .win-big-text{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
}
.tier-banner .congrats-text[data-v-af0326d2] .symbol{
    text-transform: uppercase;
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;

}
.tier-banner .congrats-text[data-v-af0326d2] .amount{
    text-transform: uppercase;
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;

}
.win-tier[data-v-7f504cc4] {
    border-width: 3px;
}
.betslip-summary-container[data-v-7f504cc4] {
    background-color: #fff;
    border: 3px solid #e6e7e2;
    margin: 0 8px 8px;
    padding: 12px;
}
.summary .summary-line[data-v-7f504cc4] {
    justify-content: space-between;
    padding-bottom: 4px;
    display: flex;
}
.summary .summary-line .label[data-v-7f504cc4]{
    font-weight: 700;
}
.summary .summary-line .value[data-v-7f504cc4] {
    font-weight: 700;
}
.summary .summary-line[data-v-7f504cc4] {
    justify-content: space-between;
    padding-bottom: 4px;
    display: flex;
}
.summary .summary-line.selected .label[data-v-7f504cc4]{
    color: #7a8185;
    font-weight: 400;
}
.summary .summary-line.selected .value[data-v-7f504cc4] {
    color: #7a8185;
    font-weight: 400;
}
.summary .summary-line[data-v-7f504cc4] {
    justify-content: space-between;
    padding-bottom: 4px;
    display: flex;
}
.tax-details[data-v-5d3da755] {
    display: block !important;
}
.tax-details .tax-details-expansion.light[data-v-5d3da755] {
    background-color: #f2f2f3;
    border-radius: 4px;
    margin-bottom: 4px;
    padding: 8px;
}

.tax-details>div[data-v-5d3da755] {
    color: #484f52;
}
.expansion-panel.small .title[data-v-aabe1219] {
    margin-bottom: 4px;
    padding: 0;
}

.expansion-panel.minimal .title[data-v-aabe1219], .expansion-panel.small .title[data-v-aabe1219] {
    background-color: transparent;
    border-top: none;
    padding-top: 0px;
}
.expansion-panel .title[data-v-aabe1219] {
    color: #252a2d;
    -webkit-tap-highlight-color: transparent;
    fill: #252a2d;
    background: #e6e7e1;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 8px;
    display: flex;
}
.table {
    width: 100%;
    display: table;
}
.expansion-panel .expand-icon-left[data-v-aabe1219] {
    margin-right: 8px;
}
.expansion-panel .expand-icon[data-v-aabe1219] {
    display: flex;
}
svg.icon-size-very-small[data-v-02f45589], img.icon-size-very-small[data-v-02f45589] {
    width: 10px;
    height: 10px;
}
.expansion-panel .title .title-text[data-v-aabe1219] {
    margin-right: auto;
}
.table .row-cell.align-middle {
    vertical-align: middle;
}
.table .row-cell {
    display: table-cell;
}
.expansion-panel.minimal .title h3[data-v-aabe1219] {
    text-transform: none;
}
.expansion-panel.minimal .title h3[data-v-aabe1219], .expansion-panel.small .title h3[data-v-aabe1219] {
    font-weight: 400;
}
.expansion-panel.small .title h3[data-v-aabe1219] {
    font-size: 12px;
    line-height: 16px;
}
.tax-details .summary-line[data-v-5d3da755] {
    justify-content: space-between;
    padding-bottom: 4px;
    display: flex;
}
.tax-details .summary-line[data-v-5d3da755] {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
}
.tax-details .divider[data-v-5d3da755] {
    background-color: #cacdce;
    height: 1px;
    margin-bottom: 4px;
}
.summary .summary-line[data-v-7f504cc4]:last-child {
    border-bottom: none;
    padding-bottom: 0;
}
.summary .summary-line.result[data-v-7f504cc4] {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}
.summary .summary-line .winning-result[data-v-7f504cc4] {
    color: #8dc63f;
}
.summary .summary-line .label[data-v-7f504cc4]{
    font-weight: 700;
}
.summary-line .value[data-v-7f504cc4] {
    font-weight: 700;
}
.single-betslip .betslip-sharing[data-v-7f504cc4] {
    justify-content: center;
    padding: 4px 0 12px;
    display: flex;
}
.single-betslip .betslip-sharing .share-win-button[data-v-7f504cc4] {
    justify-content: center;
    align-items: center;
    display: flex;
}
.button-primary {
    color: #252a2d;
    fill: #252a2d;
    background-color: #9ce800;
}
.button {
    cursor: pointer;
    max-width: 300px;
    font-family: inherit;
    cursor: pointer;
    max-width: 300px;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    -webkit-appearance: none;
    box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-background-origin: border-box;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-background-clip: border-box;
    background-clip: border-box;
    border: 0;
    border-radius: 0;
    padding: 10px 20px;
    display: inline-block;

}



.single-betslip .betslip-sharing .share-win-button .icon[data-v-7f504cc4] {
    margin-right: 8px;
}
svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
    width: 16px;
    height: 16px;
}
.event[data-v-695b065a] {
    color: #252a2d;
    border-bottom: 1px solid #e6e7e2;
    padding: 8px;
    position: relative;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
}
.event .event-line.event-header[data-v-695b065a] {
    align-items: center;
    font-weight: 400;

}
.event .event-line.event-header[data-v-695b065a] {
    font-size: 14px;
    line-height: 18px;
}
.event .event-line[data-v-695b065a] {
    justify-content: space-between;
    margin-bottom: 6px;
    display: flex;
    position: relative;
}
.event-label[data-v-695b065a] {
    flex-wrap: wrap;
    align-items: center;
    display: flex;
    position: relative;
}
.event .event-line .label[data-v-695b065a] {
    margin-right: 14px;
}
.event .event-line.event-header .date[data-v-695b065a] {
    font-weight: 700;
}
.event .event-line.event-header .odd.win[data-v-695b065a] {
    color: #8dc63f;
}
.event .event-line.event-header .odd[data-v-695b065a] {
    align-items: center;
    font-weight: 700;
    display: flex;
}
.event .event-line.event-header .badge[data-v-695b065a] {
    margin-right: 0;
}
.type-win[data-v-891f4695] {
    color: #252a2d;
    background: #8dc63f;
}
.mode-circle[data-v-891f4695] {
    vertical-align: text-bottom;
    width: 18px;
    height: 18px;
    margin: 0 7px;
}
.badge {
    text-align: center;
    color: #252a2d;
    background: #fff border-box;
    border: 0;
    border-radius: 0;
    margin-right: 7px;
    /* padding: 2px 7px; */
    display: inline-block;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
}
.event .event-line[data-v-695b065a]:last-child {
    margin-bottom: 0;
}
.event .event-line[data-v-695b065a] {
    justify-content: space-between;
    margin-bottom: 6px;
    display: flex;
    position: relative;
}
.event .event-line .label[data-v-695b065a] {
    margin-right: 14px;
}
.event .event-line .label .match[data-v-695b065a] {
    align-items: center;
    display: flex;
}
.sport-icon[data-v-695b065a] {
    fill: #aaaeb0;
    vertical-align: text-top;
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    margin-right: 4px;
    display: inline-block;
}
.event .event-line .label .league[data-v-695b065a] {
    color: #8e9398;
}
.bold {
    font-weight: 700;
}
.event .event-line .result[data-v-695b065a] {
    white-space: nowrap;
    font-weight: 700;

}
.event .event-line .result[data-v-695b065a]{
    font-size: 14px;
    line-height: 18px;
}
.event-info[data-v-695b065a] {
    text-align: right;
}
.legend[data-v-7f504cc4] {
    text-align: center;
    padding: 0 8px 8px;
}
.legend .placed-date[data-v-7f504cc4] {
    margin-top: 8px;
}
.legend .placed-date[data-v-7f504cc4]{
    font-weight: 400;
}
.legend .placed-date[data-v-7f504cc4] {
    font-size: 12px;
    line-height: 16px;
}
.lightgray {
    color: #252a2d;
}
.legend .nowrap[data-v-7f504cc4] {
    white-space: nowrap;
}
.legend .summary-legend[data-v-7f504cc4] {
    margin-top: 6px;
}
legend .summary-legend .badge[data-v-7f504cc4]:first-child {
    margin-left: 0;
}
.legend .summary-legend .badge[data-v-7f504cc4] {
    margin: 0 4px 0 12px;
}
.type-pending[data-v-891f4695], .type-pending-dark[data-v-891f4695] {
    background: #e6e7e2;
}
.mode-circle[data-v-891f4695] {
    vertical-align: text-bottom;
    width: 18px;
    height: 18px;
    margin: 0 7px;
}

.legend .summary-legend .badge[data-v-7f504cc4] {
    margin: 0 4px 0 12px;
}
.type-win[data-v-891f4695] {
    color: #252a2d;
    background: #8dc63f;
}
.mode-circle[data-v-891f4695] {
    vertical-align: text-bottom;
    width: 18px;
    height: 18px;
    margin: 0 7px;
}
.legend .summary-legend .badge[data-v-7f504cc4] {
    margin: 0 4px 0 12px;
}
.type-lose[data-v-891f4695] {
    background: #cc371b;
}
.mode-circle[data-v-891f4695] {
    vertical-align: text-bottom;
    width: 18px;
    height: 18px;
    margin: 0 7px;
}
.type-cancelled[data-v-891f4695] {
    background: #e6e7e2;
    padding: 0;
}
.mode-circle[data-v-891f4695] {
    vertical-align: text-bottom;
    width: 18px;
    height: 18px;
    margin: 0 7px;
}
.type-cancelled .icon[data-v-891f4695] {
    fill: #aaaeb0;
    width: 12px;
    height: 12px;
    margin: 0;
}
.mybets-regulation[data-v-fb673205] {
    border-top: 1px solid #e6e7e2;
    margin-top: 8px;
    padding: 8px 0;
    color: #252a2d;
}
.mybets-regulation-msg[data-v-fb673205] {
    text-align: center;
    padding: 4px 11px;
    font-style: italic;
}
.mybets-regulation-msg[data-v-fb673205] {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
}
a.underline:not([class*=button]) {
    text-decoration: underline;
}











/* Countdown styles - kufanana na Betpawa */
.in-play-wrapper {
  background-color: #fff;
  padding: 12px 16px;
  margin: 8px 0;
  border-top: 1px solid #e6e7e2;
  border-bottom: 1px solid #e6e7e2;
}

.countdown-container {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.countdown-circle {
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.countdown-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11px;
  font-weight: 700;
  color: #f39810;
  z-index: 1;
}

.circle-bg {
  stroke: #fff;
}

.circle-progress {
  transition: stroke-dashoffset 0.8s linear, stroke 0.3s ease;
}

.in-play-text {
  font-size: 12px;
  line-height: 1.5;
  color: #7a8185;
  flex: 1;
}

.read-more {
  color: #252a2d;
  font-weight: 700;
  text-decoration: underline;
  margin-left: 4px;
}

.read-more:hover {
  text-decoration: none;
}

/* Responsive */
@media (max-width: 480px) {
  .in-play-wrapper {
    padding: 10px 12px;
  }
  
  .countdown-container {
    gap: 8px;
  }
  
  .in-play-text {
    font-size: 11px;
  }
}
  </style>