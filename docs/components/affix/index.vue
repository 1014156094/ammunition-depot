<template>
  <div
    ref="container"
  >
    <div
      class="cb-affix"
      :class="{ fixed: isAffixed }"
      ref="affix"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CbAffix',
  props: {
    // 距离窗口顶部达到指定值后触发
    offsetTop: {
      type: Number,
      default: 0
    },
    // 需要监听滚动的元素
    target: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      isAffixed: false // 是否固定
    }
  },
  mounted() {
    this.getTarget().addEventListener('scroll', this.scrollHandle)
  },
  methods: {
    getTarget() {
      return (this.target && this.target()) || window
    },
    // 处理滚动
    scrollHandle(event) {
      let targetElm = this.$slots.default[0].elm
      let targetElmStyles = window.getComputedStyle(targetElm)
      let targetElmRect = targetElm.getBoundingClientRect()
      let offsetTop = this.offsetTop
        ? this.$refs.container.getBoundingClientRect().top - this.offsetTop
        : this.$refs.container.getBoundingClientRect().top

      if (offsetTop < 0 && !this.isAffixed) {
        this.$refs.container.style.height = `${targetElm.offsetHeight +
          parseInt(targetElmStyles.marginTop) +
          parseInt(targetElmStyles.marginBottom)}px`
        this.$refs.affix.style.top = `${this.offsetTop}px`
        this.$refs.affix.style.left = `${targetElmRect.left}px`
        this.$refs.affix.style.width = `${targetElm.offsetWidth}px`
        this.isAffixed = true
      }

      if (offsetTop >= 0 && this.isAffixed) {
        this.$refs.container.style.height = `initial`
        this.$refs.affix.style.top = `initial`
        this.$refs.affix.style.left = `initial`
        this.$refs.affix.style.width = `initial`
        this.isAffixed = false
      }

      this.$emit('change', this.isAffixed)
    }
  },
  beforeDestroy() {
    this.getTarget().removeEventListener('scroll', this.scrollHandle)
  }
}
</script>

<style lang="less">
.cb-affix.fixed {
  position: fixed;
  z-index: 2;
}
</style>
