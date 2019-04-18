
<template>
  <transition name="fade">
    <span
      v-show="show"
      :style="style"
      class="cb-toast"
      v-text="text"
    />
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      show: false,
      text: '',
      duration: 1500,
      style: ''
    }
  },
  methods: {
    resetData() {
      this.show = false
      this.text = ''
      this.duration = 1500
      this.style = ''
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.cb-toast {
  padding: 8px 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2070;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
</style>
