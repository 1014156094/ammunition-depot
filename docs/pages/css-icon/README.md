---
sidebar: false
---

# 纯CSS图标

<template>
    <div class="css-icon">
        <ul class="css-icon__list">
            <li class="css-icon__list__item">
                <demo-code title="关闭">
                    <!-- <div class="css-icon__list__item__label">关闭</div> -->
                    <icon-close />
                    <highlight-code slot="codeText" lang="vue">
                        <template>
                            <Content slot-key="source"/>
                        </template>
                    </highlight-code>
                </demo-code>
                <!-- <div class="css-icon__list__item__icon--container">
                    <icon-close />
                </div> -->
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.css-icon__list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-right: -2px;
    margin-bottom: -1px;
    .css-icon__list__item{
        flex: none;
        border: 1px solid #e2e2e2;
        padding: 20px;
        width: 50%;
        margin-left: -1px;
        margin-top: -1px;
        box-sizing: border-box;
        .css-icon__list__item__label{
            text-align: center;
        }
        .css-icon__list__item__icon--container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
        }
    }
}
</style>

<style lang="less">
.css-icon{
    .code-content{
        height: 40px;
    }
}
</style>

::: slot source
<<< @/docs/pages/css-icon/icon-close/index.vue
:::
