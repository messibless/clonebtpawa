<script setup>
import { ref, computed } from 'vue';
import AirtelLogo from '../../../assets/img/airtel.png';
import RightSidebar from '../../../components/Header/account-sidebar/RightSidebar.vue'
import Account from './account/Account.vue';
import { useAuthStore } from '../../../stores/authStore'
import { inject } from 'vue'

const authStore = useAuthStore()
// Get authentication state
const isLoggedIn = computed(() => authStore.isLoggedIn)
const userName = computed(() => authStore.userName)
// Pokonya sidebar state kutoka App.vue
const accountSidebar = inject('accountSidebar')

// LOGIC YA TABS
const activeTab = ref('sport') // 'sport' au 'virtual'

const setActiveTab = (tab) => {
    activeTab.value = tab
}

// Function ya kufunga sidebar
const closeSidebar = () => {
  if (accountSidebar) {
    accountSidebar.close()
  }
}
</script>

<template>
    <div class="section grow-4">
        <div class="absolute-content content">
            <!-- Overlay - Inafungua na kufunga na sidebar -->
            <Transition name="fade">
                <div 
                    v-if="accountSidebar?.isOpen.value" 
                    class="sidebar-overlay" 
                    @click="closeSidebar"
                ></div>
            </Transition>

            <!-- Sidebar Container -->
            <div class="absolute-content">
                <Transition name="slide-left">
                    <Account 
                        v-if="accountSidebar?.isOpen.value" 
                        @close="closeSidebar"  
                        class="account-sidebar-child"
                    />
                </Transition>
            </div>

            <!-- Main Betslip Sidebar -->
            <div data-v-c057a854="" class="side-bar content side-bar-right open transition">
                <div data-v-38774e99="" class="bet-side-bar-wrapper">
                    <!-- Header Section -->
                    <div data-v-821495bc="" data-v-38774e99="">
                        <!-- Logged In Header -->
                        <div data-v-821495bc="" class="betslip-header" v-if="isLoggedIn">
                            <div data-v-821495bc="" class="betslip-header-content">
                                <div data-v-821495bc="" class="betslip-header-link">
                                    <div data-v-821495bc="" data-test-id="view-my-bets-gtm-button" class="view-my-bets">
                                        <svg data-v-02f45589="" data-v-821495bc="" class="svg-icon icon icon-size-small"
                                            style="vertical-align: middle;">
                                            <use data-v-02f45589="" xlink:href="#icon-arrow-down"></use>
                                        </svg> 
                                        <a data-v-821495bc="" href="/bets" class="view-my-bets-link"
                                            data-test-id="nav-my-bets-link">View My Bets</a>
                                    </div>
                                </div>
                                <div data-v-821495bc="" class="balance">
                                    <span data-v-821495bc="" class="betslip-header-title">
                                        <label data-v-821495bc="">Your Balance</label>
                                    </span> 
                                    <span data-v-821495bc="" class="count">TSh 1,735.46</span>
                                </div>
                            </div>
                        </div>

                        <!-- Not Logged In Header -->
                        <div data-v-821495bc="" class="betslip-header" v-else>
                            <div data-v-821495bc="" class="betslip-header-content">
                                <span data-v-821495bc="" class="betslip-header-info">
                                    Not logged in - <a href="/join-now" class="underline">Join Now</a> or 
                                    <a href="/login?returnPrevPath=1&amp;reopenBetslip=1" class="underline">Log In</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Tabs and Content Area -->
                    <div data-v-1d98f731="" data-v-38774e99="" class="betslip-main">
                        <!-- Tabs Menu -->
                        <div data-v-d3915418="" data-v-1d98f731="" class="tabs square with-top-border">
                            <ul data-v-d3915418="" class="tabs-menu align-center">
                                <!-- Sport Tab -->
                                <li 
                                    data-v-d3915418="" 
                                    class="tabs-selector first"
                                    :class="{ 'active': activeTab === 'sport' }"
                                    data-test-id="tabs-REAL"
                                    @click="setActiveTab('sport')"
                                >
                                    <div data-v-d3915418="" class="tab-item">
                                        <div data-v-d3915418="" class="tab-item-border">
                                            <div data-v-d3915418="" class="tab-icon">
                                                <svg data-v-02f45589="" data-v-d3915418="" 
                                                    class="svg-icon icon icon-size-small"
                                                    style="vertical-align: middle;">
                                                    <use data-v-02f45589="" xlink:href="#icon-ball-with-shadow"></use>
                                                </svg>
                                            </div> 
                                            <span data-v-d3915418="" class="tab-text">Sport</span>
                                        </div>
                                    </div>
                                </li>
                                
                                <!-- Virtual Tab -->
                                <li 
                                    data-v-d3915418="" 
                                    class="tabs-selector last"
                                    :class="{ 'active': activeTab === 'virtual' }"
                                    data-test-id="tabs-VIRTUAL"
                                    @click="setActiveTab('virtual')"
                                >
                                    <div data-v-d3915418="" class="tab-item">
                                        <div data-v-d3915418="" class="tab-item-border">
                                            <div data-v-d3915418="" class="tab-icon">
                                                <svg data-v-02f45589="" data-v-d3915418="" 
                                                    class="svg-icon icon icon-size-small"
                                                    style="vertical-align: middle;">
                                                    <use data-v-02f45589="" xlink:href="#icon-virtual-sport"></use>
                                                </svg>
                                            </div> 
                                            <span data-v-d3915418="" class="tab-text">Virtuals</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- Booking Code - Fixed Section (Haibadiliki) -->
                        <div data-v-d1452eaf="" data-v-1d98f731="" class="booking-code">
                            <div data-v-d1452eaf="" class="booking-code-form">
                                <div data-v-d1452eaf="" class="label">
                                    <span data-v-d1452eaf="" style="color: black;">Booking code</span>
                                </div>
                                <div data-v-1a892a33="" data-v-d1452eaf="" class="input-field booking-code-field">
                                    <div data-v-1a892a33="" class="input-field-wrapper input-icon-undefined">
                                        <input 
                                            data-v-1a892a33="" 
                                            min="0" 
                                            placeholder="Enter booking code"
                                            id="booking-code-booking-code" 
                                            class="" 
                                            name="booking-code" 
                                            type="text"
                                            step="1"
                                        >
                                    </div>
                                </div>
                                <button 
                                    data-v-d1452eaf="" 
                                    data-test-id="get-booking-selection-button"
                                    class="button button-primary button-full"
                                >
                                    Load Betslip
                                </button>
                            </div>
                            <div data-v-d1452eaf="" class="notify success" style="display: none;">
                                Congrats! Betslip loaded successfully. Here are your picks.
                            </div>
                        </div>

                        <!-- Content Container yenye Smooth Transition -->
                        <div class="tab-content-container">
                            <Transition name="tab-fade" mode="out-in">
                                <div :key="activeTab" class="tab-content">
                                    <!-- Sport Tab Content -->
                                    <div v-if="activeTab === 'sport'" class="empty-betslip">
                                        <div class="empty-betslip-title">Betslip is empty</div>
                                        <svg data-v-02f45589="" class="svg-icon" style="vertical-align: middle;">
                                            <use data-v-02f45589="" xlink:href="#empty-betslip"></use>
                                        </svg>
                                        <a href="/learn-how-to-bet" class="button button-accent button-full"
                                            data-test-id="click-learn-how-to-bet-link">Learn how to bet</a>
                                        <a href="/upcoming" class="button button-outline button-full"
                                            data-test-id="discoverMoreSports">Discover more sports</a>
                                    </div>

                                    <!-- Virtual Tab Content -->
                                    <div v-else class="empty-betslip">
                                        <div class="empty-betslip-title">Betslip is empty</div>
                                        <svg data-v-02f45589="" class="svg-icon" style="vertical-align: middle;">
                                            <use data-v-02f45589="" xlink:href="#empty-betslip"></use>
                                        </svg>
                                        <a href="/virtual-sports" class="button button-accent button-full">
                                            LEARN HOW TO BET
                                        </a>
                                        <a href="/upcoming-virtual" class="button button-outline button-full">
                                            Upcoming Virtual Events
                                        </a>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Overlay - Inafunika screen nzima */
