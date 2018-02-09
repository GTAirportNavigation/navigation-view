<template>
  <div id="app">
    <mt-header title="Airport Navigation System">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
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
  }
</style>
