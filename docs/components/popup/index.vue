<template>
  <div>
    <transition name="cb-fade">
      <div v-show="show && showMask"
           class="cb-mask"
           @click="onMask" />
    </transition>
    <transition :name="currentTransition">
      <div class="cb-popup"
           :class="[`cb-popup--${position}`]"
           v-show="show"
           ref="CbPopup">
        <div class="cb-popup--fix-ios-scroll"
             ref="fixIosScroll">
          <div @click="onClose"
               class="cb-popup__header--container"
               v-if="title || $slots.title || showCloseButton || $slots.closeButton">
            <div class="cb-popup__header__title"
                 v-if="title || $slots.title">
              <slot name="title">
                {{ title }}
              </slot>
            </div>
            <div v-if="showCloseButton || $slots.closeButton"
                 class="cb-popup__header__close--container">
              <slot name="close">
                <div class="cb-popup__header__close"></div>
              </slot>
            </div>
          </div>

          <div class="cb-popup__content--container">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CbPopup',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    // v-model值
    value: {
      type: Boolean,
      default: false
    },
    // 出现位置
    position: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 是否显示关闭按钮
    showCloseButton: {
      type: Boolean,
      default: true
    },
    // 是否显示遮罩
    showMask: {
      type: Boolean,
      default: true
    },
    // 是否点击遮罩后关闭
    closeOnClickMask: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    value(newVal) {
      this.show = newVal
    }
  },

  updated() {
    // 解决动态内容导致无法overflow: scroll不滚动
    if (
      this.$refs.fixIosScroll.offsetHeight >
      document.documentElement.clientHeight
    ) {
      this.$refs.fixIosScroll.style.height = '100vh'
    }
  },

  data() {
    return {
      show: this.value // 可见状态
    }
  },

  computed: {
    currentTransition() {
      return this.position ? `popup-slide-${this.position}` : 'cb-fade'
    }
  },

  methods: {
    // 遮罩
    onMask() {
      if (this.closeOnClickMask) {
        this.onClose()
      }
    },
    // 关闭
    onClose(action) {
      this.show = false
      this.$emit('change', this.show)
    }
  }
}
</script>

<style lang="less">
.cb-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2044;
  background-color: rgba(0, 0, 0, 0.7);
}

.cb-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2069;
  max-height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  transform: translate(-50%, -50%);

  .cb-popup__header--container {
    position: relative;
    margin: 16px;
    text-align: center;
    .cb-popup__header__title {
      font-size: 16px;
      margin-right: 22px;
    }
    .cb-popup__header__close--container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2069;
      width: 22px;
      height: 22px;
      color: #999;
      .cb-popup__header__close {
        position: relative;
        width: 20px;
        height: 2px;
        background-color: #000;
        transform: rotate(45deg);
        border-radius: 15px;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 2px;
          background-color: #000;
          transform: rotate(90deg);
          border-radius: 15px;
        }
      }
    }
  }

  .cb-popup--fix-ios-scroll {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .cb-popup__content--container {
    margin: 16px;
  }
}

.cb-popup--top {
  width: 100%;
  top: 0;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate(-50%, 0);
}

.cb-popup--right {
  height: 100%;
  right: 0;
  top: 50%;
  bottom: auto;
  left: auto;
  transform: translate(0, -50%);
}

.cb-popup--bottom {
  width: 100%;
  top: auto;
  bottom: 0;
  right: auto;
  left: 50%;
  transform: translate(-50%, 0);
}

.cb-popup--left {
  height: 100%;
  top: 50%;
  right: auto;
  bottom: 0;
  left: 0;
  transform: translate(0, -50%);
}

.cb-fade-enter-active {
  transition: all 0.3s;
}

.cb-fade-leave-active {
  transition: all 0.3s;
}

.cb-fade-enter,
.cb-fade-leave-to {
  opacity: 0;
}

.popup-slide-top-enter,
.popup-slide-top-leave-active {
  transform: translate(-50%, -100%);
}

.popup-slide-right-enter,
.popup-slide-right-leave-active {
  transform: translate(100%, -50%);
}

.popup-slide-bottom-enter,
.popup-slide-bottom-leave-active {
  transform: translate(-50%, 100%);
}

.popup-slide-left-enter,
.popup-slide-left-leave-active {
  transform: translate(-100%, -50%);
}
</style>
