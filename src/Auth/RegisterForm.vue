<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ... your registration logic ...

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div>
    <form class="join-now">
      <!-- Your registration form from the first code block -->
      
      <span class="login-text">
        Already have an account? 
        <a 
          href="#" 
          class="underline bold"
          @click.prevent="goToLogin"
        >
          Log In
        </a>
      </span>
    </form>
  </div>
</template>