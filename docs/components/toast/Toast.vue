
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
      duration: 3000,
      style: ''
    }
  },
  methods: {
    resetData() {
      this.show = false
      this.text = ''
      this.duration = 3000
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
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2071;
  width: fit-content;
  min-width: 96px;
  max-width: 70%;
  padding: 8px 12px;
  transform: translate(-50%, -50%);
  white-space: pre-wrap;
  text-align: center;
  word-break: break-all;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  background-color: rgba(50, 50, 51, 0.88);
  border-radius: 4px;
}
</style>
