# Dialog 对话框

## 示例

<template>
    <div>
        <demo-code>
            <button @click="showDialog = !showDialog">显示</button>
            <highlight-code slot="codeText" lang="vue">
                <template>
                    <Content slot-key="source"/>
                </template>
            </highlight-code>
        </demo-code>
        <cb-dialog v-model="showDialog" title="我是标题" message="我是消息我是消息我是消息我是消息我是消息我是消息我是消息我是消息"></cb-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: '',
            showDialog: false
        }
    },
    methods: {
        onChange(event, index){
            this.selected = event.target.innerText
        }
    }
}
</script>

::: slot source
<<< @/docs/components/dialog/Dialog.vue
:::

## 插槽
| 名称 | 说明 |
|---|---|
| 默认 | 对话框主体 |
| title | 标题 |
| message | 消息 |
| buttons | 按钮 |

## 属性
| 名称 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| v-model | 是否显示对话框 | `Boolean` | `false` |
| title | 标题 | `String` | `''` |
| message | 消息 | `String` | `''` |
| show-close-button | 是否显示关闭按钮 | `Boolean` | `true` |
| show-cancel-button | 是否显示取消按钮 | `Boolean` | `false` |
| show-confirm-button | 是否显示确定按钮 | `Boolean` | `true` |
| cancel-button-text | 取消按钮文案 | `String` | `确定` |
| confirm-button-text | 确定按钮文案 | `String` | `取消` |
| close-on-click-overlay | 是否在点击蒙层后关闭 | `Boolean` | `false` |
| before-close |关闭前的回调函数 <br> 目前`action` 有 `confirm` 和 `cancel`两种 <br> 调用 `next()` 后关闭弹窗 <br> 调用 `next(false)` 阻止弹窗关闭| `(action, next) => void` | `null` |
