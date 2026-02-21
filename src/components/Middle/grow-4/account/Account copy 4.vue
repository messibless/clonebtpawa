<template>
    <div data-v-c057a854="" class="side-bar content side-bar-right close overlap transition full-screen"
                 style="width: 384px; position: absolute; z-index: 10;"  :style="sidebarStyle">
     
                 <div data-v-0df18d8c="" class="my-account-container">
                     <div data-v-0df18d8c="" class="account-menu-header">
                         <div data-v-0df18d8c="" @click="handleClose" class="close" data-test-id="account-menu-close"><svg data-v-02f45589=""
                                 data-v-0df18d8c="" class="svg-icon" style="vertical-align: top;"><!---->
                                 <use data-v-02f45589="" xlink:href="#icon-cross-squared"></use>
                             </svg></div>
                     </div>
                     <div data-v-0df18d8c="" class="account-menu-cta-box">
                         <div data-v-0df18d8c="" class="account-menu-actions"><a data-v-0df18d8c="" href="/join-now"
                                 class="button button-primary" data-test-id="account-menu-joinnow-btn">JOIN NOW</a> <a
                                 data-v-0df18d8c="" href="/login" class="button button-outline"
                                 data-test-id="account-menu-login-btn">LOG IN</a></div>
                     </div>
                     <div data-v-0df18d8c="" class="account-menu-contents">
                         <div data-v-d74dc31b="" data-v-0df18d8c="" class="account-menu-group"><!---->
                             <div data-v-d74dc31b="" class="account-menu-group-items">
                                 <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a
                                         data-v-fe161ed5="" id="541086" data-test-id="account-menu-item-a-button" href=""
                                         target="_self" class="account-menu-item">
                                         <div data-v-fe161ed5=""><svg data-v-02f45589="" data-v-fe161ed5=""
                                                 class="svg-icon icon-account-menu"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#icon-language-change"></use>
                                             </svg> <span data-v-fe161ed5="">Change Language</span> <!----></div>
                                         <div data-v-fe161ed5="" class="lang-flag-icons"><svg data-v-02f45589=""
                                                 data-v-fe161ed5="" class="svg-icon icon-menu-flag icon-size-small"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#icon-language-menu-sw"></use>
                                             </svg> <svg data-v-02f45589="" data-v-fe161ed5=""
                                                 class="svg-icon icon-menu-flag icon-size-small"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#icon-language-menu-en"></use>
                                             </svg></div>
                                     </a></div>
                                 <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a
                                         data-v-fe161ed5="" id="541087" data-test-id="account-menu-item-a-button"
                                         href="/why-join" target="_self" class="account-menu-item">
                                         <div data-v-fe161ed5=""><svg data-v-02f45589="" data-v-fe161ed5=""
                                                 class="svg-icon icon-account-menu"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#icon-help"></use>
                                             </svg> <span data-v-fe161ed5="">Why Join?</span> <!----></div>
                                         <div data-v-fe161ed5="" class="icon-wrapper"><svg data-v-02f45589=""
                                                 data-v-fe161ed5="" class="svg-icon icon-size-medium icon-arrow-right"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#arrow_right"></use>
                                             </svg></div>
                                     </a></div>
                                 <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a
                                         data-v-fe161ed5="" id="541088" data-test-id="account-menu-item-a-button"
                                         href="/deposit" target="_self" class="account-menu-item">
                                         <div data-v-fe161ed5=""><svg data-v-02f45589="" data-v-fe161ed5=""
                                                 class="svg-icon icon-account-menu"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#icon-deposit-menu"></use>
                                             </svg> <span data-v-fe161ed5="">Deposit</span> <!----></div>
                                         <div data-v-fe161ed5="" class="icon-wrapper"><svg data-v-02f45589=""
                                                 data-v-fe161ed5="" class="svg-icon icon-size-medium icon-arrow-right"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#arrow_right"></use>
                                             </svg></div>
                                     </a></div>
                             </div>
                         </div>
                         <div data-v-d74dc31b="" data-v-0df18d8c="" class="account-menu-group"><!---->
                             <div data-v-d74dc31b="" class="account-menu-group-items">
                                 <div data-v-aabe1219="" data-v-d74dc31b=""
                                     class="expansion-panel account-menu-expansion">
                                     <div data-v-aabe1219="" data-test-id="toggle-open-button"
                                         class="title table pointer"><!----> <svg data-v-02f45589="" data-v-d74dc31b=""
                                             class="svg-icon account-menu-icon"
                                             style="vertical-align: middle; color: rgb(170, 174, 176);"><!---->
                                             <use data-v-02f45589="" xlink:href="#icon-help"></use>
                                         </svg>
                                         <div data-v-aabe1219="" class="row-cell align-middle title-text">
                                             <h3 data-v-aabe1219="">Help Center</h3>
                                         </div> <!---->
                                         <div data-v-aabe1219="" class="row-cell align-middle expand-icon"><svg
                                                 data-v-02f45589="" data-v-aabe1219="" class="svg-icon icon-size-medium"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#icon-arrow-down"></use>
                                             </svg></div>
                                     </div> <!---->
                                 </div>
                                 <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a
                                         data-v-fe161ed5="" id="541094" data-test-id="account-menu-item-a-button"
                                         href="https://play.google.com/store/apps/details?id=com.betpawa.androidapp.tz"
                                         target="_blank" class="account-menu-item">
                                         <div data-v-fe161ed5=""><svg data-v-02f45589="" data-v-fe161ed5=""
                                                 class="svg-icon icon-account-menu"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#icon-download-app-menu"></use>
                                             </svg> <span data-v-fe161ed5="">Download the App</span> <!----></div>
                                         <div data-v-fe161ed5="" class="icon-wrapper"><svg data-v-02f45589=""
                                                 data-v-fe161ed5="" class="svg-icon icon-size-medium icon-arrow-right"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#arrow_right"></use>
                                             </svg></div>
                                     </a></div>
                                 <div data-v-aabe1219="" data-v-d74dc31b=""
                                     class="expansion-panel account-menu-expansion">
                                     <div data-v-aabe1219="" data-test-id="toggle-open-button"
                                         class="title table pointer"><!----> <svg data-v-02f45589="" data-v-d74dc31b=""
                                             class="svg-icon account-menu-icon"
                                             style="vertical-align: middle; color: rgb(170, 174, 176);"><!---->
                                             <use data-v-02f45589="" xlink:href="#icon-logo"></use>
                                         </svg>
                                         <div data-v-aabe1219="" class="row-cell align-middle title-text">
                                             <h3 data-v-aabe1219="">More on betPawa</h3>
                                         </div> <!---->
                                         <div data-v-aabe1219="" class="row-cell align-middle expand-icon"><svg
                                                 data-v-02f45589="" data-v-aabe1219="" class="svg-icon icon-size-medium"
                                                 style="vertical-align: middle;"><!---->
                                                 <use data-v-02f45589="" xlink:href="#icon-arrow-down"></use>
                                             </svg></div>
                                     </div> <!---->
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
 
 </template>
 
 <script setup>

 // Define emit event
