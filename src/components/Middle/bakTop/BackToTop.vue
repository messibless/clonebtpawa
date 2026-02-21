<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});

defineEmits(['click']);
</script>

<template>
  <div 
    v-if="visible"
    data-v-ecb5962a="" 
    class="back-to-top" 
    data-test-id="backToTopButton"
    @click="$emit('click')"
  >
    <span data-v-ecb5962a="" class="back-to-top-item">
      <svg data-v-02f45589="" data-v-ecb5962a="" class="svg-icon back-to-top-icon icon-size-medium" style="vertical-align: middle;">
        <use data-v-02f45589="" xlink:href="#icon-arrow-up"></use>
      </svg>
    </span> 
    <span data-v-ecb5962a="" class="back-to-top-item back-to-top-label">Back to top</span>
  </div>
</template>

<style lang="scss" scoped>
.back-to-top[data-v-ecb5962a] {
  cursor: pointer;
  background: rgba(25, 26, 26, .8);
  border-radius: 6px;
  padding: 6px;
  transition: opacity 0.3s, transform 0.3s;
  display: flex;
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  z-index: 1000;
}

/* Hover effect - separate rule */
.back-to-top[data-v-ecb5962a]:hover {
  background: rgba(45, 46, 46, 0.9);
  transform: translateX(-50%) scale(1.05);
}

/* Animation classes - separate rules */
.back-to-top-enter-active[data-v-ecb5962a],
.back-to-top-leave-active[data-v-ecb5962a] {
  transition: opacity 0.3s, transform 0.3s;
}

.back-to-top-enter-from[data-v-ecb5962a],
.back-to-top-leave-to[data-v-ecb5962a] {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.back-to-top-item[data-v-ecb5962a] {
  padding: 0 2px;
  display: flex;
}

svg.icon-size-medium[data-v-02f45589], 
img.icon-size-medium[data-v-02f45589] {
  width: 16px;
  height: 16px;
}

.back-to-top-icon[data-v-ecb5962a] {
  fill: #f4f5f0;
  padding: 2px 0;
}

.back-to-top-label[data-v-ecb5962a] {
  color: #f4f5f0;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}
</style>