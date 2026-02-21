<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

// ... your existing login logic ...

const goToRegister = () => {
  router.push('/register')
}
</script>

<template>
  <div>
    <form @submit.prevent="handleLogin" class="login-form">
      <!-- ... your existing login form ... -->
      
      <span class="join-now-text">
        Don't have an account? 
        <a 
          href="#" 
          class="bold underline" 
          @click.prevent="goToRegister"
        >
          Join Now
        </a>
      </span>
    </form>
  </div>
</template>