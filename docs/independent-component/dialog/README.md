# Select 下拉选择器

优点：
- 选项过多超出屏幕，能自动改变下拉方向
- 点击下拉外的内容，能自动关闭

## 源码

<template>
    <div>
        <demo-code>
            <button @click="showDialog = !showDialog">显示对话框</button>
            <cb-select
                :options="[1, 2, 3]"
                :selected="selected"
                @change="onChange"
            />
            <highlight-code slot="codeText" lang="vue">
                <template>
                    <Content slot-key="name"/>
                </template>
            </highlight-code>
        </demo-code>
        <cb-dialog v-model="showDialog" title="title"></cb-dialog>
    </div>
</template>

<script>
import CbDialog from '../../components/dialog'
import CbSelect from '../../components/select'
import DemoCode from '../../components/demo-code'
import Vue from 'vue'

Vue.use(CbDialog)

export default {
    components: {
        DemoCode,
        CbSelect
    },
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

::: slot name
<<< @/docs/components/dialog/Dialog.vue
:::

## 属性

属性名 | 说明 | 类型 |默认值
---|---|---|---
| `options` | 选项 | `Array` | `[]` |
| `selected` | 选中值，支持 `html`，为了提高通用性，请在 `change` 后自行设置 | `String` | `'请选择'` |

## 事件

事件名 | 说明 | 参数
---|---|---
`change` | 点击选项后执行 `selected` | `event`
