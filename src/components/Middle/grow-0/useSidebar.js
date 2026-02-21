import { ref } from 'vue'

const isLeftSidebarOpen = ref(false)

export function useSidebar() {
  const openLeftSidebar = () => {
    isLeftSidebarOpen.value = true
  }

  const closeLeftSidebar = () => {
    isLeftSidebarOpen.value = false
  }

  const toggleLeftSidebar = () => {
    isLeftSidebarOpen.value = !isLeftSidebarOpen.value
  }

  return {
    isLeftSidebarOpen,
    openLeftSidebar,
    closeLeftSidebar,
    toggleLeftSidebar
  }
}