.sidebar-overlay {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    z-index: 9999 !important;
    cursor: pointer;
}

/* Account Sidebar Child */
.account-sidebar-child {
    position: fixed !important;
    top: 0;
    right: 200px !important;
    height: 100vh;
    width: 400px;
    background: white;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 10001 !important;
    pointer-events: auto;
    overflow-y: auto;
}

/* Transitions za Sidebar */
.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease !important;
}

.slide-left-enter-from {
    transform: translateX(30%) !important;
    opacity: 0;
}

.slide-left-enter-to {
    transform: translateX(0) !important;
    opacity: 1;
}

.slide-left-leave-from {
    transform: translateX(0) !important;
    opacity: 1;
}

.slide-left-leave-to {
    transform: translateX(30%) !important;
    opacity: 0;
}

/* Fade transition kwa overlay */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* ===== SMOOTH TAB TRANSITIONS - HII NDIO MUHIMU ===== */
.tab-content-container {
    position: relative;
    min-height: 300px; /* Kuzuia layout shift */
    width: 100%;
}

.tab-fade-enter-active,
.tab-fade-leave-active {
    transition: all 0.3s ease-in-out;
}

.tab-fade-enter-from {
    opacity: 0;
    transform: translateY(15px);
}

.tab-fade-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.tab-fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.tab-fade-leave-to {
    opacity: 0;
    transform: translateY(-15px);
}

