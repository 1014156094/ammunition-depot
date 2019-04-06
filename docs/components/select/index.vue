<template>
  <div
    class="cb-select--box"
    @click="show = !show"
    ref="selectBox"
  >
    <div class="cb-select__seleced">
      {{ selected || '请选择' }}
    </div>
    <Iconfont
      name="arrow-top"
      v-if="show"
    />
    <Iconfont
      name="arrow-bottom"
      v-else
    />
    <ul
      ref="selectList"
      class="cb-select__list"
      v-show="show"
    >
      <li
        class="cb-select__list__item"
        v-for="(item, index) of options"
        :key="item"
        v-html="item"
        @click="onSelect($event, index)"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CbSelect',

  props: {
    options: {
      type: Array,
      default: null
    },
    selected: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      show: false
    }
  },

  watch: {
    show(newVal) {
      if (newVal) {
        document.body.addEventListener('click', this.bodyClickHandle)
      } else {
        document.body.removeEventListener('click', this.bodyClickHandle)
      }

      this.beyondHandle()
    }
  },

  methods: {
    // 处理超出屏幕情况
    beyondHandle() {
      this.$nextTick(() => {
        // 展开会超出屏幕，则在上面显示
        if (
          this.$refs.selectBox.offsetTop -
            window.pageYOffset +
            this.$refs.selectList.offsetHeight +
            this.$refs.selectList.offsetTop >
          document.documentElement.clientHeight
        ) {
          this.$refs.selectList.classList.add('top')
        } else {
          this.$refs.selectList.classList.remove('top')
        }
      })
    },
    // 处理点击body事件
    bodyClickHandle(event) {
      if (!this.$refs.selectBox.contains(event.target)) {
        this.show = false
      }
    },
    onSelect(event, index) {
      this.$emit('change', event, index)
    }
  },

  destroyed() {
    document.body.removeEventListener('click', this.bodyClickHandle)
  }
}
</script>

<style lang="less">
.cb-select--box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: auto;
  position: relative;
  font-size: 14px;
  .cb-select__seleced {
    color: rgba(0, 0, 0, 0.65);
  }
  .icon {
    color: rgba(0, 0, 0, 0.25);
  }
  .cb-select__list {
    position: absolute;
    top: 30px;
    right: 0;
    left: 0;
    z-index: 3;
    background: #fff;
    margin: 0;
    padding: 0;
    max-height: 250px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    &.top {
      top: auto;
      bottom: 30px;
    }
    .cb-select__list__item {
      line-height: 22px;
      padding: 5px 12px;
    }
  }
}
</style>
