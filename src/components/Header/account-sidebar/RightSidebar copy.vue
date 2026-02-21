<!-- RightSidebar.vue -->
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

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
    default: '350px'
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

// Handle ESC key press
const handleEscape = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    closeSidebar()
  }
}

// Close sidebar when clicking outside
const handleClickOutside = (e) => {
  const sidebar = document.querySelector('.sidebar-content')
  const openButton = document.querySelector('.open-sidebar-btn') // au kutumia class yako ya kipekee
  
  // Angalia kama click ilitoka kwenye button ya kufungua sidebar
  if (openButton && openButton.contains(e.target)) {
    return // Acha click iendelee bila kufunga sidebar
  }
  
  if (sidebar && !sidebar.contains(e.target) && props.closeOnClickOutside && props.isOpen) {
    closeSidebar()
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
    }, 10)
  } else {
    isVisible.value = false
    // Wait for transition to finish before unmounting
    setTimeout(() => {
      if (!props.isOpen) {
        isMounted.value = false
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
})

// Initialize based on props
onMounted(() => {
  if (props.isOpen) {
    isMounted.value = true
    setTimeout(() => {
      isVisible.value = true
    }, 10)
  }
})
</script>

<template>
  <!-- Backdrop -->
  <div 
    v-if="isMounted"
    class="sidebar-backdrop"
    :class="{ 'visible': isVisible }"
    @click="closeOnClickOutside ? closeSidebar() : null"
  >
    <!-- Sidebar Content -->
    <div 
      class="sidebar-content"
      :class="{ 'visible': isVisible }"
      :style="{ width: width }"
      @click.stop
    >
      <!-- Header -->
      <div class="sidebar-header">
        <h3 class="sidebar-title">{{ title }}</h3>
        
        <button 
          v-if="showCloseButton"
          class="sidebar-close-btn"
          @click="closeSidebar"
          aria-label="Close sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Content Slot -->
      <div class="sidebar-body">
        <slot></slot>
      </div>

      <!-- Footer Slot (optional) -->
      <div v-if="$slots.footer" class="sidebar-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

.sidebar-backdrop {
  position: fixed; /* ← BADILISHA KUWA FIXED */
  top: 0;
  left: 0;
  right: 0; /* ← LETEA MPKA KOTE */
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9999;
  transition: background-color 0.3s ease;
  pointer-events: none;
}

.sidebar-backdrop.visible {
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: all;
}

.sidebar-content {
  position: fixed;
  top: 0;
  right: 200px; /* ← HAPA ONGEZA MARGIN YA 200px */
  bottom: 0;
  background: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  transform: translateX(calc(100% + 200px)); /* ← HESABU PAMOJA NA MARGIN */
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  overflow: hidden;
  width: 350px; /* ← WIDTH YA DEFAULT */
}

.sidebar-content.visible {
  transform: translateX(0); /* ← RUDISHA KWA SEHEMU YAKO */
}

/* 
  MAELEZO:
  - Kwanza sidebar iko nje ya screen: transform: translateX(calc(100% + 200px))
  - Inapofunguliwa: transform: translateX(0) inamaanisha inakuja hadi right: 200px
*/

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e6e7e2;
  background: #f8f9fa;
  flex-shrink: 0;
}

.sidebar-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #252a2d;
}

.sidebar-close-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #8e9398;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.sidebar-close-btn:hover {
  background-color: #e6e7e2;
  color: #252a2d;
}

.sidebar-close-btn:active {
  transform: scale(0.95);
}

.sidebar-body {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.sidebar-footer {
  flex-shrink: 0;
  padding: 20px 24px;
  border-top: 1px solid #e6e7e2;
  background: #f8f9fa;
}

/* Scrollbar styling */
.sidebar-body::-webkit-scrollbar {
  width: 6px;
}

.sidebar-body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.sidebar-body::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.sidebar-body::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Responsive design */
@media (max-width: 1400px) {
  .sidebar-content {
    right: 150px;
    transform: translateX(calc(100% + 150px));
  }
}

@media (max-width: 1200px) {
  .sidebar-content {
    right: 100px;
    transform: translateX(calc(100% + 100px));
  }
}

@media (max-width: 992px) {
  .sidebar-content {
    right: 50px;
    transform: translateX(calc(100% + 50px));
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .sidebar-content {
    right: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    transform: translateX(100%); /* ← MOBILE HAITAJI MARGIN */
  }
  
  .sidebar-content.visible {
    transform: translateX(0);
  }
  
  .sidebar-header,
  .sidebar-body,
  .sidebar-footer {
    padding: 16px 20px;
  }
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 769px) {
  .sidebar-content {
    right: 50px;
    width: 400px !important;
    transform: translateX(calc(100% + 50px));
  }
}
</style>