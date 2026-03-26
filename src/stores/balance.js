// stores/balanceStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '../services/api'

export const useBalanceStore = defineStore('balance', () => {
  // State variables
  const balanceState = ref(null)
  const loading = ref(false)
  const error = ref('')
  const hasFetched = ref(false) // ADD THIS - Track if already fetched

  // Function to fetch balance from API
  const fetchBalance = async (force = false) => { // ADD force parameter
    // Only fetch if not fetched before OR force=true
    if (!force && hasFetched.value) {
      console.log('Balance already fetched, using cached data')
      return balanceState.value
    }
    
    loading.value = true
    error.value = ''
    try {
      const response = await api.get('/balance')
      balanceState.value = response.data
      hasFetched.value = true // Mark as fetched
      console.log('Fetched balance:', balanceState.value)
      return response.data
    } catch (err) {
      console.error('Error fetching balance:', err)
      error.value = 'Failed to load balance'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Reset balance (e.g., on logout)
  const resetBalance = () => {
    balanceState.value = null
    hasFetched.value = false
    error.value = ''
  }

  // Computed - formatted balance
  const formattedBalance = computed(() => {
    if (!balanceState.value?.amount) return '0.00'
    const amountNumber = parseFloat(balanceState.value.amount)
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amountNumber)
  })

  // Computed - raw balance amount
  const rawBalance = computed(() => {
    return balanceState.value?.amount || 0
  })

  return {
    // State
    balanceState,
    loading,
    error,
    hasFetched,
    
    // Computed
    formattedBalance,
    rawBalance,
    
    // Actions
    fetchBalance,
    resetBalance
  }
}, {
  persist: {
    key: 'balance-store', // Key for localStorage
    storage: localStorage, // Use localStorage to persist
    paths: ['balanceState', 'hasFetched'] // Only persist these
  }
})