// stores/balanceStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '../services/api'

export const useBalanceStore = defineStore('balance', () => {
  // State variables
  const balanceState = ref(null)
  const loading = ref(false)
  const error = ref('')
  const lastFetched = ref(null) // Track when last fetched
  const CACHE_DURATION = 30000 // 30 seconds cache - change to 0 if you want always fresh

  // Function to fetch balance from API
  const fetchBalance = async (force = false) => {
    // Check if we should use cached data
    const now = Date.now()
    const isCacheValid = lastFetched.value && (now - lastFetched.value) < CACHE_DURATION
    
    if (!force && isCacheValid && balanceState.value) {
      console.log('Using cached balance (fresh within 30s):', balanceState.value)
      return balanceState.value
    }
    
    loading.value = true
    error.value = ''
    
    try {
      console.log('Fetching fresh balance from API...')
      const response = await api.get('/balance')
      console.log('RAW API RESPONSE:', response)
      
      // Handle different response structures
      let balanceData = response.data
      
      // If response has nested data property
      if (response.data?.data) {
        balanceData = response.data.data
      }
      
      // If response is just a number
      if (typeof response.data === 'number') {
        balanceData = { amount: response.data }
      }
      
      // If response has balance property
      if (response.data?.balance) {
        balanceData = { amount: response.data.balance }
      }
      
      // Ensure we have an amount property
      if (!balanceData.amount && balanceData.amount !== 0) {
        console.warn('Balance data missing amount property:', balanceData)
        balanceData = { amount: 0, ...balanceData }
      }
      
      // Convert amount to number if it's string
      if (typeof balanceData.amount === 'string') {
        balanceData.amount = parseFloat(balanceData.amount)
      }
      
      balanceState.value = balanceData
      lastFetched.value = now
      console.log('Balance updated successfully:', balanceState.value)
      return balanceState.value
      
    } catch (err) {
      console.error('Error fetching balance:', err)
      error.value = 'Failed to load balance'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Force refresh balance (ignore cache)
  const refreshBalance = async () => {
    console.log('Force refreshing balance...')
    return await fetchBalance(true)
  }

  // Update balance after deposit/withdrawal
  const updateBalance = async (newAmount) => {
    console.log('Manually updating balance to:', newAmount)
    if (balanceState.value) {
      balanceState.value.amount = newAmount
      lastFetched.value = Date.now() // Reset cache timer
    } else {
      balanceState.value = { amount: newAmount }
    }
    console.log('Balance manually updated:', balanceState.value)
  }

  // Reset balance (e.g., on logout)
  const resetBalance = () => {
    balanceState.value = null
    lastFetched.value = null
    error.value = ''
    loading.value = false
    console.log('Balance reset')
  }

  // Computed - formatted balance
  const formattedBalance = computed(() => {
    if (!balanceState.value) return '0.00'
    
    let amount = balanceState.value.amount
    if (amount === undefined || amount === null) return '0.00'
    
    const amountNumber = parseFloat(amount)
    if (isNaN(amountNumber)) return '0.00'
    
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amountNumber)
  })

  // Computed - raw balance amount
  const rawBalance = computed(() => {
    if (!balanceState.value) return 0
    const amount = balanceState.value.amount
    return amount ? parseFloat(amount) : 0
  })

  // Computed - check if balance is loading
  const isLoading = computed(() => loading.value)

  return {
    // State
    balanceState,
    loading,
    error,
    lastFetched,
    
    // Computed
    formattedBalance,
    rawBalance,
    isLoading,
    
    // Actions
    fetchBalance,
    refreshBalance,  // New: force refresh
    updateBalance,   // New: manual update
    resetBalance
  }
}, {
  persist: {
    key: 'balance-store',
    storage: localStorage,
    paths: ['balanceState'] // Only persist balance state, not lastFetched
  }
})