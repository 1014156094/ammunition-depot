
<template>
  <transition name="fade">
    <div
      v-show="show"
      class="cb-loading"
    >
      <div
        class="cb-loading__mask"
        v-show="showMask"
      />
      <div class="cb-loading__point--box">
        <div class="cb-loading__point cb-loading__point1" />
        <div class="cb-loading__point cb-loading__point2" />
        <div class="cb-loading__point cb-loading__point3" />
        <div class="cb-loading__point cb-loading__point4" />
      </div>
      <span>{{ text || '拼命加载中...' }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CbLoading',
  data() {
    return {
      showMask: false,
      show: false,
      text: '',
      duration: 0
    }
  },
  methods: {
    resetData() {
      this.showMask = false
      this.show = false
      this.text = ''
      this.duration = 0
    },
    close() {
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.cb-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  background: rgba(50, 50, 51, 0.88);
  border-radius: 4px;
  z-index: 2070;
  > .cb-loading__mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -60px 0 0 -60px;
    background: rgba(0, 0, 0, 0.7);
  }
  > .cb-loading__point--box {
    width: 60px;
    height: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: 50%;
    margin-top: -40px;
    > .cb-loading__point {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: #ff8c00;
      top: 10px;
      left: 10px;
      transform-origin: 20px 20px;
      border-radius: 8px;
      animation: spin-a 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
    }
    > .cb-loading__point2 {
      top: 10px;
      left: auto;
      right: 10px;
      transform-origin: -4px 20px;
      animation: spin-b 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
    }
    > .cb-loading__point3 {
      top: auto;
      left: auto;
      right: 10px;
      bottom: 10px;
      transform-origin: -4px -4px;
      animation: spin-c 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
    }
    > .cb-loading__point4 {
      top: auto;
      bottom: 10px;
      transform-origin: 20px -4px;
      animation: spin-d 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
    }
  }
  > span {
    width: 100px;
    height: 30px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 50%;
    margin-top: 24px;
    color: #ff8c00;
    font-size: 12px;
    text-align: center;
  }

  @keyframes spin-a {
    0% {
      transform: rotate(90deg);
    }
    0% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin-b {
    0% {
      transform: rotate(90deg);
    }
    25% {
      transform: rotate(90deg);
    }
    25% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin-c {
    0% {
      transform: rotate(90deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spin-d {
    0% {
      transform: rotate(90deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
