<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/authStore'

// Initialize router and store
const router = useRouter()
const authStore = useAuthStore()

// Reactive states
const phoneNumber = ref('')
const password = ref('')
const showPassword = ref(false)
const keepLoggedIn = ref(true)
const errorMessage = ref('')

// Use loading state from store
const isLoading = computed(() => authStore.isLoading)

// Form validation
const isPhoneValid = computed(() => {
  return phoneNumber.value.length >= 9 && /^\d+$/.test(phoneNumber.value)
})

const isPasswordValid = computed(() => {
  return password.value.length >= 4
})

const isFormValid = computed(() => {
  return isPhoneValid.value && isPasswordValid.value
})

// Toggle password visibility
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// Handle login submission
const handleLogin = async (e) => {
  e.preventDefault()
  
  if (!isFormValid.value || isLoading.value) return
  
  errorMessage.value = ''
  
  const credentials = {
    phoneNumber: phoneNumber.value,
    password: password.value
  }
  
  try {
    const result = await authStore.login(credentials, keepLoggedIn.value)
    
    if (result && result.success) {
      router.push('/')
    } else {
      errorMessage.value = result?.message || 'Login failed. Please try again.'
    }
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'An unexpected error occurred. Please try again.'
  }
}

// Pre-fill form with valid user data (for testing)
const fillValidCredentials = () => {
  phoneNumber.value = '712345678'
  password.value = 'testpass456'
}

// Go to register page
const goToRegister = () => {
  router.push('/join-now')
}
</script>

<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <!-- Error Message -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <!-- Phone Number Input - Betpawa Style -->
    <div class="input-field">
      <label for="login-form-phoneNumber" class="form-label">
        Mobile number
      </label>
      <div class="phone-input-wrapper">
        <span class="fi fi-tz flag"></span>
        <span class="country-code">+255</span>
        <input
          v-model="phoneNumber"
          id="login-form-phoneNumber"
          :class="{ 'is-valid': isPhoneValid && phoneNumber, 'is-error': phoneNumber && !isPhoneValid }"
          type="tel"
          placeholder="712345678"
          @input="errorMessage = ''"
        />
      </div>
      <div class="help-text" :class="{ 'valid-text': isPhoneValid && phoneNumber }">
        {{ isPhoneValid && phoneNumber ? '✓ Valid number' : 'e.g., 712345678' }}
      </div>
    </div>

    <!-- Password Input -->
    <div class="input-field">
      <label for="login-form-password" class="form-label">
        Password
        <span 
          @click="togglePassword"
          class="show-password"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </span>
      </label>
      <div class="password-input-wrapper">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          id="login-form-password"
          :class="{ 'is-valid': isPasswordValid && password, 'is-error': password && !isPasswordValid }"
          placeholder="••••••••"
          @input="errorMessage = ''"
        />
      </div>
      <div class="help-text">
        Min. 4 characters
      </div>
    </div>

    <!-- Keep Me Logged In -->
    <div class="checkbox-wrapper">
      <label class="checkbox-container">
        <input
          v-model="keepLoggedIn"
          type="checkbox"
        />
        <span class="checkmark"></span>
        <span class="checkbox-text">Keep me logged in</span>
      </label>
    </div>

    <!-- Login Button -->
    <button
      type="submit"
      class="submit-button"
      :disabled="!isFormValid || isLoading"
    >
      <span v-if="!isLoading">LOG IN</span>
      <span v-else class="loading-spinner"></span>
    </button>

    <!-- Forgot Password -->
    <a 
      href="#" 
      class="forgot-link"
      @click.prevent="console.log('Forgot password')"
    >
      Forgot password?
    </a>

    <!-- Register Link -->
    <div class="register-section">
      <span class="register-text">Don't have an account?</span>
      <a 
        href="#" 
        class="register-link"
        @click.prevent="goToRegister"
      >
        Join Now
      </a>
    </div>

    <!-- Test Credentials (hidden by default) -->
    <div class="test-credentials" v-if="false">
      <button type="button" @click="fillValidCredentials">
        Fill Test Credentials
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 16px 0;
}

