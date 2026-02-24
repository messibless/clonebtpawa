<script setup>
import { ref, computed } from 'vue';
import Vodafone_Vodacom from '../../../assets/media/Vodafone_Vodacom_b2d51cab80.svg';

// 1. Logic ya kiasi cha pesa
const amount = ref(null);
const minWithdraw = 100;
const maxWithdraw = 3000000;

// 2. Logic ya ku-enable/disable button
const isInvalid = computed(() => {
    return !amount.value || amount.value < minWithdraw || amount.value > maxWithdraw;
});

// 3. Logic ya kutoa pesa
const handleWithdraw = () => {
    if (!isInvalid.value) {
        alert(`Unatoa TSh ${amount.value}...`);
        // Hapa utaweka API call yako
    }
};
</script>

<template>
    <div data-v-3cb9dec9="" class="withdraw router-view">
        <div data-v-c9b60287="">
            <div data-v-907442d3="" class="header-container">
                <h2 data-v-907442d3="">Withdraw</h2>
            </div>

            <div class="withdraw-component">
                <div class="withdraw-form-wrapper">
                    <div class="withdraw-form">
                        <form @submit.prevent="handleWithdraw" class="form">
                            
                            <div class="user-phone withdraw-phone">
                                <div class="table">
                                    <div class="row-cell align-middle user-phone-icon">
                                        <img :src="Vodafone_Vodacom" alt="Vodacom">
                                    </div>
                                    <div class="row-cell align-middle user-phone-number">
                                        <div class="user-phone-info-wrapper">
                                            <div class="user-phone-info">
                                                <div class="user-phone-label">Your mobile number</div>
                                                <div class="phone-number">+255 750843433</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="input-field withdraw-amount">
                                <label for="withdraw-form-amount" class="form">
                                    Amount 
                                    <span class="optional-slot">
                                        <div class="withdraw-fee"><span class="label-text">FREE </span></div>
                                    </span>
                                </label>
                                
                                <div class="input-field-wrapper">
                                    <span class="currency-symbol">TSh</span>
                                    <input 
                                        v-model="amount"
                                        id="withdraw-form-amount" 
                                        type="number" 
                                        placeholder="Enter amount"
                                        inputmode="numeric"
                                    >
                                </div>
                                <div class="help-text">Min: {{ minWithdraw.toLocaleString() }}, Max: {{ maxWithdraw.toLocaleString() }}</div>
                            </div>

                            <button 
                                class="button button-primary button-full" 
                                :disabled="isInvalid"
                                type="submit"
                            >
                                Withdraw
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Rekebisha button iwe full width kweli na iondoe max-width */
.button-full {
    width: 100% !important;
    max-width: none !important; /* Hii inatoa ule ukomo wa 300px */
    display: block;
    margin-top: 10px;
}

.withdraw-form {
    background: #f4f5f0;
    margin: 10px 0;
    padding: 16px; /* Nimeongeza padding kidogo */
}

/* Kufanya input ionekane vizuri */
.input-field-wrapper {
    display: flex;
    border: 1px solid #e6e7e2;
    background: #fff;
    
    input {
        border: none !important; /* Toa border ya ndani ya input */
        flex: 1;
        padding: 10px;
        outline: none;
    }
}

/* Styles zako zingine za asili... */
.withdraw[data-v-3cb9dec9] { padding: 20px; }
.header-container { display: flex; margin-bottom: 10px; }
h2 { font-weight: 700; font-size: 18px; color: #252a2d; }
.table { width: 100%; display: table; }
.row-cell { display: table-cell; vertical-align: middle; }
.user-phone-icon img { width: 32px; height: 32px; margin-right: 8px; }
.user-phone-label { color: #8e9398; font-size: 12px; }
.phone-number { font-size: 14px; font-weight: bold; color: #252a2d; }
.currency-symbol { background: #e6e7e2; padding: 0 12px; display: flex; align-items: center; color: #8e9398; font-size: 14px; }
.help-text { color: #8e9398; font-size: 12px; margin-top: 6px; }

/* Button States */
.button-primary {
    background-color: #9ce800;
    color: #252a2d;
    padding: 14px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;

    &:disabled {
        background-color: #e6e7e2;
        color: #8e9398;
        cursor: not-allowed;
    }
}
</style>