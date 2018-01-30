<template>
  <div>
      <mt-header :title="header"></mt-header>
      <mt-search cancel-text="cancel" placeholder="search"></mt-search>
      <mt-button type="large">Search</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function() {
      return {
        header: 'Airport Navigation System',
      }
    }
  }
</script>
