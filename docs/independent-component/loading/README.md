# Select 下拉选择器

优点：
- 选项过多超出屏幕，能自动改变下拉方向
- 点击下拉外的内容，能自动关闭

## 示例

<template>
    <div>
        <demo-code>
            <button @click="onShow">显示</button>
            <button @click="onClose">关闭</button>
            <highlight-code slot="codeText" lang="vue">
                <template>
                    <Content slot-key="source"/>
                </template>
            </highlight-code>
        </demo-code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
      onShow(){
        this.$loading()
      },
      onClose(){
        this.$loading().close()
      },
    },
    destroyed(){
      this.$loading().close()
    }
}
</script>

::: slot source
<<< @/docs/components/loading/Loading.vue
:::

## 属性

名称 | 说明 | 类型 |默认值
---|---|---|---
| `options` | 选项 | `Array` | `[]` |
| `selected` | 选中值，支持 `html`，为了提高通用性，请在 `change` 后自行设置 | `String` | `'请选择'` |

## 事件

名称 | 说明 | 参数
---|---|---
`change` | 点击选项后执行 `selected` | `event`
