<!-- RightSidebar.vue -->
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import AirtelImage from '../../../assets/img/airtel.png'
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false
  },
  title: {
    type: String,
    default: 'Sidebar'
  },
  width: {
    type: String,
    default: '320px' // Betpawa inatumia ~320px
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  },
  showCloseButton: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['close', 'open'])

const isVisible = ref(false)
const isMounted = ref(false)
const sidebarRef = ref(null)

// Handle ESC key press
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeSidebar()
  }
}

// Close sidebar when clicking outside
const handleClickOutside = (e) => {
  if (!props.isOpen || !props.closeOnClickOutside) return
  
  // Check if click is outside sidebar
  if (sidebarRef.value && !sidebarRef.value.contains(e.target)) {
    // Check if click came from a button that opens sidebar
    const isOpeningButton = e.target.closest('[data-sidebar-trigger]') || 
                            e.target.closest('.menu-button')
    
    if (!isOpeningButton) {
      closeSidebar()
    }
  }
}

const closeSidebar = () => {
  emit('close')
}

// Handle visibility transitions
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    isMounted.value = true
    // Small delay to trigger CSS transition
    setTimeout(() => {
      isVisible.value = true
      emit('open')
      
      // Disable body scroll when sidebar is open (like betpawa)
      document.body.style.overflow = 'hidden'
    }, 10)
  } else {
    isVisible.value = false
    // Wait for transition to finish before unmounting
    setTimeout(() => {
      if (!props.isOpen) {
        isMounted.value = false
        // Re-enable body scroll
        document.body.style.overflow = ''
      }
    }, 300)
  }
})

// Set up event listeners
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  if (props.closeOnClickOutside) {
    document.addEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.removeEventListener('click', handleClickOutside)
  // Clean up body style
  document.body.style.overflow = ''
})

// Initialize based on props
onMounted(() => {
  if (props.isOpen) {
    isMounted.value = true
    setTimeout(() => {
      isVisible.value = true
      document.body.style.overflow = 'hidden'
    }, 10)
  }
})
</script>

