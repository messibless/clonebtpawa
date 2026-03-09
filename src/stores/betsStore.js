import { defineStore } from 'pinia'

export const useBetsStore = defineStore('bets', {
  state: () => ({
    settledBets: [],
    currentBet: null,
    loading: false
  }),
  
  actions: {
    setSettledBets(bets) {
      this.settledBets = bets
    },
    
    setCurrentBet(bet) {
      this.currentBet = bet
    },
    
    getBetById(id) {
      return this.settledBets.find(bet => bet.id == id)
    }
  }
})