<script setup>
import { ref } from 'vue';
    import AirtelLogo from '../../../assets/img/airtel.png';
    import RightSidebar from '../../../components/Header/account-sidebar/RightSidebar.vue'
    import Account from './account/Account.vue';

    import { inject } from 'vue'


// Pokonya sidebar state kutoka App.vue
const accountSidebar = inject('accountSidebar')

// Function ya kufunga sidebar
const closeSidebar = () => {
  if (accountSidebar) {
    accountSidebar.close()
  }
}
</script>

<template>
    <div class="section grow-4 parent-with-sidebar">
        <div class="absolute-content content">
           

            <!-- <Account v-if="sidebar?.isSidebarOpen" @close="sidebar?.closeSidebar"/> -->
            <Account v-if="accountSidebar?.isOpen.value" @close="closeSidebar"  class="account-sidebar-child"/>




            <div data-v-c057a854="" class="side-bar content side-bar-right open transition">
                <div data-v-38774e99="" class="bet-side-bar-wrapper">
                    <div data-v-821495bc="" data-v-38774e99="">
                        <div data-v-821495bc="" class="betslip-header">
                            <div data-v-821495bc="" class="betslip-header-content"><span data-v-821495bc=""
                                    class="betslip-header-info">Not logged in - <a href="/join-now"
                                        class="underline">Join Now</a> or <a
                                        href="/login?returnPrevPath=1&amp;reopenBetslip=1" class="underline">Log
                                        In</a></span></div>
                        </div>
                    </div>

                    <!-- start here -->
                    <div data-v-1d98f731="" data-v-38774e99="" class="betslip-main ">
                        <div data-v-d3915418="" data-v-1d98f731="" class="tabs square with-top-border">
                            <ul data-v-d3915418="" class="tabs-menu align-center">
                                <li data-v-d3915418="" class="active first tabs-selector" data-test-id="tabs-REAL">
                                    <div data-v-d3915418="" class="tab-item">
                                        <div data-v-d3915418="" class="tab-item-border">
                                            <div data-v-d3915418="" class="tab-icon"><svg data-v-02f45589=""
                                                    data-v-d3915418="" class="svg-icon icon icon-size-small"
                                                    style="vertical-align: middle;"><!---->
                                                    <use data-v-02f45589="" xlink:href="#icon-ball-with-shadow"></use>
                                                </svg></div> <span data-v-d3915418="" class="tab-text">Sport</span>
                                            <!---->
                                        </div>
                                    </div>
                                </li>
                                <li data-v-d3915418="" class="last tabs-selector" data-test-id="tabs-VIRTUAL">
                                    <div data-v-d3915418="" class="tab-item">
                                        <div data-v-d3915418="" class="tab-item-border">
                                            <div data-v-d3915418="" class="tab-icon"><svg data-v-02f45589=""
                                                    data-v-d3915418="" class="svg-icon icon icon-size-small"
                                                    style="vertical-align: middle;"><!---->
                                                    <use data-v-02f45589="" xlink:href="#icon-virtual-sport"></use>
                                                </svg></div> <span data-v-d3915418="" class="tab-text">Virtuals</span>
                                            <!---->
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> <!---->
                        <div data-v-d1452eaf="" data-v-1d98f731="" class="booking-code">
                            <div data-v-d1452eaf="" class="booking-code-form">
                                <div data-v-d1452eaf="" class="label"><span data-v-d1452eaf="">Booking code</span></div>
                                <div data-v-1a892a33="" data-v-d1452eaf="" class="input-field booking-code-field">
                                    <!---->
                                    <div data-v-1a892a33="" class="input-field-wrapper input-icon-undefined"> <!---->
                                        <!----> <input data-v-1a892a33="" min="0" placeholder="Enter booking code"
                                            id="booking-code-booking-code" class="" name="booking-code" type="text"
                                            step="1"></div> <!----> <!---->
                                </div> <!----> <button data-v-d1452eaf="" data-test-id="get-booking-selection-button"
                                    class="button button-primary button-full">Load Betslip</button>
                            </div>
                            <div data-v-d1452eaf="" class="notify success" style="display: none;">Congrats! Betslip
                                loaded successfully. Here are your picks.</div>
                        </div> <!---->
                        <div data-v-1d98f731="" class="empty-betslip">
                            <div data-v-1d98f731="" class="empty-betslip-title">Betslip is empty</div> <svg
                                data-v-02f45589="" data-v-1d98f731="" class="svg-icon"
                                style="vertical-align: middle;"><!---->
                                <use data-v-02f45589="" xlink:href="#empty-betslip"></use>
                            </svg> <!----> <a data-v-1d98f731="" href="/learn-how-to-bet"
                                class="button button-accent button-full"
                                data-test-id="click-learn-how-to-bet-link">Learn how to bet</a> <a data-v-1d98f731=""
                                href="/upcoming" class="button button-outline button-full"
                                data-test-id="discoverMoreSports">Discover more sports</a>
                        </div>
                    </div> 
                    <!-- end here -->


                </div> 
            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
