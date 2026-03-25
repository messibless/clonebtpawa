// stores/auth.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const token = ref(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)
  const initialized = ref(false) // Track if store has been initialized

  // Valid user data
  const validUserData = {
    phoneNumber: '750843433',
    password: 'testpass456',
    id: 2,
    name: 'Test User',
    email: 'test@example.com',
    balance: 100000,
    countryCode: '+255',
    country: 'Tanzania'
  }

  // Initialize authentication state from storage (only once)
  const initializeAuth = () => {
    // Prevent re-initialization if already done
    if (initialized.value) {
      console.log('Auth store already initialized, skipping...')
      return
    }
    
    console.log('Initializing auth store...')
    
    const storedToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
    const storedUser = localStorage.getItem('userData') || sessionStorage.getItem('userData')
    
    if (storedToken && storedUser) {
      try {
        token.value = storedToken
        user.value = JSON.parse(storedUser)
        isAuthenticated.value = true
        console.log('Auth store initialized with user data')
      } catch (error) {
        console.error('Error parsing stored user data:', error)
        logout()
      }
    } else {
      console.log('No stored auth data found')
    }
    
    initialized.value = true
  }

  // Check if user is logged in (uses cached state)
  const checkAuthStatus = () => {
    return isAuthenticated.value
  }

  // Login function - stores data in both storage and DOM state
  const login = async (credentials, rememberMe = true) => {
    loading.value = true
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const { phoneNumber, password } = credentials
      
      // Validate credentials
      const isValid = phoneNumber === validUserData.phoneNumber && password === validUserData.password
      
      if (isValid) {
        // Generate token
        const authToken = 'dummy_jwt_token_' + Date.now()
        
        // Store based on rememberMe choice
        if (rememberMe) {
          localStorage.setItem('authToken', authToken)
          localStorage.setItem('userData', JSON.stringify(validUserData))
        } else {
          sessionStorage.setItem('authToken', authToken)
          sessionStorage.setItem('userData', JSON.stringify(validUserData))
        }
        
        // Update state (DOM)
        token.value = authToken
        user.value = validUserData
        isAuthenticated.value = true
        loading.value = false
        
        // IMPORTANT: Return success object
        return { 
          success: true, 
          user: validUserData,
          token: authToken 
        }
      } else {
        loading.value = false
        // Return failure object
        return { 
          success: false, 
          message: 'Invalid phone number or password' 
        }
      }
    } catch (error) {
      console.error('Login error:', error)
      loading.value = false
      return { 
        success: false, 
        message: 'An error occurred during login' 
      }
    }
  }

  // Logout function - clears both storage and DOM state
  const logout = () => {
    console.log('Logging out, clearing auth data...')
    
    // Clear all storage
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('userData')
    
    // Reset state (DOM)
    user.value = null
    token.value = null
    isAuthenticated.value = false
    loading.value = false
    
    // Don't reset initialized flag to maintain state
    
    return { success: true }
  }

  // Get current user (from cached DOM state)
  const getCurrentUser = () => {
    return user.value
  }

  // Check if user exists by phone number
  const checkUserExists = (phoneNumber) => {
    return phoneNumber === validUserData.phoneNumber
  }

  // Update user data (syncs with both storage and DOM)
  const updateUserData = (newData) => {
    if (user.value) {
      user.value = { ...user.value, ...newData }
      
      // Update storage
      const storedUser = localStorage.getItem('userData') || sessionStorage.getItem('userData')
      if (storedUser) {
        const currentUser = JSON.parse(storedUser)
        const updatedUser = { ...currentUser, ...newData }
        
        if (localStorage.getItem('userData')) {
          localStorage.setItem('userData', JSON.stringify(updatedUser))
        } else if (sessionStorage.getItem('userData')) {
          sessionStorage.setItem('userData', JSON.stringify(updatedUser))
        }
      }
      
      console.log('User data updated in DOM and storage')
    }
  }

  // Update user balance
  const updateBalance = (amount) => {
    if (user.value) {
      user.value.balance = amount
      updateUserData({ balance: amount })
    }
  }

  // Computed properties (these are reactive and cached)
  const currentUser = computed(() => user.value)
  const isLoggedIn = computed(() => isAuthenticated.value)
  const isLoading = computed(() => loading.value)
  const userBalance = computed(() => user.value?.balance || 0)
  const userName = computed(() => user.value?.name || 'Guest')
  const userPhone = computed(() => user.value?.phoneNumber || '')
  const userEmail = computed(() => user.value?.email || '')

  // Initialize on store creation (only once)
  initializeAuth()

  return {
    // State
    user,
    token,
    isAuthenticated,
    loading,
    initialized,
    
    // Computed
    currentUser,
    isLoggedIn,
    isLoading,
    userBalance,
    userName,
    userPhone,
    userEmail,
    
    // Actions
    initializeAuth,
    checkAuthStatus,
    login,
    logout,
    getCurrentUser,
    checkUserExists,
    updateUserData,
    updateBalance
  }
})