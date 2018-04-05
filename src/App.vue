<template>
  <div id="app">
    <mt-header fixed title="Airport Navigation System">
    </mt-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      header: 'Airport Navigation System',
    }
  }
}
</script>

<style>
  .mint-header {
    background-color: #23cece;
  }
  .mint-header-title {
    padding-bottom: 0;
    margin: 0;
  }
  #app {
      height:100%;
      width:100%;
      margin:0;
      padding:0;
      overflow: hidden;
  }
</style>