/* Parent container yenye width 384px */
.parent-with-sidebar {
    width: 384px !important;
    max-width: 384px !important;
    min-width: 384px !important;
    flex-grow: 0 !important; /* Ondoa flex grow */
    flex-shrink: 0 !important; /* Ondoa flex shrink */
    flex-basis: 384px !important; /* Weka fixed width */
}

/* Rekebisha content ndani ya parent */
.parent-with-sidebar .absolute-content {
    width: 100% !important;
    max-width: 100% !important;
}




.account-sidebar-child {
    /* Weka sidebar ya account 200px kutoka kulia ya parent */
    right: 200px !important;
    
    /* Hakikisha ina z-index ya juu zaidi */
    z-index: 10003 !important;
    
    /* Ongeza transition kwa smoother movement */
    transition: right 0.35s ease-in !important;
}

/* Rekebisha content ndani ya parent */
.parent-with-sidebar .absolute-content {
    width: 100% !important;
    max-width: 100% !important;
    position: relative !important;
}

/* Rekebisha side bar */
.parent-with-sidebar .side-bar[data-v-c057a854] {
    width: 100% !important;
    max-width: 100% !important;
}

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
    // position: absolute;
    top: 0;
    bottom: 0;
    // left: 0;
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
    border-left: 1px solid #252a2d;
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
}
.tabs[data-v-d3915418] {
    position: relative;
}
.tabs .tabs-menu[data-v-d3915418] {
    user-select: none;
    list-style: none;
    display: flex;
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
.tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418], .tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-size: 14px;
    line-height: 18px;
    color: #252a2d;
}
.tabs.with-top-border.square>.tabs-menu>.tabs-selector[data-v-d3915418] {
    border-top: 1px solid #e6e7e2;
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
.tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-weight: 400;
}
.tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418], .tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
    font-size: 14px;
    line-height: 18px;
}
.tabs .tabs-selector[data-v-d3915418] {
    cursor: pointer;
    width: 100%;
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
}
.button, .button-yellow, .button-green, .button-grey, .button-orange, .button-yellow-full, .button-green-full, .button-grey-full, .button-orange-full, .item-yellow, .item-grey {
    font-weight: 700;
}
.button, .button-yellow, .button-green, .button-grey, .button-orange, .button-yellow-full, .button-green-full, .button-grey-full, .button-orange-full, .item-yellow, .item-grey {
    font-size: 14px;
}
.button, .button-yellow, .button-green, .button-grey, .button-orange, .button-yellow-full, .button-green-full, .button-grey-full, .button-orange-full, .item-yellow, .item-grey {
    // -webkit-appearance: none;
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
}
.button-text.medium, .notify, label, .info {
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
}
.betslip-main .empty-betslip-title[data-v-1d98f731] {
    font-weight: 700;
}
.betslip-main .empty-betslip-title[data-v-1d98f731], .betslip-toolbar[data-v-1d98f731], .cashout-availability-description[data-v-1d98f731], small[data-v-1d98f731] {
    font-size: 14px;
    line-height: 18px;
}
.betslip-main .empty-betslip .svg-icon[data-v-1d98f731] {
    width: 100%;
    height: auto;
    max-height: 90px;
    margin: 35px 0;
}
.betslip-main .empty-betslip[data-v-1d98f731] {
    text-align: center;
    margin: 0 10px 10px;
}
.betslip-main .empty-betslip .button[data-v-1d98f731] {
    margin-top: 8px;
}
.button-full {
    width: 100%;
    max-width: none;
}
.button-accent {
    color: #fff;
    fill: #fff;
    background-color: #252a2d;
}
.button {
    cursor: pointer;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    // -webkit-appearance: none;
    box-sizing: border-box;
}
.betslip-main .empty-betslip .button[data-v-1d98f731] {
    margin-top: 8px;
}
.button-outline {
    color: #252a2d;
    background-color: #fff;
    border: 1px solid #353b40;
}










</style>