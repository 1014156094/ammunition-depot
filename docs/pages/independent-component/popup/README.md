# Popup 弹出层

## 示例

<template>
    <div>
        <demo-code>
          <button @click="show = !show">从中间出现</button>
          <button @click="show1 = !show1">从上方出现</button>
          <button @click="show2 = !show2">从右方出现</button>
          <button @click="show3 = !show3">从下方出现</button>
          <button @click="show4 = !show4">从左方出现</button>
          <button @click="show5 = !show5">不显示关闭按钮</button>
          <highlight-code slot="codeText" lang="vue">
              <Content slot-key="source"/>
          </highlight-code>
        </demo-code>
        <cb-popup v-model="show" title="我是标题">
          <template>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </template>
        </cb-popup>
        <cb-popup v-model="show1" title="我是标题" position="top">
          <template>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </template>
        </cb-popup>
        <cb-popup v-model="show2" title="我是标题" position="right">
          <template>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </template>
        </cb-popup>
        <cb-popup v-model="show3" title="我是标题" position="bottom">
          <template>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </template>
        </cb-popup>
        <cb-popup v-model="show4" title="我是标题" position="left">
          <template>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </template>
        </cb-popup>
        <cb-popup v-model="show5" position="bottom" :show-close-button="false">
          <template>
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
          </template>
        </cb-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
        }
    }
}
</script>

::: slot source
<<< @/docs/components/select/index.vue
:::

## 属性

名称 | 说明 | 类型 |默认值
---|---|---|---
| `v-model` | 是否显示 | `Boolean` | `false` |
| `title` | 标题 | `String` | `''` |
| `position` | 出现位置，可选值为 `top`、`right`、`bottom`、`left` | `String` | `''` |
| `showMask` | 是否显示遮罩 | `Boolean` | `true` |
| `showCloseButton` | 是否显示关闭按钮 | `Boolean` | `true` |
| `closeOnClickMask` | 是否点击遮罩后关闭 | `Boolean` | `true` |

## 插槽

名称 | 说明
---|---
默认 | 内容主体
`close` | 关闭按钮
`title` | 标题
