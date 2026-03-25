// stores/balanceStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '../services/api'

export const useBalanceStore = defineStore('balance', () => {
  // State variables
  const balanceState = ref(null)
  const loading = ref(false)
  const error = ref('')

  // Function to fetch balance from API
  const fetchBalance = async () => {
    loading.value = true
    error.value = ''
    try {
      const response = await api.get('/balance')
      balanceState.value = response.data
      console.log('Fetched balance today:', balanceState.value)
      return response.data
    } catch (err) {
      console.error('Error fetching balance:', err)
      error.value = 'Failed to load balance'
      throw err
    } finally {
      loading.value = false
    }
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
    
    // Computed
    formattedBalance,
    rawBalance,
    
    // Actions
    fetchBalance
  }
})