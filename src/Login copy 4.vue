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
    
    // Check if result exists and has success property
    if (result && result.success) {
      // Redirect to home page
      router.push('/')
    } else {
      // Handle error - use result.message or default error
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

// For debugging - check store state
const debugStore = () => {
  console.log('Auth Store:', {
    user: authStore.user,
    isLoggedIn: authStore.isLoggedIn,
    isLoading: authStore.isLoading,
    isAuthenticated: authStore.isAuthenticated
  })
}
</script>

<template>
  <!-- FORM TU - HAKUNA TABS -->
  <form @submit.prevent="handleLogin" class="login-form">
    <!-- Error Message Display -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <!-- Debug info (optional) -->
    <div v-if="false" class="debug-info">
      <button @click="debugStore" type="button">Debug Store</button>
    </div>

    <!-- Phone Number Input -->
    <div class="country-code-container" data-test-id="loginFormPhoneNumber">
      <div class="input-field phone-number-input">
        <label for="login-form-phoneNumber" class="form">
          Mobile number
          <span class="optional optional-slot"></span>
        </label>
        <div class="input-field-wrapper input-icon-undefined">
          <span class="fi fi-tz flag" title="TZ"></span>
          <span class="country-code">+255</span>
          <input
            v-model="phoneNumber"
            data-test-id="loginFormPhoneNumber"
            id="login-form-phoneNumber"
            :class="{ valid: isPhoneValid && phoneNumber, error: phoneNumber && !isPhoneValid }"
            name="phoneNumber"
            type="tel"
            placeholder=""
            @input="errorMessage = ''"
          />
        </div>
        <div class="help-text">
          {{ isPhoneValid && phoneNumber ? '✓ Valid phone number' : 'Enter your phone number without the country code (e.g., 123456789).' }}
        </div>
      </div>
    </div>

    <!-- Password Input -->
    <div class="input-field" autocomplete="new-password">
      <label for="login-form-password-input" class="form">
        Password
        <span 
          @click="togglePassword"
          class="optional underline"
          data-test-id="handle-show-password-button"
        >
          {{ showPassword ? 'Hide' : 'Show' }}
        </span>
      </label>
      <div class="input-field-wrapper input-icon-undefined">
        <input
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          id="login-form-password-input"
          :class="{ valid: isPasswordValid && password, error: password && !isPasswordValid }"
          placeholder=""
          autocomplete="new-password"
          name="password-input"
          @input="errorMessage = ''"
        />
      </div>
      <div class="help-text">
        {{ password.length }}/4 Characters {{ isPasswordValid && password ? '✓' : '' }}
      </div>
    </div>

    <!-- Keep Me Logged In Checkbox -->
    <span class="checkbox">
      <input
        v-model="keepLoggedIn"
        id="keepLoggedIn"
        class="checkbox-input"
        type="checkbox"
        data-test-id="on-input-button"
      />
      <label class="checkbox-label" for="keepLoggedIn">
        <span class="checkbox-label-extra-space">
          <span class="checkbox-input-custom with-border">
            <div v-if="keepLoggedIn" class="icon-checkbox">
              <svg class="svg-icon" style="vertical-align: text-top;">
                <use xlink:href="#icon-checkbox"></use>
              </svg>
            </div>
          </span>
        </span>
        <span class="checkbox-label-wrapper">
          <span>Keep me logged in on this device</span>
        </span>
      </label>
    </span>

    <!-- Login Button -->
    <button
      :disabled="!isFormValid || isLoading"
      type="submit"
      data-test-id="logInButton"
      class="button button-submit button-full"
      :class="{ loading: isLoading }"
    >
      <span v-if="!isLoading">LOG IN</span>
      <span v-else class="loading-text">LOGGING IN...</span>
    </button>

    <!-- Forgot Password Link -->
    <a 
      href="#" 
      class="info underline text-mid bold"
      data-test-id="nav-forgot-password-link"
      @click.prevent="console.log('Forgot password clicked')"
    >
      Forgot Password?
    </a>

    <!-- Join Now Link - HII NDIO MUHIMU KWA NAVIGATION -->
    <span class="join-now-text">
      Don't have an account? 
      <a 
        href="#" 
        class="bold underline" 
        data-test-id="track-link-click-link"
        @click.prevent="goToRegister"
      >
        Join Now
      </a>
    </span>

    <!-- Quick Fill Button (for testing) -->
    <div class="quick-fill">
      <button 
        type="button"
        class="quick-fill-btn"
        @click="fillValidCredentials"
      >
        Fill Valid Credentials (Phone: 712345678)
      </button>
    </div>
    
    <!-- Test Credentials Info -->
    <!-- <div class="test-info">
      <p><strong>Test Credentials:</strong></p>
      <p>Phone: <code>712345678</code></p>
      <p>Password: <code>testpass456</code></p>
    </div> -->
  </form>
</template>

<style lang="scss" scoped>
/* ===== STYLES ZA FORM TU - HAKUNA STYLES ZA TABS ===== */

/* Error message styling */
.error-message {
  background-color: #fee;
  color: #c33;
  border: 1px solid #fcc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 16px;
  text-align: center;
  font-size: 14px;
}

/* Loading state */
.loading-text {
  display: inline-block;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
}

/* Button disabled state */
.button:disabled {
  cursor: not-allowed;
  color: #8e9398;
  fill: #8e9398;
  background: #e6e7e2;
}

/* Quick fill button */
.quick-fill {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #ddd;
  text-align: center;
}

.quick-fill-btn {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 12px;
  color: #495057;
  cursor: pointer;
  transition: all 0.2s;
}

.quick-fill-btn:hover {
  background: #e9ecef;
  border-color: #9ce800;
}

/* Test info */
.test-info {
  margin-top: 10px;
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px dashed #dee2e6;
  border-radius: 4px;
  font-size: 12px;
}

.test-info code {
  background-color: #e9ecef;
  padding: 2px 4px;
  border-radius: 3px;
}

/* ===== FORM STYLES - HIZI ZINABAKI ===== */
.login-form {
  flex-flow: column;
  display: flex;
}

.country-code-container, .phone-number-input {
  width: 100%;
}

.input-field {
  margin-bottom: 16px;
}

.input-field label {
  width: 100%;
}

label.form {
  color: #252a2d;
  margin: 0 0 6px;
}

label {
  color: #252a2d;
  margin: 5px 0;
  display: inline-block;
}

p, .page-error, .notify, label, .info {
  font-weight: 400;
}

.button-text.medium, .notify, label, .info {
  font-size: 14px;
  line-height: 18px;
}

.input-field .optional {
  float: right;
  color: #8e9398;
  font-size: 14px;
}

.phone-number-input .input-field-wrapper {
  background-color: #e6e7e2;
  border-radius: 2px 5px 5px 2px;
  align-items: center;
  width: 100%;
}

.input-field-wrapper {
  display: flex;
  position: relative;
}

.phone-number-input .flag {
  flex: 0 0 24px;
  width: 24px;
  height: 16px;
  margin: 0 7px;
}

.fi-tz {
  background-image: url(/src/assets/img/flags/tz-BjLtHeil.svg);
}

.fi {
  width: 1.33333em;
  line-height: 1em;
  display: inline-block;
  position: relative;
}

.fib, .fi {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
}

.phone-number-input .country-code {
  color: #252a2d;
  font-size: 14px;
  line-height: 1.1rem;
  position: absolute;
  left: 44px;
}

.input-field-wrapper input.valid {
  border-width: 1px;
  border-color: #9ce800;
}

.phone-number-input input {
  padding-left: 40px;
}

.input-field-wrapper input {
  width: 100%;
  max-width: 100%;
}

input[type=text], input[type=password], input[type=email], input[type=url], input[type=number], input[type=date], input[type=tel], input[type=search] {
  border: 1px solid #e6e7e2;
  border-radius: 0;
  outline: 0;
  padding: 7px 10px;
  font: 14px / 1.1rem Roboto-flex, Helvetica, Arial, sans-serif;
}

.input-field .help-text {
  color: #8e9398;
  margin-top: 6px;
}

.input-field .currency-symbol, .input-field .help-text {
  font-weight: 400;
}

.input-field .help-text {
  font-size: 12px;
  line-height: 16px;
}

.underline:not([class*=button]) {
  text-decoration: underline;
}

.checkbox {
  color: #252a2d;
  cursor: pointer;
  margin: 0 0 20px;
  font-size: 14px;
  font-weight: 400;
}

.checkbox-input {
  display: none;
}

.checkbox-label {
  align-items: flex-start;
  margin: 0;
  display: flex;
}

.checkbox-label-extra-space {
  margin: -8px 0 -8px -8px;
  padding: 8px;
}

.checkbox-input:checked+.checkbox-label .checkbox-input-custom {
  background: #8dc63f;
  border-color: #8dc63f;
}

.checkbox-input-custom.with-border {
  border: 1px solid #aaaeb0;
}

.checkbox-input-custom {
  background: #fff;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  display: flex;
}

.checkbox-input-custom .icon-checkbox {
  width: 10px;
  height: 10px;
  line-height: 18px;
}

.checkbox-input-custom .icon-checkbox svg {
  fill: #fff;
  width: 100%;
  height: 100%;
}

.checkbox-label-wrapper {
  width: 100%;
}

.button-full {
  width: 100%;
  max-width: none;
}

.button-submit {
  color: #252a2d;
  fill: #252a2d;
  background-color: #9ce800;
}

.button {
  cursor: pointer;
  max-width: 300px;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  -webkit-appearance: none;
  box-sizing: border-box;
  text-align: center;
  text-transform: uppercase;
  border: 0;
  border-radius: 0;
  padding: 10px 20px;
  display: inline-block;
}

.login-form .info {
  margin: 16px 0 8px;
  display: block;
}

a.underline:not([class*=button]) {
  text-decoration: underline;
}

.info {
  color: #252a2d;
  margin: 1rem 0;
}

.text-mid {
  text-align: center;
}

.bold {
  font-weight: 700;
}

.login-form .join-now-text {
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 16px;
  display: block;
}

a {
  cursor: pointer;
  user-select: none;
  color: inherit;
  text-decoration: none;
}

/* Additional styles for valid/invalid inputs */
.input-field-wrapper input.valid {
  border-color: #9ce800;
  background-color: #f9ffe6;
}

.input-field-wrapper input.error {
  border-color: #ff4444;
  background-color: #fff6f6;
}

.help-text .valid-text {
  color: #9ce800;
  font-weight: bold;
}

/* Add these styles to force button full width */
.button-full {
  width: 100% !important;
  max-width: none !important;
  display: block !important;
  box-sizing: border-box !important;
}

.login-form {
  width: 100%;
}

/* Ensure form takes full width of parent */
.login-form :deep(.button-full),
.login-form .button-full {
  width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>