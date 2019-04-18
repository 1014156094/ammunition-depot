<template>
  <div class="code">
    <div class="code--title">
      <h2>{{title}}</h2>
      <small>{{description}}</small>
    </div>
    <div class="code--demo">
      <div class="code-content">
        <slot></slot>
      </div>
    </div>
    <div v-if="$slots.codeText"
         class="code--button"
         @click="handleToggleShow">{{codeTextBtn}}</div>
    <div v-if="isShow"
         class="code--segment">
      <slot name="codeText"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoCode',
  props: ['title', 'description'],
  data() {
    return {
      isShow: false,
      codeTextBtn: '显示组件源码'
    }
  },
  methods: {
    handleToggleShow() {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏组件源码' : '显示组件源码'
    }
  }
}
</script>

<style lang="less" scoped>
.code {
  .code--title {
    h2 {
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-size: 18px;
    }

    small {
      font-size: 14px;
      display: inline-block;
      margin: 10px 0;
      color: #5e6d82;
    }
  }
  .code--demo {
    border: 1px solid #ebebeb;
    border-bottom: none;
    border-radius: 3px;
    box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6),
      0 1px 2px 0 rgba(232, 237, 250, 0.5);
    .code-content {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 4%;
      border-bottom: 1px solid #ddd;
    }
  }
  .code--button {
    background: #fafbfc;
    color: #409eff;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
    &:hover {
      font-size: 17px;
    }
  }

  & + .code {
    margin-top: 40px;
  }

  &:not(:first-child) {
    margin-top: 40px;
  }
}
</style>

<style lang="less">
.code {
  .code--segment {
    .content {
      padding: 0;
      .language-vue {
        margin: 0;
      }
    }
  }
}
</style>

