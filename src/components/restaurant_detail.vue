<template>
  <el-container>
    <el-main style="padding: 0; text-align: left;">
      <el-row style="margin-top: 2em; text-align: center">
        <img :src="require('./../assets/fiveguys.jpg')" width="80%"/>
      </el-row>
      <el-row>
        Yelp Rating: {{score}} / 5
      </el-row>
      <el-row>
        Located: {{location}}
      </el-row>
      <el-row style="text-align: center">
        <el-col :span="11"><el-button class="cancel-button">Cancel</el-button></el-col>
        <el-col :span="13"><el-button class="start-button">Start</el-button></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
    var data = {
      score: 3.5,
      location: 'Located near Gate 45'
    };

    export default {
      name: "restaurant_detail",
      data: function() {
        return data;
      }
    }
</script>

<style scoped>
  .el-row {
    margin-top: 1em;
    padding: 1em;
  }

  .cancel-button {
    color: white;
    background-color: orangered;
    border: orangered;
  }

  .start-button {
    color: white;
    background-color: dodgerblue;
    border: dodgerblue;
  }
</style>
