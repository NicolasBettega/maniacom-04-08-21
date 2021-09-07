<template>
  <div id="modal" v-if="isActive">
    Modal content
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "Modal",
    props: {
      isActive: Boolean,
    },
  }
</script>


<style scoped lang="scss">
  #modal {
    background-color:#fff;
    border: solid 1px #000;
    width: 70vw;
    height:70vw;
    color: #000;
    padding:30px;
  }
</style>
