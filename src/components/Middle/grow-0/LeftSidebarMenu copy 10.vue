<!-- LeftSidebarMenu - Dynamic Data Version -->

<template>
    <div data-v-c057a854="" class="side-bar content leftMenu open overlap transition full-screen" style="width: 360px;">
      <div data-v-c42aca5e="" class="lmenu-main">
        <!-- Header -->
        <div data-v-a02f1bb9="" data-v-c42aca5e="" class="left-menu-header">
          <a data-v-a02f1bb9="" href="/" class="router-link-active router-link-exact-active logo-link" 
             data-test-id="left-menu-logo" aria-current="page">
            <svg data-v-02f45589="" data-v-a02f1bb9="" class="svg-icon logo" icon-fallback="logo" style="vertical-align: top;">
              <use data-v-02f45589="" xlink:href="#logo"></use>
            </svg>
          </a> 
          <span @click="handleClose" data-v-a02f1bb9="" class="close" data-test-id="left-menu-close">
            <svg data-v-02f45589="" data-v-a02f1bb9="" class="svg-icon" style="vertical-align: middle;">
              <use data-v-02f45589="" xlink:href="#icon-cross-squared"></use>
            </svg>
          </span>
        </div>
  
        <div data-v-cafe7da3="" data-v-c42aca5e="" class="menu-tiles">
            <a data-v-0822ca80="" data-v-cafe7da3=""
            class="router-link-active router-link-exact-active selected menu-tile" rel="noopener"
            data-test-id="leftMenu-menu-tile-Homepage-0" aria-current="page">
            <div data-v-0822ca80="" class="tile"><!----> <svg data-v-02f45589="" data-v-0822ca80=""
                class="svg-icon icon-size-huge icon" style="vertical-align: middle;"><!---->
                <use data-v-02f45589="" xlink:href="#icon-home"></use>
              </svg> <!----></div>
            <div data-v-0822ca80="" class="label">Home</div>
          </a>
          <a data-v-0822ca80="" data-v-cafe7da3="" class="menu-tile" rel="noopener"
            data-test-id="leftMenu-menu-tile-Upcoming-1">
            <div data-v-0822ca80="" class="tile"><!----> <svg data-v-02f45589="" data-v-0822ca80=""
                class="svg-icon icon-size-very-small icon" style="vertical-align: middle;"><!---->
                <use data-v-02f45589="" xlink:href="#icon-clock"></use>
              </svg>
              <div data-v-0822ca80="" class="count">1115</div>
            </div>
            <div data-v-0822ca80="" class="label">Sports</div>
          </a><a data-v-0822ca80="" data-v-cafe7da3="" class="menu-tile" rel="noopener"
            data-test-id="leftMenu-menu-tile-Live-2">
            <div data-v-0822ca80="" class="tile"><!----> <svg data-v-02f45589="" data-v-0822ca80=""
                class="svg-icon icon-size-very-small icon" style="vertical-align: middle;"><!---->
                <use data-v-02f45589="" xlink:href="#icon-live"></use>
              </svg>
              <div data-v-0822ca80="" class="count">8</div>
            </div>
            <div data-v-0822ca80="" class="label">Live</div>
          </a><a data-v-0822ca80="" data-v-cafe7da3="" class="menu-tile" rel="noopener"
            data-test-id="leftMenu-menu-tile-Casino-3">
            <div data-v-0822ca80="" class="tile"><!----> <svg data-v-02f45589="" data-v-0822ca80=""
                class="svg-icon icon-size-huge icon" style="vertical-align: middle;"><!---->
                <use data-v-02f45589="" xlink:href="#icon-casino"></use>
              </svg> <!----></div>
            <div data-v-0822ca80="" class="label">Casino</div>
          </a><a data-v-0822ca80="" data-v-cafe7da3="" class="menu-tile" rel="noopener"
            data-test-id="leftMenu-menu-tile-Virtual Sports-4">
            <div data-v-0822ca80="" class="tile"><!----> <svg data-v-02f45589="" data-v-0822ca80=""
                class="svg-icon icon-size-huge icon" style="vertical-align: middle;"><!---->
                <use data-v-02f45589="" xlink:href="#icon-virtual-sport"></use>
              </svg> <!----></div>
            <div data-v-0822ca80="" class="label">Virtuals</div>
          </a><a data-v-0822ca80="" data-v-cafe7da3="" class="menu-tile" rel="noopener"
            data-test-id="leftMenu-menu-tile-Casino-5">
            <div data-v-0822ca80="" class="tile"><!----> <svg data-v-02f45589="" data-v-0822ca80=""
                class="svg-icon icon-size-huge icon" style="vertical-align: middle;"><!---->
                <use data-v-02f45589="" xlink:href="#icon-airplane"></use>
              </svg> <!----></div>
            <div data-v-0822ca80="" class="label">Aviator</div>
          </a><a data-v-0822ca80="" data-v-cafe7da3="" class="menu-tile" rel="noopener"
            data-test-id="leftMenu-menu-tile-pawa6-6">
            <div data-v-0822ca80="" class="tile">
              <div data-v-0822ca80="" class="tile-badge" style="background-color: rgb(156, 232, 0);">FREE</div> <svg
                data-v-02f45589="" data-v-0822ca80="" class="svg-icon icon-size-huge icon"
                style="vertical-align: middle;"><!---->
                <use data-v-02f45589="" xlink:href="#icon-pawa6"></use>
              </svg> <!---->
            </div>
            <div data-v-0822ca80="" class="label">Pawa6</div>
          </a><a data-v-0822ca80="" data-v-cafe7da3="" class="menu-tile" rel="noopener"
            data-test-id="leftMenu-menu-tile-Popular-7">
            <div data-v-0822ca80="" class="tile"><!----> <svg data-v-02f45589="" data-v-0822ca80=""
                class="svg-icon icon-size-very-small icon" style="vertical-align: middle;"><!---->
                <use data-v-02f45589="" xlink:href="#icon-popular"></use>
              </svg>
              <div data-v-0822ca80="" class="count">44</div>
            </div>
            <div data-v-0822ca80="" class="label">Popular</div>
          </a>
        </div>
        <div data-v-7dd7ea89="" data-v-c42aca5e="" class="sticky-scroll-element categories-sticky-wrapper">
          <div data-v-1b8694e9="" data-v-c42aca5e="" class="menu-categories">
            <div data-v-d3915418="" data-v-1b8694e9="" class="tabs round scrollable dark have-scroll category-tabs">
              <ul data-v-d3915418="" class="tabs-menu align-center">
                <li data-v-d3915418="" class="active first tabs-selector" data-test-id="tabs-2">
                  <div data-v-d3915418="" class="tab-item">
                    <div data-v-d3915418="" class="tab-item-border">
                      <div data-v-d3915418="" class="tab-icon"><svg data-v-02f45589="" data-v-d3915418=""
                          class="svg-icon icon icon-size-medium" style="vertical-align: middle;"><!---->
                          <use data-v-02f45589="" xlink:href="#icon-football"></use>
                        </svg></div> <span data-v-d3915418="" class="tab-text">Football</span> <!---->
                    </div>
                  </div>
                </li>
                <li data-v-d3915418="" class="tabs-selector" data-test-id="tabs-3">
                  <div data-v-d3915418="" class="tab-item">
                    <div data-v-d3915418="" class="tab-item-border">
                      <div data-v-d3915418="" class="tab-icon"><svg data-v-02f45589="" data-v-d3915418=""
                          class="svg-icon icon icon-size-medium" style="vertical-align: middle;"><!---->
                          <use data-v-02f45589="" xlink:href="#icon-basketball"></use>
                        </svg></div> <span data-v-d3915418="" class="tab-text">Basketball</span> <!---->
                    </div>
                  </div>
                </li>
                <li data-v-d3915418="" class="tabs-selector" data-test-id="tabs-101">
                  <div data-v-d3915418="" class="tab-item">
                    <div data-v-d3915418="" class="tab-item-border">
                      <div data-v-d3915418="" class="tab-icon"><svg data-v-02f45589="" data-v-d3915418=""
                          class="svg-icon icon icon-size-medium" style="vertical-align: middle;"><!---->
                          <use data-v-02f45589="" xlink:href="#icon-eFootball"></use>
                        </svg></div> <span data-v-d3915418="" class="tab-text">eFootball</span> <!---->
                    </div>
                  </div>
                </li>
                <li data-v-d3915418="" class="last tabs-selector" data-test-id="tabs-452">
                  <div data-v-d3915418="" class="tab-item">
                    <div data-v-d3915418="" class="tab-item-border">
                      <div data-v-d3915418="" class="tab-icon"><svg data-v-02f45589="" data-v-d3915418=""
                          class="svg-icon icon icon-size-medium" style="vertical-align: middle;"><!---->
                          <use data-v-02f45589="" xlink:href="#icon-tennis"></use>
                        </svg></div> <span data-v-d3915418="" class="tab-text">Tennis</span> <!---->
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
    </div>
  
        <!-- Categories (Static) -->
        <div data-v-7dd7ea89="" data-v-c42aca5e="" class="sticky-scroll-element categories-sticky-wrapper">
          <!-- ... categories (unchanged) ... -->
        </div>
  
        <!-- LEAGUES SECTION - DYNAMIC DATA -->
        <div data-v-aabe1219="" data-v-c42aca5e="" class="expansion-panel dark is-open" data-test-id="menu-tournaments">
          <div data-v-aabe1219="" data-test-id="toggle-open-button" class="title table pointer">
            <div data-v-aabe1219="" class="row-cell align-middle title-text">
              <h3 data-v-aabe1219="">Leagues</h3>
            </div>
            <div data-v-aabe1219="" class="row-cell align-middle expand-icon">
              <svg data-v-02f45589="" data-v-aabe1219="" class="svg-icon icon-size-medium">
                <use data-v-02f45589="" xlink:href="#icon-arrow-up"></use>
              </svg>
            </div>
          </div>
          <div data-v-aabe1219="" class="expansion-panel-content">
            <!-- Loading State -->
            <div v-if="leaguesLoading" class="loading-state">Loading leagues...</div>
            
            <!-- Error State -->
            <div v-else-if="leaguesError" class="error-state">{{ leaguesError }}</div>
            
            <!-- Dynamic Data -->
            <div v-else v-for="league in leagues" :key="league.id" 
                 data-v-7a6cc4a0="" class="menu-item dark sub-menu" 
                 :data-test-id="'tournament-' + league.id">
              <a data-v-7a6cc4a0="" :data-test-id="'nav-Group-link'" class="link" :href="'/events/group/' + league.id">
                <div data-v-7a6cc4a0="" class="table">
                  <div data-v-7a6cc4a0="" class="row-cell align-middle details">
                    <!-- Dynamic Flag -->
                    <img v-if="league.flagImg" 
                         :src="league.flagImg" 
                         :alt="league.name" 
                         class="rounded-flag icon-size-large icon-flag" 
                         style="width: 18px; height: 18px; border-radius: 50%; margin-right: 8px;" />
                    <span v-else data-v-81261974="" 
                          :class="'fi fi-' + league.flagCode + ' fis rounded-flag icon-size-large icon-flag'" 
                          :title="league.flagCode?.toUpperCase()"></span>
                    <span data-v-7a6cc4a0="" class="menu-text name">{{ league.name }}</span>
                  </div>
                  <div data-v-7a6cc4a0="" class="row-cell align-middle control">
                    <span data-v-7a6cc4a0="" class="menu-text">{{ league.count }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
  
        <!-- POPULAR COUNTRIES SECTION - DYNAMIC DATA -->
        <div data-v-c42aca5e="">
          <div data-v-aabe1219="" class="expansion-panel dark is-open" data-test-id="menu-popularCountries">
            <div data-v-aabe1219="" data-test-id="toggle-open-button" class="title table pointer">
              <div data-v-aabe1219="" class="row-cell align-middle title-text">
                <h3 data-v-aabe1219="">Popular Countries</h3>
              </div>
              <div data-v-aabe1219="" class="row-cell align-middle expand-icon">
                <svg data-v-02f45589="" data-v-aabe1219="" class="svg-icon icon-size-medium">
                  <use data-v-02f45589="" xlink:href="#icon-arrow-up"></use>
                </svg>
              </div>
            </div>
            <div data-v-aabe1219="" class="expansion-panel-content">
              <!-- Loading State -->
              <div v-if="popularCountriesLoading" class="loading-state">Loading countries...</div>
              
              <!-- Error State -->
              <div v-else-if="popularCountriesError" class="error-state">{{ popularCountriesError }}</div>
              
              <!-- Dynamic Data -->
              <div v-else v-for="country in popularCountries" :key="country.id" 
                   data-v-7a6cc4a0="" class="menu-item dark sub-menu" 
                   :data-test-id="'country-menu-' + country.id">
                <div data-v-7a6cc4a0="" data-test-id="nav-unknown-link" class="link">
                  <div data-v-7a6cc4a0="" class="table">
                    <div data-v-7a6cc4a0="" class="row-cell align-middle details">
                      <!-- Dynamic Flag -->
                      <img v-if="country.flagImg" 
                           :src="country.flagImg" 
                           :alt="country.name" 
                           class="rounded-flag icon-size-large icon-flag" 
                           style="width: 18px; height: 18px; border-radius: 50%; margin-right: 8px;" />
                      <span v-else data-v-81261974="" 
                            :class="'fi fi-' + country.flagCode + ' fis rounded-flag icon-size-large icon-flag'" 
                            :title="country.flagCode?.toUpperCase()"></span>
                      <span data-v-7a6cc4a0="" class="menu-text name">{{ country.name }}</span>
                    </div>
                    <div data-v-7a6cc4a0="" class="row-cell align-middle control">
                      <span data-v-7a6cc4a0="" class="menu-text">{{ country.count }}</span>
                      <svg data-v-02f45589="" data-v-7a6cc4a0="" class="svg-icon icon-size-very-small">
                        <use data-v-02f45589="" xlink:href="#arrow_down"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- OTHER COUNTRIES SECTION - DYNAMIC DATA -->
          <div data-v-aabe1219="" class="expansion-panel dark is-open" data-test-id="menu-otherCountries">
            <div data-v-aabe1219="" data-test-id="toggle-open-button" class="title table pointer">
              <div data-v-aabe1219="" class="row-cell align-middle title-text">
                <h3 data-v-aabe1219="">Other Countries</h3>
              </div>
              <div data-v-aabe1219="" class="row-cell align-middle expand-icon">
                <svg data-v-02f45589="" data-v-aabe1219="" class="svg-icon icon-size-medium">
                  <use data-v-02f45589="" xlink:href="#icon-arrow-up"></use>
                </svg>
              </div>
            </div>
  
            <div data-v-aabe1219="" class="expansion-panel-content">
              Loading State
              <div v-if="otherCountriesLoading" class="loading-state">Loading countries...</div>
              
              <!-- Error State -->
              <div v-else-if="otherCountriesError" class="error-state">{{ otherCountriesError }}</div>
              
              <!-- Dynamic Data -->
              <div v-else v-for="country in otherCountries" :key="country.id" 
                   data-v-7a6cc4a0="" class="menu-item dark sub-menu" 
                   :data-test-id="'country-menu-' + country.id">
                <div data-v-7a6cc4a0="" data-test-id="nav-unknown-link" class="link">
                  <div data-v-7a6cc4a0="" class="table">
                    <div data-v-7a6cc4a0="" class="row-cell align-middle details">
                      <!-- Dynamic Flag -->
                      <img v-if="country.flagImg" 
                           :src="country.flagImg" 
                           :alt="country.name" 
                           class="rounded-flag icon-size-large icon-flag" 
                           style="width: 18px; height: 18px; border-radius: 50%; margin-right: 8px;" />
                      <span v-else data-v-81261974="" 
                            :class="'fi fi-' + country.flagCode + ' fis rounded-flag icon-size-large icon-flag'" 
                            :title="country.flagCode?.toUpperCase()"></span>
                      <span data-v-7a6cc4a0="" class="menu-text name">{{ country.name }}</span>
                    </div>
                    <div data-v-7a6cc4a0="" class="row-cell align-middle control">
                      <span data-v-7a6cc4a0="" class="menu-text">{{ country.count }}</span>
                      <svg data-v-02f45589="" data-v-7a6cc4a0="" class="svg-icon icon-size-very-small">
                        <use data-v-02f45589="" xlink:href="#arrow_down"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../../../stores/authStore'
  import EuropeFlag from '../../../assets/media/Europe_43bd11c816.svg'
  import International from '../../../assets/img/flags/international.png';
  
  const authStore = useAuthStore()
  const router = useRouter()
  const emit = defineEmits(['close'])
  
  // ========== DUMMY DATA - BADILISHA HII KUPOKEA DATA KWA API ==========
  const fetchMenuData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          leagues: [
            { id: 11965, name: 'Premier League', count: 21, flagCode: 'gb-eng', flagImg: null },
            { id: 12145, name: 'FA Cup', count: 6, flagCode: 'gb-eng', flagImg: null },
            { id: 12097, name: 'Serie A', count: 17, flagCode: 'it', flagImg: null },
            { id: 12110, name: 'Bundesliga', count: 11, flagCode: 'de', flagImg: null },
            { id: 12039, name: 'LaLiga', count: 16, flagCode: 'es', flagImg: null },
            { id: 12127, name: 'Ligue 1', count: 13, flagCode: 'fr', flagImg: null },
            { id: 12541, name: 'UEFA Champions League', count: 8, flagCode: null, flagImg: EuropeFlag },
            { id: 12546, name: 'UEFA Europa League', count: 8, flagCode: null, flagImg: EuropeFlag },
            { id: 12545, name: 'UEFA Conference League', count: 8, flagCode: null, flagImg: EuropeFlag }
          ],
          popularCountries: [
            { id: 288, name: 'England', count: 128, flagCode: 'gb-eng', flagImg: null },
            { id: 241, name: 'France', count: 34, flagCode: 'fr', flagImg: null },
            { id: 242, name: 'Germany', count: 29, flagCode: 'de', flagImg: null },
            { id: 1, name: 'International', count: 94, flagCode: null, flagImg: International },
            { id: 230, name: 'Italy', count: 59, flagCode: 'it', flagImg: null },
            { id: 237, name: 'Spain', count: 48, flagCode: 'es', flagImg: null }
          ],
          otherCountries: [
            { id: 61, name: 'Algeria', count: 5, flagCode: 'dz', flagImg: new URL('../../../assets/sidebarFlags/dz-EwXBYPv9.svg', import.meta.url).href },
            { id: 126, name: 'Argentina', count: 50, flagCode: 'ar', flagImg: new URL('../../../assets/sidebarFlags/ar-apVegy4c.svg', import.meta.url).href },
            { id: 248, name: 'Australia', count: 11, flagCode: 'au', flagImg: new URL('../../../assets/sidebarFlags/au-kL8f0uMB.svg', import.meta.url).href },
            { id: 239, name: 'Austria', count: 20, flagCode: 'at', flagImg: new URL('../../../assets/sidebarFlags/at-D-LsLSdx.svg', import.meta.url).href },
            { id: 178, name: 'Azerbaijan', count: 5, flagCode: 'az', flagImg: new URL('../../../assets/sidebarFlags/az-z2IthT8Q.svg', import.meta.url).href },
            { id: 240, name: 'Belgium', count: 16, flagCode: 'be', flagImg: new URL('../../../assets/sidebarFlags/be-Dtq4MkQz.svg', import.meta.url).href },
            { id: 225, name: 'Bosnia and Herzegovina', count: 3, flagCode: 'ba', flagImg: new URL('../../../assets/sidebarFlags/ba-CiiOt6u0.svg', import.meta.url).href },
            { id: 128, name: 'Brazil', count: 53, flagCode: 'br', flagImg: new URL('../../../assets/sidebarFlags/br-Yf30zEjB.svg', import.meta.url).href },
            { id: 196, name: 'Bulgaria', count: 16, flagCode: 'bg', flagImg: new URL('../../../assets/sidebarFlags/bg-cWragUdK.svg', import.meta.url).href },
            { id: 129, name: 'Chile', count: 10, flagCode: 'cl', flagImg: new URL('../../../assets/sidebarFlags/cl-B2rf9gTF.svg', import.meta.url).href }
            // ... rest of countries
          ]
        })
      }, 500) 
    })
  }
  // =====================================================================
  
  // Reactive state
  const leagues = ref([])
  const popularCountries = ref([])
  const otherCountries = ref([])
  const leaguesLoading = ref(true)
  const popularCountriesLoading = ref(true)
  const otherCountriesLoading = ref(true)
  const leaguesError = ref(null)
  const popularCountriesError = ref(null)
  const otherCountriesError = ref(null)
  
  // Fetch data on mount
  onMounted(async () => {
    try {
      const data = await fetchMenuData()
      
      leagues.value = data.leagues
      popularCountries.value = data.popularCountries
      otherCountries.value = data.otherCountries
      
      leaguesLoading.value = false
      popularCountriesLoading.value = false
      otherCountriesLoading.value = false
      
    } catch (error) {
      leaguesError.value = 'Failed to load leagues'
      popularCountriesError.value = 'Failed to load countries'
      otherCountriesError.value = 'Failed to load countries'
      leaguesLoading.value = false
      popularCountriesLoading.value = false
      otherCountriesLoading.value = false
      console.error('Error fetching menu data:', error)
    }
  })
  
  // Auth state
  const isLoggedIn = computed(() => authStore.isLoggedIn)
  const userName = computed(() => authStore.userName)
  
  const handleLogout = () => {
    authStore.logout()
    router.push('/login')
  }
  
  const handleClose = () => {
    emit('close')
  }
  </script>
  
  <style lang="scss" scoped>
   .side-bar.transition.overlap[data-v-c057a854] {
      transition: transform .35s ease-in;
  }
  .side-bar.overlap.full-screen[data-v-c057a854] {
      height: 100%;
      top: 0;
  }
  @media (min-width: 768px) {
      .side-bar.overlap.open[data-v-c057a854] {
          box-shadow: 5px 0 8px rgba(0, 0, 0, .33);
      }
  }
  .side-bar.overlap[data-v-c057a854] {
      z-index: 10000;
      height: 100%;
      position: fixed;
  }
  
  .side-bar.leftMenu {
      background-color: #252a2d;
      flex: 1 0 17%;
  }
  
  .content[data-v-c057a854] {
      background-color: #252a2d;
      height: 100%;
      overflow-x: hidden;
  }
  .side-bar[data-v-c057a854] {
      -ms-overflow-style: none;
      scrollbar-width: none;
      background: #252a2d;
      width: 100%;
      transition-property: transform, width;
      position: relative;
      overflow: auto;
      transform: translate(0);
  }
  .lmenu-main[data-v-c42aca5e] {
      background-color: #252a2d;
      padding: 0 8px 32px;
      position: relative;
  }
  .left-menu-header[data-v-a02f1bb9] {
      z-index: 2;
      background: #252a2d;
      justify-content: space-between;
      align-items: center;
      height: 48px;
      padding: 8px 4px;
      display: flex;
      position: sticky;
      top: 0;
  }
  .left-menu-header .logo-link[data-v-a02f1bb9] {
      display: flex;
  }
  a {
      cursor: pointer;
      user-select: none;
      color: inherit;
      text-decoration: none;
  }
  .left-menu-header .logo-link .logo[data-v-a02f1bb9] {
      width: 92px;
      height: 16px;
  }
  .left-menu-header .close[data-v-a02f1bb9] {
      cursor: pointer;
  }
  .left-menu-header .close svg[data-v-a02f1bb9] {
      fill: #fff;
      width: 18px;
      height: 18px;
  }
  @media (min-width: 376px) {
      .menu-tiles[data-v-cafe7da3] {
          grid-template-columns: repeat(auto-fill, minmax(66px, 1fr));
      }
  }
  .menu-tiles[data-v-cafe7da3] {
      scrollbar-width: none;
      background-color: #0d89db;
      border-radius: 4px;
      flex-wrap: wrap;
      // grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
      gap: 12px 16px;
      padding: 16px;
      display: grid;
  }
  .menu-tile[data-v-0822ca80] {
      cursor: pointer;
      color: #aaaeb0;
      flex-direction: column;
      gap: 4px;
      display: flex;
  }
  .menu-tile.selected .tile[data-v-0822ca80] {
      background-color: #3b4432;
      border-color: #435632;
  }
  .menu-tile .tile[data-v-0822ca80] {
      background-color: #252a2d;
      border: 1px solid #444;
      border-radius: 4px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2px;
      width: 100%;
      height: 44px;
      padding: 8px 10px;
      display: flex;
      position: relative;
  }
  .menu-tile.selected .tile .icon[data-v-0822ca80] {
      fill: #9ce800;
  }
  .menu-tile .tile .icon.icon-size-huge[data-v-0822ca80] {
      width: 20px;
      max-width: 20px;
      height: 20px;
      min-height: 20px;
  }
  .menu-tile.selected .label[data-v-0822ca80] {
      color: #9ce800;
      font-weight: 500;
  }
  .menu-tile .label[data-v-0822ca80] {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      align-self: center;
      width: 100%;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      overflow-x: hidden;
  }
  .menu-tile[data-v-0822ca80] {
      cursor: pointer;
      color: #aaaeb0;
      flex-direction: column;
      gap: 4px;
      display: flex;
  }
  .menu-tile .tile[data-v-0822ca80] {
      background-color: #252a2d;
      border: 1px solid #444;
      border-radius: 4px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2px;
      width: 100%;
      height: 44px;
      padding: 8px 10px;
      display: flex;
      position: relative;
  }
  .menu-tile .tile .icon.icon-size-very-small[data-v-0822ca80] {
      width: 10px;
      max-width: 10px;
      height: 10px;
      min-height: 10px;
  }
  .menu-tile .tile .icon[data-v-0822ca80] {
      fill: #aaaeb0;
  }
  .menu-tile .tile .count[data-v-0822ca80] {
      font-size: 12px;
  }
  .menu-tile .label[data-v-0822ca80] {
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      align-self: center;
      width: 100%;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      overflow-x: hidden;
  }
  
  .lmenu-main .categories-sticky-wrapper[data-v-c42aca5e] {
      top: 48px;
  }
  .sticky-scroll-element[data-v-7dd7ea89] {
      z-index: 2;
      position: sticky;
      top: 0;
  }
  .menu-categories[data-v-1b8694e9] {
      scrollbar-width: none;
      background-color: #2d3337;
      gap: 8px;
      margin-top: 8px;
      padding: 8px;
      display: flex;
      overflow-x: scroll;
  }
  .tabs.dark.round[data-v-d3915418] {
      background: #2d3337;
  }
  .tabs.dark[data-v-d3915418] {
      background: #353b40;
      overflow: hidden;
  }
  .tabs[data-v-d3915418] {
      position: relative;
  }
  .tabs.scrollable.have-scroll .tabs-menu[data-v-d3915418] {
      justify-content: unset;
  }
  .tabs.dark .tabs-menu[data-v-d3915418] {
      background: 0 0;
      border: 0;
      padding: 0;
      display: flex;
  }
  .tabs.scrollable .tabs-menu[data-v-d3915418] {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: scroll;
  }
  .tabs .tabs-menu[data-v-d3915418] {
      user-select: none;
      list-style: none;
      display: flex;
  }
  
  .tabs.dark.round .tabs-menu .tabs-selector.active[data-v-d3915418] {
      color: #9ce800;
      border-bottom: none;
  }
  
  .tabs.dark .tabs-menu .tabs-selector.active[data-v-d3915418] {
      color: #9ce800;
      background: 0 0;
      border-bottom: 2px solid #9ce800;
  }
  .tabs.dark .tabs-menu .tabs-selector[data-v-d3915418] {
      color: #aaaeb0;
      background: 0 0;
      border: none;
      border-bottom: 2px solid transparent;
      flex-grow: 1;
  }
  .tabs.scrollable .tabs-selector[data-v-d3915418] {
      white-space: nowrap;
  }
  .tabs.round .tabs-selector[data-v-d3915418] {
      flex: 0;
      margin-right: 8px;
  }
  .tabs .tabs-selector[data-v-d3915418] {
      cursor: pointer;
      width: 100%;
  }
  .tabs.dark.round .tabs-menu .tabs-selector.active .tab-item[data-v-d3915418] {
      background-color: #3b4432;
  }
  
  .tabs.dark.round .tabs-menu .tabs-selector .tab-item[data-v-d3915418] {
      height: inherit;
      background-color: #252a2d;
      border: 1px solid #444;
      padding: 15px;
  }
  .menu-categories .category-tabs[data-v-1b8694e9] .tabs-menu .tabs-selector .tab-item {
      min-width: 128px;
  }
  .tabs.round .tabs-selector.active .tab-item[data-v-d3915418], .tabs.round .tabs-selector.active .tab-item-border[data-v-d3915418] {
      background-color: #ddfaa5;
      border-width: 1px;
      border-color: #9ce800;
  }
  .tabs.round .tabs-selector .tab-item[data-v-d3915418] {
      color: #252a2d;
      background: #fff;
      border: 1px solid #e6e7e2;
      border-radius: 200px;
      height: 34px;
  }
  .tabs.dark.round .tabs-menu .tabs-selector.active .tab-item .tab-item-border[data-v-d3915418] {
      color: #9ce800;
  }
  
  .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-item-border[data-v-d3915418] {
      color: #aaaeb0;
      background: inherit;
      border: none;
      padding: 0;
  }
  .tabs.round .tabs-selector.active .tab-item[data-v-d3915418], .tabs.round .tabs-selector.active .tab-item-border[data-v-d3915418] {
      background-color: #ddfaa5;
      border-width: 1px;
      border-color: #9ce800;
  }
  .tabs.round .tabs-selector .tab-item-border[data-v-d3915418] {
      background: #fff;
      border: 1px solid transparent;
      border-radius: 200px;
      width: 100%;
      height: 100%;
      padding: 6px 16px;
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
  .tabs.dark .tabs-menu .tabs-selector.active .tab-item .tab-icon .svg-icon[data-v-d3915418] {
      fill: #9ce800;
  }
  
  .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-icon .svg-icon[data-v-d3915418] {
      fill: #aaaeb0;
  }
  svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
      width: 16px;
      height: 16px;
  }
  .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
      text-transform: inherit;
  }
  
  .tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
      font-weight: 400;
  }
  .tabs.square .tabs-selector.active .tab-text[data-v-d3915418], .tabs.text .tabs-selector .tab-text[data-v-d3915418], .tabs.text .tabs-selector.active .tab-text[data-v-d3915418], .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418], .tabs.square .tabs-selector[data-v-d3915418], .tabs.dark.round .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
      font-size: 14px;
      line-height: 18px;
  }
  .tabs.dark .tabs-menu .tabs-selector .tab-item .tab-text[data-v-d3915418] {
      text-transform: uppercase;
  }
  .tabs.round .tabs-selector .tab-item-border .tab-icon+.tab-text[data-v-d3915418] {
      margin-left: 4px;
  }
  
  
  .expansion-panel.dark[data-v-aabe1219] {
      background-color: #2d3337;
  }
  .expansion-panel.dark .title[data-v-aabe1219] {
      color: #f4f5f0;
      opacity: .8;
      background-color: #2d3337;
      border: none;
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
  .expansion-panel .title .title-text[data-v-aabe1219] {
      margin-right: auto;
  }
  
  .table .row-cell.align-middle {
      vertical-align: middle;
  }
  .table .row-cell {
      display: table-cell;
  }
  .expansion-panel .title h3[data-v-aabe1219], .expansion-panel.dark .title h3[data-v-aabe1219] {
      font-weight: 700;
  }
  
  .expansion-panel.dark .title h3[data-v-aabe1219] {
      font-size: 16px;
      line-height: 22px;
  }
  .expansion-panel .title h3[data-v-aabe1219] {
      text-transform: uppercase;
      margin: 0;
  }
  .table .row-cell.align-middle {
      vertical-align: middle;
  }
  
  .expansion-panel .expand-icon[data-v-aabe1219] {
      display: flex;
  }
  .expansion-panel.dark .title svg[data-v-aabe1219] {
      fill: #aaaeb0;
  }
  
  svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
      width: 16px;
      height: 16px;
  }
  @media (min-width: 376px) {
      .menu-tiles[data-v-cafe7da3] {
          grid-template-columns: repeat(auto-fill, minmax(66px, 1fr));
      }
  }
  
  .menu-tile[data-v-0822ca80] {
      cursor: pointer;
      color: #aaaeb0;
      flex-direction: column;
      gap: 4px;
      margin-left: 8px;
      margin-right: 8px;
      display: flex;
  }
  .menu-tile .tile .tile-badge[data-v-0822ca80] {
      color: #252a2d;
      background-color: #9ce800;
      border-radius: 0 4px;
      padding: 2px 3px;
      font-size: 10px;
      line-height: 10px;
      position: absolute;
      top: -1px;
      right: -1px;
  }
  .table .row-cell.align-middle {
      vertical-align: middle;
  }
  
  .expansion-panel .expand-icon[data-v-aabe1219] {
      display: flex;
  }
  .expansion-panel.dark .title svg[data-v-aabe1219] {
      fill: #aaaeb0;
  }
  
  svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
      width: 16px;
      height: 16px;
  }
  .expansion-panel.dark .title[data-v-aabe1219] {
      color: #f4f5f0;
      opacity: .8;
      background-color: #2d3337;
      border: none;
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
  .menu-tiles[data-v-cafe7da3] {
      scrollbar-width: none;
      background-color: #2d3337;
      border-radius: 4px;
      flex-wrap: wrap;
      // grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
      gap: 12px 16px;
      padding: 16px;
      display: grid;
  }
  .menu-tile .tile[data-v-0822ca80] {
      background-color: #252a2d;
      border: 1px solid #444;
      border-radius: 4px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2px;
      width: 100%;
      height: 44px;
      padding: 8px 10px;
      display: flex;
      position: relative;
  }
  
  
  .expansion-panel.dark .title[data-v-aabe1219] {
      color: #f4f5f0;
      opacity: .8;
      background-color: #2d3337;
      border: none;
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
  .expansion-panel .title .title-text[data-v-aabe1219] {
      margin-right: auto;
  }
  
  .table .row-cell.align-middle {
      vertical-align: middle;
  }
  .table .row-cell {
      display: table-cell;
  }
  .expansion-panel .title h3[data-v-aabe1219], .expansion-panel.dark .title h3[data-v-aabe1219] {
      font-weight: 700;
  }
  
  .expansion-panel.dark .title h3[data-v-aabe1219] {
      font-size: 16px;
      line-height: 22px;
  }
  .expansion-panel .title h3[data-v-aabe1219] {
      text-transform: uppercase;
      margin: 0;
  }
  .table .row-cell.align-middle {
      vertical-align: middle;
  }
  
  .expansion-panel .expand-icon[data-v-aabe1219] {
      display: flex;
  }
  .expansion-panel.dark .title svg[data-v-aabe1219] {
      fill: #aaaeb0;
  }
  
  svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
      width: 16px;
      height: 16px;
  
  }
  .menu-item[data-v-7a6cc4a0] {
      background: #fff;
      position: relative;
      border-top: 1px solid #8f8e8e;
  }
  
  .menu-item.dark>.link[data-v-7a6cc4a0] {
      text-transform: none;
      background-color: #353b40;
  }
  
  .menu-item.dark>.link[data-v-7a6cc4a0] {
      font-weight: 400;
  }
  .menu-item.dark.selected:not(.sub-menu-item)>.link[data-v-7a6cc4a0], .menu-item.dark>.link[data-v-7a6cc4a0] {
      font-size: 14px;
      line-height: 18px;
  }
  [data-v-c42aca5e] .sub-menu>.link, [data-v-c42aca5e] .sub-menu.selected>.link {
      background: #f5f5f0;
  }
  .menu-item>.link[data-v-7a6cc4a0] {
      padding: 8px 16px;
      position: relative;
  }
  .menu-item>.link[data-v-7a6cc4a0] {
      font-weight: 400;
  }
  .menu-item>.link[data-v-7a6cc4a0] {
      font-size: 12px;
      line-height: 16px;
  }
  .menu-item>.link[data-v-7a6cc4a0] {
      cursor: pointer;
      color: #252a2d;
      text-transform: uppercase;
      align-items: center;
      min-height: 40px;
      padding: 8px 16px;
      text-decoration: none;
      display: flex;
  }
  .table {
      width: 100%;
      display: table;
  }
  .table .row-cell.align-middle {
      vertical-align: middle;
  }
  
  .menu-item .details[data-v-7a6cc4a0] {
      align-items: center;
      display: flex;
  }
  .table .row-cell {
      display: table-cell;
  }
  .icon-size-large.rounded-flag.fis {
      width: 18px;
      height: 18px;
  }
  
  .icon-size-large.fi[data-v-81261974] {
      width: 18px;
      height: 18px;
  }
  .menu-item[data-v-7a6cc4a0] .icon-status, .menu-item[data-v-7a6cc4a0] .icon-flag {
      vertical-align: middle;
      margin: 3px 8px 3px 3px;
  }
  .rounded-flag.fis {
      border-radius: 50%;
      box-shadow: 0 0 0 .5px rgba(170, 174, 176, .5);
  }
  .fi-gb-eng.fis {
      background-image: url(./assets/flags/gb-eng-DTHmDHq3.svg);
  }
  .fi.fis {
      width: 1em;
  }
  .fi-gb-eng {
      background-image: url(./assets/flags/gb-eng-C8iDhGHN.svg);
  }
  .fi {
      width: 1.33333em;
      line-height: 1em;
      display: inline-block;
      position: relative;
  }
  .fib, .fi {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
  }
  .menu-item.dark>.link .menu-text.name[data-v-7a6cc4a0] {
      color: #f4f5f0;
  }
  
  .menu-item.dark>.link .menu-text[data-v-7a6cc4a0] {
      color: #8e9398;
  }
  
  
  .menu-item.dark>.link .menu-text.name[data-v-7a6cc4a0] {
      color: #f4f5f0;
  }
  
  .menu-item.dark>.link .menu-text[data-v-7a6cc4a0] {
      color: #8e9398;
  }
  *, :before, :after {
      box-sizing: inherit;
  }
  * {
      margin: 0;
      padding: 0;
  }
  .menu-item.dark>.link[data-v-7a6cc4a0] {
      text-transform: none;
      background-color: #353b40;
  }
  .menu-item.dark>.link[data-v-7a6cc4a0] {
      font-weight: 400;
  }
  .menu-item.dark.selected:not(.sub-menu-item)>.link[data-v-7a6cc4a0], .menu-item.dark>.link[data-v-7a6cc4a0] {
      font-size: 14px;
      line-height: 18px;
  }
  .table .row-cell.align-middle {
      vertical-align: middle;
  }
  
  .menu-item .control[data-v-7a6cc4a0] {
      text-align: right;
      min-width: 55px;
  }
  .table .row-cell {
      display: table-cell;
  }
  .menu-item.dark>.link .menu-text[data-v-7a6cc4a0] {
      color: #8e9398;
  }
  
  .icon-size-large.rounded-flag.fis {
      width: 18px;
      height: 18px;
  }
  
  .icon-size-large.fi[data-v-81261974] {
      width: 18px;
      height: 18px;
  }
  .menu-item[data-v-7a6cc4a0] .icon-status, .menu-item[data-v-7a6cc4a0] .icon-flag {
      vertical-align: middle;
      margin: 3px 8px 3px 3px;
  }
  .rounded-flag.fis {
      border-radius: 50%;
      box-shadow: 0 0 0 .5px rgba(170, 174, 176, .5);
  }
  .fi-it.fis {
      background-image: url(./assets/flags/it-lvp2tGC_.svg);
  }
  .fi.fis {
      width: 1em;
  }
  .fi-it {
      background-image: url(./assets/flags/it-Br7q0Zh6.svg);
  }
  
  
  
  .fi-ar.fis {
      background-image: url(./assets/flags/ar-apVegy4c.svg);
  }
  
  .fi-au.fis {
      background-image: url(./assets/flags/au-kL8f0uMB.svg);;
  }
  .fi-at.fis {
      background-image: url(./assets/flags/at-D-LsLSdx.svg);
  }
  .fi-az.fis {
      background-image: url(./assets/flags/az-z2IthT8Q.svg);
  }
  .fi-be.fis {
      background-image: url(./assets/flags/be-Dtq4MkQz.svg);
  }
  .fi-ba.fis {
      background-image: url(./assets/flags/ba-CiiOt6u0.svg);
  }
  .fi-br.fis {
      background-image: url(./assets/flags/br-Yf30zEjB.svg);
  }
  .fi-bg.fis {
      background-image: url(./assets/flags/bg-cWragUdK.svg);
  }
  .fi-cl.fis {
      background-image: url(./assets/flags/cl-B2rf9gTF.svg);
  }
  .fi {
      width: 1.33333em;
      line-height: 1em;
      display: inline-block;
      position: relative;
  }
  .fib, .fi {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
  }
  .icon-size-large.rounded-flag.fis {
      width: 18px;
      height: 18px;
  }
  
  .icon-size-large.fi[data-v-81261974] {
      width: 18px;
      height: 18px;
  }
  .menu-item[data-v-7a6cc4a0] .icon-status, .menu-item[data-v-7a6cc4a0] .icon-flag {
      vertical-align: middle;
      margin: 3px 8px 3px 3px;
  }
  .rounded-flag.fis {
      border-radius: 50%;
      box-shadow: 0 0 0 .5px rgba(170, 174, 176, .5);
  }
  .fi-de.fis {
      background-image: url(/src/assets/sidebarFlags/de-D365bacb.svg);
  }
  
  
  .icon-size-large.rounded-flag.fis {
      width: 18px;
      height: 18px;
  }
  
  .icon-size-large.fi[data-v-81261974] {
      width: 18px;
      height: 18px;
  }
  .menu-item[data-v-7a6cc4a0] .icon-status, .menu-item[data-v-7a6cc4a0] .icon-flag {
      vertical-align: middle;
      margin: 3px 8px 3px 3px;
  }
  .rounded-flag.fis {
      border-radius: 50%;
      box-shadow: 0 0 0 .5px rgba(170, 174, 176, .5);
  }
  .fi-es.fis {
      background-image: url(/src/assets/sidebarFlags/es-CR0ZfKpD.svg);
  }
  
  
  .icon-size-large.rounded-flag.fis {
      width: 18px;
      height: 18px;
  }
  
  .icon-size-large.fi[data-v-81261974] {
      width: 18px;
      height: 18px;
  }
  .menu-item[data-v-7a6cc4a0] .icon-status, .menu-item[data-v-7a6cc4a0] .icon-flag {
      vertical-align: middle;
      margin: 3px 8px 3px 3px;
  }
  .rounded-flag.fis {
      border-radius: 50%;
      box-shadow: 0 0 0 .5px rgba(170, 174, 176, .5);
  }
  .fi-fr.fis {
      background-image: url(/src/assets/sidebarFlags/fr-C1eGzDWr.svg);
  }
  
  
  .icon-size-large.rounded-flag.fis {
      width: 18px;
      height: 18px;
  }
  
  .icon-size-large.fi[data-v-81261974] {
      width: 18px;
      height: 18px;
  }
  .menu-item[data-v-7a6cc4a0] .icon-status, .menu-item[data-v-7a6cc4a0] .icon-flag {
      vertical-align: middle;
      margin: 3px 8px 3px 3px;
  }
  .rounded-flag.fis {
      border-radius: 50%;
      box-shadow: 0 0 0 .5px rgba(170, 174, 176, .5);
  }
  .fi-dz.fis {
      background-image: url(/src/assets/sidebarFlags/dz-EwXBYPv9.svg);
  }
  
  
  
  
  
  .expansion-panel.dark[data-v-aabe1219] {
      background-color: #2d3337;
  }
  .expansion-panel.dark .title[data-v-aabe1219] {
      color: #f4f5f0;
      opacity: .8;
      background-color: #2d3337;
      border: none;
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
  .pointer {
      cursor: pointer;
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
  .expansion-panel .title h3[data-v-aabe1219], .expansion-panel.dark .title h3[data-v-aabe1219] {
      font-weight: 700;
  }
  
  .expansion-panel.dark .title h3[data-v-aabe1219] {
      font-size: 16px;
      line-height: 22px;
  }
  .expansion-panel .title h3[data-v-aabe1219] {
      text-transform: uppercase;
      margin: 0;
  }
  .table .row-cell.align-middle {
      vertical-align: middle;
  }
  
  .expansion-panel .expand-icon[data-v-aabe1219] {
      display: flex;
  }
  .expansion-panel.dark .title svg[data-v-aabe1219] {
      fill: #aaaeb0;
  }
  
  svg.icon-size-medium[data-v-02f45589], img.icon-size-medium[data-v-02f45589] {
      width: 16px;
      height: 16px;
  }
  
  .menu-item.dark>.link svg.svg-icon[data-v-7a6cc4a0] {
      fill: #cccecb;
  }
  
  .menu-item[data-v-7a6cc4a0] .icon-status+svg, .menu-item[data-v-7a6cc4a0] .icon-flag+svg, .menu-item[data-v-7a6cc4a0] .menu-text+svg {
      margin-left: 12px;
  }
  svg.icon-size-very-small[data-v-02f45589], img.icon-size-very-small[data-v-02f45589] {
      width: 10px;
      height: 10px;
  }











  /* ADD THIS AT THE END OF YOUR STYLES - ONLY FIX FOR ARROWS */
.expansion-panel.dark .title.table {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    width: 100% !important;
    padding: 16px 12px 8px 16px !important;
    box-sizing: border-box !important;
}

.expansion-panel.dark .title.table .title-text {
    flex: 1 !important;
    margin-right: 0 !important; /* Remove the auto margin */
    min-width: 0 !important;
}

.expansion-panel.dark .title.table .expand-icon {
    flex-shrink: 0 !important;
    width: 24px !important;
    height: 24px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-left: 8px !important;
}

.expansion-panel.dark .title.table .expand-icon svg {
    width: 16px !important;
    height: 16px !important;
}
  /* Add these loading states */
  .loading-state {
    color: #aaaeb0;
    padding: 16px;
    text-align: center;
    font-size: 14px;
  }
  
  .error-state {
    color: #ff6b6b;
    padding: 16px;
    text-align: center;
    font-size: 14px;
  }
  
  /* ADD THIS AT THE END - ARROW FIX ONLY */
  .expansion-panel.dark .title.table {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      width: 100% !important;
      padding: 16px 12px 8px 16px !important;
      box-sizing: border-box !important;
  }
  
  .expansion-panel.dark .title.table .title-text {
      flex: 1 !important;
      margin-right: 0 !important;
      min-width: 0 !important;
  }
  
  .expansion-panel.dark .title.table .expand-icon {
      flex-shrink: 0 !important;
      width: 24px !important;
      height: 24px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      margin-left: 8px !important;
  }
  
  .expansion-panel.dark .title.table .expand-icon svg {
      width: 16px !important;
      height: 16px !important;
  }
  </style>