<template>
  <!-- Backdrop - exactly like betpawa -->
  <div 
    v-if="isMounted"
    class="sidebar-backdrop"
    :class="{ 'visible': isVisible }"
    @click="closeOnClickOutside ? closeSidebar() : null"
  >
    <!-- Sidebar Content -->
    <div 
      ref="sidebarRef"
      class="sidebar-content"
      :class="{ 'visible': isVisible }"
      :style="{ width: width }"
      @click.stop
    >
      <div data-v-0df18d8c="" class="my-account-container">
        <div data-v-0df18d8c="" class="account-menu-header">
          <div data-v-0df18d8c="" class="close" data-test-id="account-menu-close"><svg @click="closeSidebar" data-v-02f45589=""
              data-v-0df18d8c="" class="svg-icon" style="vertical-align: top;"><!---->
              <use data-v-02f45589="" xlink:href="#icon-cross-squared"></use>
            </svg></div>
        </div>
        <div data-v-0df18d8c="" class="account-menu-cta-box">
          <div data-v-3e7e08c6="" data-v-d7674060="" data-v-0df18d8c="" class="user-phone">
            <div data-v-3e7e08c6="" class="table"><!---->
              <div data-v-3e7e08c6="" class="row-cell align-middle user-phone-icon"><img data-v-1f7f90db=""
                  data-v-3e7e08c6="" class="image-icon icon-size-very-large" :src="AirtelImage" style=""></div>
              <div data-v-3e7e08c6="" class="row-cell align-middle user-phone-number">
                <div data-v-3e7e08c6="" class="user-phone-info-wrapper">
                  <div data-v-3e7e08c6="" class="user-phone-info"><!---->
                    <div data-v-3e7e08c6="">+255 627368766</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-0df18d8c="" class="account-menu-actions"><a data-v-0df18d8c="" href="/deposit"
                class="button button-primary" data-test-id="account-menu-deposit-btn">DEPOSIT</a> <a data-v-0df18d8c=""
                href="/withdraw" class="button button-outline" data-test-id="account-menu-withdraw-btn">WITHDRAW</a>
            </div>
          </div>
        </div>
        <div data-v-0df18d8c="" class="account-menu-contents">
          <div data-v-d74dc31b="" data-v-0df18d8c="" class="account-menu-group">
            <div data-v-d74dc31b="" class="account-menu-group-name">My Account</div>
            <div data-v-d74dc31b="" class="account-menu-group-items">
              <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a data-v-fe161ed5=""
                  id="541069" data-test-id="account-menu-item-a-button" href="/notifications" target="_self"
                  class="account-menu-item">
                  <div data-v-fe161ed5=""><svg data-v-02f45589="" data-v-fe161ed5="" class="svg-icon icon-account-menu"
                      style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#message-promotions"></use>
                    </svg> <span data-v-fe161ed5="">Notifications</span> <!----></div>
                  <div data-v-fe161ed5="" class="icon-wrapper"><svg data-v-02f45589="" data-v-fe161ed5=""
                      class="svg-icon icon-size-medium icon-arrow-right" style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#arrow_right"></use>
                    </svg></div>
                </a></div>
              <div data-v-aabe1219="" data-v-d74dc31b="" class="expansion-panel account-menu-expansion">
                <div data-v-aabe1219="" data-test-id="toggle-open-button" class="title table pointer"><!----> <svg
                    data-v-02f45589="" data-v-d74dc31b="" class="svg-icon account-menu-icon"
                    style="vertical-align: middle; color: rgb(170, 174, 176);"><!---->
                    <use data-v-02f45589="" xlink:href="#icon-top-menu"></use>
                  </svg>
                  <div data-v-aabe1219="" class="row-cell align-middle title-text">
                    <h3 data-v-aabe1219="">Manage account</h3>
                  </div>
                  <!---->
                  <div data-v-aabe1219="" class="row-cell align-middle expand-icon"><svg data-v-02f45589=""
                      data-v-aabe1219="" class="svg-icon icon-size-medium" style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#icon-arrow-down"></use>
                    </svg></div>
                </div> <!---->
              </div>
              <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a data-v-fe161ed5=""
                  id="541073" data-test-id="account-menu-item-a-button" href="/bets" target="_self"
                  class="account-menu-item">
                  <div data-v-fe161ed5=""><svg data-v-02f45589="" data-v-fe161ed5="" class="svg-icon icon-account-menu"
                      style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#icon-mybets-menu"></use>
                    </svg> <span data-v-fe161ed5="">My Bets</span> <!----></div>
                  <div data-v-fe161ed5="" class="icon-wrapper"><svg data-v-02f45589="" data-v-fe161ed5=""
                      class="svg-icon icon-size-medium icon-arrow-right" style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#arrow_right"></use>
                    </svg></div>
                </a></div>
              <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a data-v-fe161ed5=""
                  id="541074" data-test-id="account-menu-item-a-button" href="/statements" target="_self"
                  class="account-menu-item">
                  <div data-v-fe161ed5=""><svg data-v-02f45589="" data-v-fe161ed5="" class="svg-icon icon-account-menu"
                      style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#icon-statement-menu"></use>
                    </svg> <span data-v-fe161ed5="">Statement</span> <!----></div>
                  <div data-v-fe161ed5="" class="icon-wrapper"><svg data-v-02f45589="" data-v-fe161ed5=""
                      class="svg-icon icon-size-medium icon-arrow-right" style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#arrow_right"></use>
                    </svg></div>
                </a></div>
              <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a data-v-fe161ed5=""
                  id="541075" data-test-id="account-menu-item-a-button" href="" target="_self"
                  class="account-menu-item">
                  <div data-v-fe161ed5=""><svg data-v-02f45589="" data-v-fe161ed5="" class="svg-icon icon-account-menu"
                      style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#icon-language-change"></use>
                    </svg> <span data-v-fe161ed5="">Change Language</span> <!----></div>
                  <div data-v-fe161ed5="" class="lang-flag-icons"><svg data-v-02f45589="" data-v-fe161ed5=""
                      class="svg-icon icon-menu-flag icon-size-small" style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#icon-language-menu-sw"></use>
                    </svg> <svg data-v-02f45589="" data-v-fe161ed5="" class="svg-icon icon-menu-flag icon-size-small"
                      style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#icon-language-menu-en"></use>
                    </svg></div>
                </a></div>
            </div>
          </div>
          <div data-v-d74dc31b="" data-v-0df18d8c="" class="account-menu-group">
            <div data-v-d74dc31b="" class="account-menu-group-name">General</div>
            <div data-v-d74dc31b="" class="account-menu-group-items">
              <div data-v-aabe1219="" data-v-d74dc31b="" class="expansion-panel account-menu-expansion">
                <div data-v-aabe1219="" data-test-id="toggle-open-button" class="title table pointer"><!----> <svg
                    data-v-02f45589="" data-v-d74dc31b="" class="svg-icon account-menu-icon"
                    style="vertical-align: middle; color: rgb(170, 174, 176);"><!---->
                    <use data-v-02f45589="" xlink:href="#icon-help"></use>
                  </svg>
                  <div data-v-aabe1219="" class="row-cell align-middle title-text">
                    <h3 data-v-aabe1219="">Help Center</h3>
                  </div>
                  <!---->
                  <div data-v-aabe1219="" class="row-cell align-middle expand-icon"><svg data-v-02f45589=""
                      data-v-aabe1219="" class="svg-icon icon-size-medium" style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#icon-arrow-down"></use>
                    </svg></div>
                </div> <!---->
              </div>
              <div data-v-aabe1219="" data-v-d74dc31b="" class="expansion-panel account-menu-expansion">
                <div data-v-aabe1219="" data-test-id="toggle-open-button" class="title table pointer"><!----> <svg
                    data-v-02f45589="" data-v-d74dc31b="" class="svg-icon account-menu-icon"
                    style="vertical-align: middle; color: rgb(170, 174, 176);"><!---->
                    <use data-v-02f45589="" xlink:href="#icon-logo"></use>
                  </svg>
                  <div data-v-aabe1219="" class="row-cell align-middle title-text">
                    <h3 data-v-aabe1219="">More on betPawa</h3>
                  </div>
                  <!---->
                  <div data-v-aabe1219="" class="row-cell align-middle expand-icon"><svg data-v-02f45589=""
                      data-v-aabe1219="" class="svg-icon icon-size-medium" style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#icon-arrow-down"></use>
                    </svg></div>
                </div> <!---->
              </div>
            </div>
          </div>
          <div data-v-d74dc31b="" data-v-0df18d8c="" class="account-menu-group"><!---->
            <div data-v-d74dc31b="" class="account-menu-group-items">
              <div data-v-fe161ed5="" data-v-d74dc31b="" class="account-menu-item-wrapper"><a data-v-fe161ed5=""
                  id="541085" data-test-id="account-menu-item-a-button" href="/logout" target="_self"
                  class="account-menu-item">
                  <div data-v-fe161ed5=""><!----> <span data-v-fe161ed5="" style="color: rgb(204, 55, 27);">Log
                      Out</span> <!----></div>
                  <div data-v-fe161ed5="" class="icon-wrapper hidden"><svg data-v-02f45589="" data-v-fe161ed5=""
                      class="svg-icon icon-size-medium icon-arrow-right" style="vertical-align: middle;"><!---->
                      <use data-v-02f45589="" xlink:href="#arrow_right"></use>
                    </svg></div>
                </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9999;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  opacity: 0;
}

