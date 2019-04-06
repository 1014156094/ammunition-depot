<template>
  <div class="cb-popop--container">
    <transition name="dialog-mask">
      <div
        class="cb-popup__mask"
        @click="onMask"
        v-show="show"
      />
    </transition>
    <transition name="dialog-bounce">
      <div
        class="cb-popup__dialog--container"
        v-show="show"
      >
        <slot>
          <div class="cb-popup__dialog__content">
            <div
              @click="handleAction('close')"
            >
              <Iconfont
                v-if="showCloseButton"
                class="cb-popup__dialog__content__close"
                name="close"
              />
            </div>

            <div
              class="cb-popup__dialog__content__title"
              v-if="title || $slots.title"
            >
              <slot name="title">
                {{ title }}
              </slot>
            </div>

            <div
              class="cb-popup__dialog__content__message"
              v-if="message || $slots.message"
            >
              <slot name="message">
                <div v-html="message" />
              </slot>
            </div>

            <div
              class="cb-popup__dialog__content__buttons"
              v-if="showCancelButton || showConfirmButton || $slots.buttons"
            >
              <slot name="buttons">
                <a
                  class="cb-popup__dialog__content__buttons__item cancel"
                  @click="handleAction('cancel')"
                  v-if="showCancelButton"
                >
                  {{ cancelButtonText }}
                </a>
                <a
                  class="cb-popup__dialog__content__buttons__item confirm"
                  @click="handleAction('confirm')"
                  v-if="showConfirmButton"
                >
                  {{ confirmButtonText }}
                </a>
              </slot>
            </div>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CbDialog',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    // v-model值
    value: {
      default: false,
      type: Boolean
    },
    // 点击蒙层时是否关闭弹窗
    closeOnClickMask: {
      default: false,
      type: Boolean
    },
    // 显示关闭按钮
    showCloseButton: {
      default: true,
      type: Boolean
    },
    // 显示取消按钮
    showCancelButton: {
      default: false,
      type: Boolean
    },
    // 显示确定按钮
    showConfirmButton: {
      default: true,
      type: Boolean
    },
    // 标题
    title: {
      default: '',
      type: String
    },
    // 消息
    message: {
      default: '',
      type: String
    },
    // 取消按钮文案
    cancelButtonText: {
      default: '取消',
      type: String
    },
    // 确定按钮文案
    confirmButtonText: {
      default: '确定',
      type: String
    },
    // 关闭之前做操作
    beforeClose: {
      default: null,
      type: Function
    }
  },
  watch: {
    value(newVal) {
      this.show = newVal
    }
  },
  data() {
    return {
      show: this.value // 可见状态
    }
  },
  methods: {
    // 遮罩
    onMask() {
      if (this.closeOnClickMask) {
        this.onClose()
      }
    },
    // 操作动作处理
    handleAction(action) {
      if (this.beforeClose) {
        /**
         * action [String] 操作动作，目前有cancel或confirm
         * next [Any] 只要为真就执行关闭
         */
        this.beforeClose(action, next => {
          if (next !== false) {
            this.onClose(action)
          }
        })
      } else {
        this.onClose(action)
      }
    },
    // 关闭
    onClose(action) {
      this.show = false
      this.$emit('change', this.show)
      this.$emit(action)
    }
  }
}
</script>

<style lang="less" scoped>
.cb-popop--container {
  display: flex;
  justify-content: center;
  align-items: center;
  .cb-popup__mask {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2001;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }

  .cb-popup__dialog--container {
    flex: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2001;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: initial;
    .cb-popup__dialog__content {
      position: relative;
      width: 85%;
      border-radius: 4px;
      background: #fff;

      .cb-popup__dialog__content__close {
        position: absolute;
        right: 20px;
        top: 20px;
        z-index: 2001;
        line-height: 20px;
        border-radius: 50%;
        text-align: center;
        color: #999;
        font-size: 22px;
        font-weight: 600;
      }

      .cb-popup__dialog__content__title {
        font-size: 16px;
        color: #333;
        text-align: center;
        font-weight: 500;
        margin: 20px;
      }

      .cb-popup__dialog__content__message {
        font-size: 14px;
        color: #333;
        line-height: 24px;
        margin: 10px 20px;
        text-align: center;
      }

      .cb-popup__dialog__content__buttons {
        display: flex;
        text-align: center;
        margin: 20px 10px;

        .cb-popup__dialog__content__buttons__item {
          flex: 1;
          height: 34px;
          line-height: 34px;
          margin: 0 10px;
          font-size: 16px;
          background: #ff7f00;
          border: 1px solid #ff7f00;
          color: #fff;
          border-radius: 18px;
          text-align: center;

          &.cancel {
            background: transparent;
            color: #999;
            border: 1px solid #999;
          }
        }
      }
    }
  }

  .dialog-mask-enter-active {
    transition: all 0.3s;
  }
  .dialog-mask-leave-active {
    transition: all 0.3s;
  }
  .dialog-mask-enter,
  .dialog-mask-leave-to {
    opacity: 0;
  }
  .dialog-bounce-enter-active {
    transition: all 0.3s;
  }
  .dialog-bounce-leave-active {
    transition: all 0.3s;
  }
  .dialog-bounce-enter {
    transform: scale(0.7);
    opacity: 0;
  }
  .dialog-bounce-leave-to {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style>