const emit = defineEmits(['close'])

// Function ya kufunga sidebar
const handleClose = () => {
  emit('close')
}
 
import { computed } from 'vue'



// Compute sidebar style dynamically
const sidebarStyle = computed(() => {
  return {
    width: '384px',
    position: 'absolute',
    zIndex: '10003', // Juu zaidi kuliko betslip
    right: '0' // Right ita-set na CSS ya parent
  }
})
 </script>
 
 <style lang="scss" scoped>
 .side-bar.transition.overlap[data-v-c057a854] {
     transition: transform .35s ease-in;
 }

//  .side-bar.overlap.full-screen[data-v-c057a854] {
//      height: 100vh;
//      top: 0;
//  }


/* Badilisha fixed kuwa absolute kwa kuwa parent ina position relative */
.side-bar.overlap.full-screen[data-v-c057a854] {
    height: 100vh !important;
    top: 0 !important;
    position: absolute !important; /* Badilisha kuwa absolute */
    width: 384px !important;
}

/* Style nyingine zibaki ziko sawa */
.side-bar.transition.overlap[data-v-c057a854] {
    transition: transform .35s ease-in;
}

.side-bar.overlap[data-v-c057a854] {
    height: 100vh;
    position: absolute;
    background-color: #323b61;
}
 .side-bar.overlap.full-screen[data-v-c057a854] {
    height: 100vh !important;
    top: 0 !important;
    position: fixed !important; /* Badilisha kutoka absolute kuwa fixed */
    z-index: 10002 !important; /* Ongeza z-index kuwa juu zaidi */
    width: 384px !important; /* Hakikisha upana ni sawa */
    
}
 @media (min-width: 768px) {
     .side-bar.overlap.open[data-v-c057a854] {
         box-shadow: 5px 0 8px rgba(0, 0, 0, .33);
     }
 }
 .side-bar.overlap[data-v-c057a854] {
     z-index: 10000;
     height: 100vh;
     position: fixed;
     background-color: #323b61;
 }
 .content[data-v-c057a854] {
     background-color: #fff;
     height: 100%;
     overflow-x: hidden;
 }
 
 .side-bar-right[data-v-c057a854] {
     right: 0;
 }
 .side-bar-right {
     border-left: 1px solid #252a2d;
     border-right: none;
 }
 .side-bar[data-v-c057a854] {
     -ms-overflow-style: none;
     scrollbar-width: none;
     background: #fff;
     width: 100%;
     transition-property: transform, width;
     position: relative;
     overflow: hidden;
     transform: translate(0);
 }
 .my-account-container[data-v-0df18d8c] {
     background: #f4f5f0;
     height: 100vh;
     display: flex;
     flex-direction: column;
     padding: 12px;
     box-sizing: border-box;
     position: relative;
     z-index: 10001;
     overflow: hidden;
 }
 .my-account-container .account-menu-header[data-v-0df18d8c] {
     padding-bottom: 8px;
     display: flex;
     flex-shrink: 0;
 }
 .my-account-container .account-menu-header .close[data-v-0df18d8c] {
     margin-left: auto;
 }
 .my-account-container .account-menu-header .close svg[data-v-0df18d8c] {
     cursor: pointer;
     fill: #353b40;
     width: 18px;
     height: 18px;
 }
 .my-account-container .account-menu-cta-box[data-v-0df18d8c] {
     background-color: #fff;
     border-radius: 4px;
     padding: 12px;
     flex-shrink: 0;
 }
 .my-account-container .account-menu-actions[data-v-0df18d8c] {
     align-items: center;
     column-gap: 12px;
     display: flex;
 }
 .my-account-container .account-menu-actions .button[data-v-0df18d8c] {
     border-radius: 4px;
     flex: 1;
     justify-content: center;
     align-items: center;
     max-width: 100%;
     height: 32px;
     display: flex;
 }
 .my-account-container .account-menu-actions .button-primary[data-v-0df18d8c] {
     border: 1px solid #9ce800;
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
     font-weight: 700;
     font-size: 14px;
 }
 .my-account-container .account-menu-actions .button[data-v-0df18d8c] {
     border-radius: 4px;
     flex: 1;
     justify-content: center;
     align-items: center;
     max-width: 100%;
     height: 32px;
     display: flex;
 }
 .button-outline {
     color: #252a2d;
     background-color: #fff;
     border: 1px solid #353b40;
 }
 .my-account-container .account-menu-contents[data-v-0df18d8c] {
     color: #252a2d;
     margin-top: 12px;
     flex: 1;
     overflow-y: auto;
     -ms-overflow-style: none;
     scrollbar-width: none;
 }
 .my-account-container .account-menu-contents[data-v-0df18d8c]::-webkit-scrollbar {
     display: none;
 }
 .account-menu-group[data-v-d74dc31b] {
     margin-top: 12px;
 }
 .account-menu-item-wrapper[data-v-fe161ed5]:not(:last-child) {
     border-bottom: 2px solid #f4f5f0;
 }
 .account-menu-item-wrapper[data-v-fe161ed5]:first-child {
     border-radius: 4px 4px 0 0;
 }
 .account-menu-group-items div[data-v-d74dc31b] {
     background: #fff;
 }
 .account-menu-item[data-v-fe161ed5] {
     height: 42px;
 }
 .account-menu-item[data-v-fe161ed5] {
     text-align: left;
     width: 100%;
     text-transform: unset;
     justify-content: space-between;
     align-items: center;
     padding: 12px;
     display: flex;
 }
 .account-menu-item[data-v-fe161ed5], .account-menu-item[data-v-fe161ed5] .type-new .badge-text {
     font-weight: 400;
 }
 .account-menu-item[data-v-fe161ed5] {
     font-size: 14px;
     line-height: 18px;
 }
 a {
     cursor: pointer;
     user-select: none;
     color: inherit;
     text-decoration: none;
 }
 .account-menu-item .icon-account-menu[data-v-fe161ed5] {
     fill: #aaaeb0;
     width: 16px;
     height: 16px;
     margin-right: 8px;
 }
 .account-menu-item span[data-v-fe161ed5] {
     vertical-align: middle;
     color: #252a2d;
 }
 .account-menu-item .lang-flag-icons[data-v-fe161ed5] {
     column-gap: 8px;
     display: flex;
 }
 .account-menu-item .icon-menu-flag[data-v-fe161ed5]:first-child {
     opacity: .3;
 }
 .account-menu-item .icon-menu-flag[data-v-fe161ed5] {
     border-radius: 100%;
     position: relative;
 }
 svg.icon-size-small[data-v-02f45589], img.icon-size-small[data-v-02f45589] {
     width: 14px;
     height: 14px;
 }
 .account-menu-item .icon-menu-flag[data-v-fe161ed5] {
     border-radius: 100%;
     position: relative;
 }
 svg.icon-size-small[data-v-02f45589], img.icon-size-small[data-v-02f45589] {
     width: 14px;
     height: 14px;
 }
 .account-menu-item-wrapper[data-v-fe161ed5]:not(:last-child) {
     border-bottom: 2px solid #f4f5f0;
 }
 .account-menu-group-items div[data-v-d74dc31b] {
     background: #fff;
 }
 .account-menu-item-wrapper[data-v-fe161ed5] {
     background: #fff;
 }
 .account-menu-item[data-v-fe161ed5] {
     height: 42px;
 }
 .account-menu-item[data-v-fe161ed5] {
     text-align: left;
     width: 100%;
     text-transform: unset;
     justify-content: space-between;
     align-items: center;
     padding: 12px;
     display: flex;
 }
 .account-menu-item .icon-account-menu[data-v-fe161ed5] {
     fill: #aaaeb0;
     width: 16px;
     height: 16px;
     margin-right: 8px;
 }
 .account-menu-item span[data-v-fe161ed5] {
     vertical-align: middle;
     color: #252a2d;
 }
 .account-menu-item .icon-wrapper[data-v-fe161ed5] {
     width: 13px;
 }
 .account-menu-item .icon-arrow-right[data-v-fe161ed5] {
     fill: #252a2d;
 }
 svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
     width: 16px;
     height: 16px;
 }
 .account-menu-item-wrapper{
     background-color: red;
 }
 .account-menu-item-wrapper[data-v-fe161ed5]:last-child {
     border-radius: 0 0 4px 4px;
 }
 .account-menu-group-items div[data-v-d74dc31b] {
     background: #fff;
 }
 .account-menu-item[data-v-fe161ed5] {
     height: 42px;
 }
 .account-menu-item[data-v-fe161ed5] {
     text-align: left;
     width: 100%;
     text-transform: unset;
     justify-content: space-between;
     align-items: center;
     padding: 12px;
     display: flex;
     font-weight: 400;
     font-size: 14px;
     line-height: 18px;
 }
 .account-menu-item .icon-account-menu[data-v-fe161ed5] {
     fill: #aaaeb0;
     width: 16px;
     height: 16px;
     margin-right: 8px;
 }
 .account-menu-group[data-v-d74dc31b] {
     margin-top: 12px;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion {
     box-sizing: border-box;
     border: 1px solid transparent;
     border-bottom: 0;
     margin-bottom: 2px;
     overflow: hidden;
 }
 .account-menu-group-items div[data-v-d74dc31b] {
     background: #fff;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .title {
     background: #fff;
     height: 41px;
     padding: 11px;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .title {
     text-align: left;
     width: 100%;
     text-transform: unset;
     justify-content: space-between;
     align-items: center;
     padding: 12px;
     display: flex;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .title {
     font-weight: 400;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .title {
     font-size: 14px;
     line-height: 18px;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .account-menu-icon {
     fill: #aaaeb0;
     width: 16px;
     height: 16px;
     margin-right: 8px;
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
 .table .row-cell.align-middle {
     vertical-align: middle;
 }
 .expansion-panel .expand-icon[data-v-aabe1219] {
     display: flex;
 }
 svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
     width: 16px;
     height: 16px;
 }
 .account-menu-group[data-v-d74dc31b] {
     margin-top: 12px;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion {
     box-sizing: border-box;
     border: 1px solid transparent;
     border-bottom: 0;
     margin-bottom: 2px;
     overflow: hidden;
 }
 .account-menu-group-items div[data-v-d74dc31b] {
     background: #fff;
 }
 
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .title {
     text-align: left;
     width: 100%;
     text-transform: unset;
     justify-content: space-between;
     align-items: center;
     padding: 12px;
     display: flex;
     font-weight: 400;
     font-size: 14px;
     line-height: 18px;
     background: #fff;
     height: 41px;
     padding: 11px;
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
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .account-menu-icon {
     fill: #aaaeb0;
     width: 16px;
     height: 16px;
     margin-right: 8px;
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
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .title h3 {
     min-height: unset;
     text-transform: unset;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .title h3{
     font-weight: 400;
 }
 .account-menu-group-items[data-v-d74dc31b] .account-menu-expansion .title h3 {
     font-size: 14px;
     line-height: 18px;
 }
 .table .row-cell.align-middle {
     vertical-align: middle;
 }
 .expansion-panel .expand-icon[data-v-aabe1219] {
     display: flex;
 }
 svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
     width: 16px;
     height: 16px;
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
     overflow: hidden;
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
 }
 .betslip-header[data-v-821495bc] {
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
 }
 .tabs.square .tabs-selector[data-v-d3915418] {
     background: #f4f5f0;
     border: 1px solid #e6e7e2;
     border-top: none;
     padding: 10px 16px;
 }
 </style>