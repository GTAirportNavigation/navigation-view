<template>
  <el-main>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <span class="input-label">Flight #</span>
        <el-input placeholder="Enter Your Flight #" prefix-icon="el-icon-search"></el-input>
      </div></el-col>
    </el-row>
  </el-main>
</template>

<script>
  export default {
    name: 'home',
  }
</script>

<style>
  .input-label {
    display: inline-block;
    width: 130px;
  }
</style>