/* Tab content positioning */
.tab-content {
    width: 100%;
    position: relative;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .account-sidebar-child {
        right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
    }
    
    .absolute-content {
        width: 100% !important;
    }
}

/* Existing styles - zimebaki kama zilivyo */
.section.grow-4 {
    flex-grow: 4;
    flex-shrink: 4;
}

.section {
    flex-direction: column;
    flex-grow: 1;
    min-height: 0;
    display: flex;
    position: relative;
}

.absolute-content {
    top: 0;
    bottom: 0;
    right: 0;
}

.side-bar.transition.overlap[data-v-c057a854] {
    transition: transform .35s ease-in;
}

.side-bar.overlap.full-screen[data-v-c057a854] {
    height: 100%;
    top: 0;
}

.side-bar.overlap[data-v-c057a854] {
    z-index: 10000;
    height: 100%;
    position: fixed;
}

.content[data-v-c057a854] {
    background-color: #fff;
    height: 100%;
    overflow-x: hidden;
}

.side-bar-right[data-v-c057a854] {
    right: 0;
}

.side-bar[data-v-c057a854] {
    -ms-overflow-style: none;
    scrollbar-width: none;
    background: #fff;
    width: 100%;
    transition-property: transform, width;
    position: relative;
    overflow: auto;
    transform: translate(0);
}

.side-bar-right {
    border-right: none;
}

.bet-side-bar-wrapper[data-v-38774e99] {
    flex-direction: column;
    height: 100%;
    display: flex;
}

.betslip-header[data-v-821495bc] {
    text-align: left;
    align-items: center;
    min-height: 63px;
    padding: 12px;
    display: flex;
    font-weight: 400;
}

.betslip-header .balance .count[data-v-821495bc], .betslip-header[data-v-821495bc] {
    font-size: 14px;
    line-height: 18px;
}

.betslip-header-content[data-v-821495bc] {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: flex;
}

.betslip-header-info[data-v-821495bc] {
    margin: 5px 0;
    color: #252a2d;
}

a.underline:not([class*=button]) {
    text-decoration: underline;
}

.underline:not([class*=button]) {
    text-decoration: underline;
}

a {
    cursor: pointer;
    user-select: none;
    color: #252a2d;
    text-decoration: none;
}

.betslip-main[data-v-1d98f731] {
    position: relative;
    overflow: auto;
    height: 100%;
}

.tabs[data-v-d3915418] {
    position: relative;
}

.tabs .tabs-menu[data-v-d3915418] {
    user-select: none;
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.tabs.with-top-border.square>.tabs-menu>.tabs-selector[data-v-d3915418] {
    border-top: 1px solid #e6e7e2;
}

.tabs.square .tabs-selector.active.first[data-v-d3915418] {
    border-left: none;
}

.tabs.square .tabs-selector.active[data-v-d3915418] {
    background: #fff;
    border-bottom: none;
}

.tabs.square .tabs-selector[data-v-d3915418]:not(.last) {
    border-right: none;
}

.tabs.square .tabs-selector[data-v-d3915418] {
    background: #f4f5f0;
    border: 1px solid #e6e7e2;
    border-top: none;
    padding: 10px 16px;
}

.tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-weight: 400;
}

.tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418], .tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-size: 14px;
    line-height: 18px;
    color: #252a2d;
}

.tabs .tabs-selector[data-v-d3915418] {
    cursor: pointer;
    width: 100%;
}

.tabs .tabs-selector .tab-item[data-v-d3915418] {
    height: 100%;
}

.tabs .tabs-selector .tab-item-border[data-v-d3915418] {
    justify-content: center;
    align-items: center;
    height: 100%;
    display: flex;
}

.tabs .tabs-selector .tab-item-border .tab-icon[data-v-d3915418] {
    align-items: center;
    display: flex;
}

svg.icon-size-small[data-v-02f45589], img.icon-size-small[data-v-02f45589] {
    width: 14px;
    height: 14px;
}

.tabs .tabs-selector .tab-item-border .tab-icon+.tab-text[data-v-d3915418] {
    margin-left: 8px;
}

.tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-weight: 700;
}

.booking-code[data-v-d1452eaf] {
    margin: 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
}

.booking-code-form[data-v-d1452eaf] {
    background: #f4f5f0;
    padding: 16px;
}

.booking-code .label[data-v-d1452eaf] {
    margin-bottom: 4px;
}

.booking-code-field[data-v-d1452eaf] {
    margin-bottom: 12px;
}

.input-field[data-v-1a892a33] {
    margin-bottom: 16px;
}

.input-field-wrapper[data-v-1a892a33] {
    display: flex;
    position: relative;
}

.input-field-wrapper input[data-v-1a892a33] {
    width: 100%;
    max-width: 100%;
}

input[type=text], input[type=password], input[type=email], input[type=url], input[type=number], input[type=date], input[type=tel], input[type=search] {
    border: 1px solid #e6e7e2;
    border-radius: 0;
    outline: 0;
    padding: 7px 10px;
    font: 14px / 1.1rem Roboto-flex, Helvetica, Arial, sans-serif;
}

.button-full {
    width: 100%;
    max-width: none;
}

.button-primary {
    color: #252a2d;
    fill: #252a2d;
    background-color: #9ce800;
}

.button {
    cursor: pointer;
    max-width: none;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    box-sizing: border-box;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    border: 0;
    border-radius: 0;
    padding: 10px 20px;
    display: inline-block;
}

.notify.success, .notify.theme-green {
    background: #d9edb2;
    border: 1px solid #9ce800;
}

@media (min-width: 600px) {
    .notify {
        padding: 14px 12px;
    }
}

.notify {
    border-radius: 0;
    margin: 5px 0;
    padding: 4%;
}

p, .page-error, .notify, label, .info {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
}

.betslip-main .empty-betslip[data-v-1d98f731] {
    text-align: center;
    margin: 0 10px 10px;
}

.betslip-main .empty-betslip-title[data-v-1d98f731] {
    color: #252a2d;
    margin-top: 15px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
}

.betslip-main .empty-betslip .svg-icon[data-v-1d98f731] {
    width: 100%;
    height: auto;
    max-height: 90px;
    margin: 35px 0;
}

.betslip-main .empty-betslip .button[data-v-1d98f731] {
    margin-top: 8px;
}

.button-accent {
    color: #fff;
    fill: #fff;
    background-color: #252a2d;
}

.button-outline {
    color: #252a2d;
    background-color: #fff;
    border: 1px solid #353b40;
}

.betslip-header-link[data-v-821495bc] {
    flex: 0 55%;
    display: flex;
}

.view-my-bets[data-v-821495bc] {
    cursor: pointer;
    align-items: center;
    display: flex;
}

.view-my-bets .icon[data-v-821495bc] {
    margin-right: 8px;
    transform: rotate(90deg);
}

.view-my-bets-link[data-v-821495bc] {
    user-select: none;
    line-height: 17px;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 500;
}

.betslip-header .balance[data-v-821495bc] {
    text-align: right;
    flex-wrap: wrap;
    flex: 0 45%;
    justify-content: flex-end;
    align-items: center;
    display: flex;
}

.betslip-header-title label[data-v-821495bc] {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
}

label {
    color: #252a2d;
    margin: 5px 0;
    display: inline-block;
}

.betslip-header .balance .count[data-v-821495bc] {
    margin-left: 4px;
    color: #252a2d;
    font-weight: 700;
}
</style>