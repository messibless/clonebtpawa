<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

// Determine active tab based on current route
const activeTab = computed(() => {
  return route.path === '/login' ? 'login' : 'register'
})

// Navigate to selected tab
const navigateToTab = (tab) => {
  if (tab === 'login') {
    router.push('/login')
  } else {
    router.push('/register')
  }
}
</script>

<template>
  <div class="page join-now-page router-view">
    <div class="tabs square with-top-border auth-tabs">
      <!-- Tabs Navigation -->
      <ul class="tabs-menu align-center">
        <!-- Login Tab -->
        <li 
          class="first tabs-selector" 
          :class="{ active: activeTab === 'login' }"
          data-test-id="tabs-login"
          @click="navigateToTab('login')"
        >
          <div class="tab-item">
            <div class="tab-item-border">
              <div class="tab-icon">
                <svg class="svg-icon icon icon-size-medium">
                  <use xlink:href="#icon-logIn-menu"></use>
                </svg>
              </div>
              <span class="tab-text">Log In</span>
            </div>
          </div>
        </li>
        
        <!-- Register Tab -->
        <li 
          class="last tabs-selector" 
          :class="{ active: activeTab === 'register' }"
          data-test-id="tabs-join-now"
          @click="navigateToTab('register')"
        >
          <div class="tab-item">
            <div class="tab-item-border">
              <div class="tab-icon">
                <svg class="svg-icon icon icon-size-medium">
                  <use xlink:href="#icon-join-now"></use>
                </svg>
              </div>
              <span class="tab-text">Join Now</span>
            </div>
          </div>
        </li>
      </ul>

      <!-- Dynamic Content Based on Route -->
      <section class="tab-section">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>