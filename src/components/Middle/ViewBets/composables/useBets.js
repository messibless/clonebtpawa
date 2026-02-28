// composables/useBets.js
import { ref, computed } from 'vue'
import api from '../../../../services/api'

const allBets = ref([])
const loading = ref(false)
const error = ref('')

const fetchBets = async () => {
  loading.value = true
  error.value = ''
  try {
    const response = await api.get('/bets/') // API yako
    allBets.value = response.data  // assume response.data = array ya bets
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load bets'
  } finally {
    loading.value = false
  }
}

// Computed filters
const openBets = computed(() =>
  allBets.value.filter(bet => bet.status !== 'SETTLED')
)
const settledBets = computed(() =>
  allBets.value.filter(bet => bet.status === 'SETTLED')
)

export function useBets() {
  return { allBets, openBets, settledBets, fetchBets, loading, error }
}