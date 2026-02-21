<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const closeSidebar = () => {
  emit('close')
}
</script>

<template>
  <Transition name="sidebar">
    <div v-if="isOpen" class="sidebar-overlay" @click="closeSidebar">
      <div class="sidebar-content" @click.stop>
        <!-- Your existing left sidebar content -->
        <div class="sidebar-header">
          <a href="/" class="logo-link">
            <svg class="svg-icon logo">
              <use xlink:href="#logo"></use>
            </svg>
          </a>
          <span class="close-btn" @click="closeSidebar">
            <svg class="svg-icon">
              <use xlink:href="#icon-cross-squared"></use>
            </svg>
          </span>
        </div>
        
        <!-- Rest of your sidebar menu content -->
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.sidebar-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 360px;
  height: 100%;
  background-color: #252a2d;
  overflow-y: auto;
  transform: translateX(0);
  transition: transform 0.3s ease;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #252a2d;
  border-bottom: 1px solid #353b40;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo-link .logo {
  width: 92px;
  height: 16px;
  fill: #fff;
}

.close-btn {
  cursor: pointer;
  padding: 4px;
  
  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }
}

/* Animations */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.3s ease;
  
  .sidebar-content {
    transition: transform 0.3s ease;
  }
}

.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  
  .sidebar-content {
    transform: translateX(-100%);
  }
}
</style>