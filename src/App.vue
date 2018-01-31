<template>
  <div id="app">
    <el-container>
      <el-header>{{header}}</el-header>
      <router-view/>
    </el-container>
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
