import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const token = ref(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)

  // Valid user data
  const validUserData = {
    phoneNumber: '712345678',
    password: 'testpass456',
    id: 2,
    name: 'Test User',
    email: 'test@example.com',
    balance: 100000,
    countryCode: '+255',
    country: 'Tanzania'
  }

  // Initialize authentication state from storage
  const initializeAuth = () => {
    const storedToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken')
    const storedUser = localStorage.getItem('userData')
    
    if (storedToken && storedUser) {
      try {
        token.value = storedToken
        user.value = JSON.parse(storedUser)
        isAuthenticated.value = true
      } catch (error) {
        console.error('Error parsing stored user data:', error)
        logout()
      }
    }
  }

  // Check if user is logged in
  const checkAuthStatus = () => {
    return isAuthenticated.value
  }

  // Login function - MUST RETURN AN OBJECT
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
        
        // Update state
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

  // Logout function
  const logout = () => {
    // Clear all storage
    localStorage.removeItem('authToken')
    localStorage.removeItem('userData')
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('userData')
    
    // Reset state
    user.value = null
    token.value = null
    isAuthenticated.value = false
    loading.value = false
    
    return { success: true }
  }

  // Get current user
  const getCurrentUser = () => {
    return user.value
  }

  // Check if user exists by phone number
  const checkUserExists = (phoneNumber) => {
    return phoneNumber === validUserData.phoneNumber
  }

  // Update user data
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
        } else {
          sessionStorage.setItem('userData', JSON.stringify(updatedUser))
        }
      }
    }
  }

  // Update user balance
  const updateBalance = (amount) => {
    if (user.value) {
      user.value.balance = amount
      updateUserData({ balance: amount })
    }
  }

  // Computed properties
  const currentUser = computed(() => user.value)
  const isLoggedIn = computed(() => isAuthenticated.value)
  const isLoading = computed(() => loading.value)
  const userBalance = computed(() => user.value?.balance || 0)
  const userName = computed(() => user.value?.name || 'Guest')

  // Initialize on store creation
  initializeAuth()

  return {
    // State
    user,
    token,
    isAuthenticated,
    loading,
    
    // Computed
    currentUser,
    isLoggedIn,
    isLoading,
    userBalance,
    userName,
    
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