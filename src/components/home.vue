<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <span>Flight #</span><input placeholder="type here">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <mt-button type="default"><router-link to="/select">Search</router-link></mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
  }
</script>

<style>
  .col {
    text-align: center;
  }
</style>
