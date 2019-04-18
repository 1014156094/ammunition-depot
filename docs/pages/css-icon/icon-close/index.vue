<template>
  <div>
    <div class="cb-popup__header__close"></div>
  </div>
</template>

<script>
export default {
  name: 'IconClose'
}
</script>

<style lang="less" scoped>
.cb-popup__header__close {
  position: relative;
  width: 20px;
  height: 2px;
  background-color: #000;
  transform: rotate(45deg);
  border-radius: 15px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 2px;
    background-color: #000;
    transform: rotate(90deg);
    border-radius: 15px;
  }
}
</style>

