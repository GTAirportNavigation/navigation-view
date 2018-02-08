<template>
  <div id="app">
    <mt-header fixed :title="header"></mt-header>
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
    background-color: #1e7e34;
    height: 60px;
  }
</style>