.sidebar-backdrop.visible {
  background-color: rgba(0, 0, 0, 0.1); 
  pointer-events: all;
  opacity: 1;
}

/* Sidebar Content - kama betpawa */
.sidebar-content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  box-shadow: -2px 0 12px rgba(0, 0, 0, 0.1); /* Betpawa shadow ni subtle */
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Smooth animation */
  display: flex;
  flex-direction: column;
  z-index: 10000;
  overflow: hidden;
  width: 320px; /* Default width kama betpawa */
}

.sidebar-content.visible {
  transform: translateX(0);
}

.my-account-container[data-v-0df18d8c] {
    background: #f4f5f0;
    min-height: 100%;
    padding: 12px;
}
.my-account-container .account-menu-header[data-v-0df18d8c] {
    padding-bottom: 8px;
    display: flex;
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
}
.my-account-container .account-menu-cta-box[data-v-0df18d8c] .user-phone {
    padding: 0;
}
.my-account-container .user-phone[data-v-0df18d8c] {
    background: #fff;
    margin: 0;
}
.user-phone[data-v-d7674060] {
    background: #f4f5f0;
    margin: 10px 0;
    padding: 8px;
}
.table {
    width: 100%;
    display: table;
}
.table .row-cell.align-middle {
    vertical-align: middle;
}
.table .row-cell {
    display: table-cell;
}
.user-phone-icon[data-v-3e7e08c6] {
    width: 32px;
    height: 32px;
    padding-right: 8px;
}
.user-phone-icon img[data-v-3e7e08c6] {
    vertical-align: middle;
    width: 32px;
    height: 32px;
}
img.icon-size-very-large[data-v-1f7f90db] {
    width: 24px;
    height: 24px;
}
.my-account-container .account-menu-cta-box[data-v-0df18d8c] .user-phone-number {
    line-height: 14px;
}
.table .row-cell.align-middle {
    vertical-align: middle;
}
.table .row-cell {
    display: table-cell;
}
.user-phone-number[data-v-3e7e08c6] {
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    color: #252a2d;
}
.user-phone-info-wrapper[data-v-3e7e08c6] {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    display: flex;
}
.my-account-container .account-menu-cta-box[data-v-0df18d8c] .user-phone-info {
    flex-direction: column;
    display: flex;
}
.my-account-container .account-menu-cta-box[data-v-0df18d8c] .user-phone .account-menu-actions {
    padding-top: 12px;
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
}
.account-menu-group[data-v-d74dc31b] {
    margin-top: 12px;
}
.account-menu-group-name[data-v-d74dc31b] {
    color: #8e9499;
    margin-bottom: 4px;
}
.account-menu-group-name[data-v-d74dc31b] {
  font-size: 14px;
  line-height: 18px;
    font-weight: 500;
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
    font-size: 14px;
    line-height: 18px;

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
  font-size: 14px;
  line-height: 18px;
}
svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
    width: 16px;
    height: 16px;
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
/* Mobile responsive - kama betpawa */
@media (max-width: 768px) {
  .sidebar-content {
    width: 100% !important;
    max-width: 100%;
  }
  
  .sidebar-header {
    padding: 14px 16px;
    min-height: 52px;
  }
  
  .sidebar-body {
    padding: 0;
  }
  
  .sidebar-footer {
    padding: 14px 16px;
  }
  
  .sidebar-item {
    padding: 14px 16px;
  }
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 769px) {
  .sidebar-content {
    width: 320px !important;
  }
}

/* Animation fix for mobile */
@media (max-width: 768px) {
  .sidebar-content {
    transform: translateX(100%);
  }
  
  .sidebar-content.visible {
    transform: translateX(0);
  }
}
</style>

