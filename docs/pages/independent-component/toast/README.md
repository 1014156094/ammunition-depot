# Toast 轻提示

## 示例

<template>
    <div>
        <demo-code>
          <button @click="$toast('我是轻提示！')">显示</button>
          <highlight-code slot="codeText" lang="vue">
              <Content slot-key="source"/>
          </highlight-code>
        </demo-code>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

::: slot source
<<< @/docs/components/toast/Toast.vue
:::

## 使用

引入组件后，会自动在 `Vue` 的 `prototype` 上挂载 `$toast` 方法，在所有组件内部都可以直接调用

```
export default {
  mounted() {
    this.$toast('我是轻提示！')
  }
}
```

`$toast` 方法可接受1个对象配置参数

```
export default {
  mounted() {
    this.$toast({
      show: true,
      text: '我是轻提示！',
      duration: 3000
    })
  }
}
```