/* Error Message */
.error-message {
  background-color: rgba(255, 68, 68, 0.1);
  color: #ff4444;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  text-align: center;
  border: 1px solid rgba(255, 68, 68, 0.2);
}

/* Input Fields */
.input-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  color: #aaaeb0;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.show-password {
  color: #9ce800;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
}

/* Phone Input - Betpawa Style */
.phone-input-wrapper {
  background-color: #2d3337;
  border: 1px solid #3a4045;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.2s;
  
  &:focus-within {
    border-color: #9ce800;
    background-color: #2d3337;
  }
  
  &.has-error {
    border-color: #ff4444;
  }
}

.flag {
  flex-shrink: 0;
  width: 24px;
  height: 16px;
  margin-right: 8px;
  
  &.fi-tz {
    background-image: url('/src/assets/img/flags/tz-BjLtHeil.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.country-code {
  color: #e6e7e2;
  font-size: 14px;
  font-weight: 400;
  margin-right: 4px;
  white-space: nowrap;
}

.phone-input-wrapper input {
  flex: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  padding: 12px 0;
  outline: none;
  width: 100%;
  
  &::placeholder {
    color: #5a6268;
  }
  
  &.is-valid {
    color: #9ce800;
  }
}

/* Password Input */
.password-input-wrapper {
  background-color: #2d3337;
  border: 1px solid #3a4045;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.2s;
  
  &:focus-within {
    border-color: #9ce800;
    background-color: #2d3337;
  }
}

.password-input-wrapper input {
  flex: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  padding: 12px 0;
  outline: none;
  width: 100%;
  
  &::placeholder {
    color: #5a6268;
  }
  
  &.is-valid {
    color: #9ce800;
  }
}

/* Help Text */
.help-text {
  color: #8e9398;
  font-size: 12px;
  padding-left: 4px;
  
  &.valid-text {
    color: #9ce800;
  }
}

/* Checkbox - Betpawa Style */
.checkbox-wrapper {
  margin: 4px 0;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  padding-left: 28px;
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  .checkmark {
    position: absolute;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #2d3337;
    border: 1px solid #3a4045;
    border-radius: 4px;
    transition: all 0.2s;
    
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 5px;
      top: 2px;
      width: 4px;
      height: 8px;
      border: solid #ffffff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
  
  input:checked ~ .checkmark {
    background-color: #9ce800;
    border-color: #9ce800;
    
    &:after {
      display: block;
    }
  }
  
  .checkbox-text {
    color: #e6e7e2;
    font-size: 13px;
  }
}

/* Submit Button - Betpawa Style */
.submit-button {
  background-color: #9ce800;
  border: none;
  border-radius: 8px;
  color: #252a2d;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 14px;
  text-transform: uppercase;
  transition: all 0.2s;
  width: 100%;
  
  &:hover:not(:disabled) {
    background-color: #8aca00;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background-color: #3a4045;
    color: #6c757d;
    cursor: not-allowed;
    opacity: 0.7;
  }
}

/* Loading Spinner */
.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #252a2d;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Links */
.forgot-link {
  color: #8e9398;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #9ce800;
  }
}

.register-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 8px;
}

.register-text {
  color: #aaaeb0;
  font-size: 13px;
}

.register-link {
  color: #9ce800;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
}

/* Test Credentials (optional) */
.test-credentials {
  margin-top: 20px;
  text-align: center;
  
  button {
    background: #2d3337;
    border: 1px dashed #3a4045;
    border-radius: 6px;
    color: #aaaeb0;
    cursor: pointer;
    font-size: 12px;
    padding: 8px 16px;
    transition: all 0.2s;
    
    &:hover {
      border-color: #9ce800;
      color: #9ce800;
    }
  }
}
</style>