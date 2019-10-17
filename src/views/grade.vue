<template>
  <div class="test-flex">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<style scoped lang="less">
.test-flex {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  div {
    flex: 0 0 30%;
    margin: 10px 1.5%;
  }
}
</style>
