<template>
  <div class = "content">
    <h6 style ="padding-left:1em;
    padding-top:0.5em;
    margin-bottom: 2em">Rideshare Options </h6>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">Uber</mt-tab-item>
      <mt-tab-item id="2">Lyft</mt-tab-item>
      <mt-tab-item id="3">Marta</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="Uber Pool" value ="$10-12" />
        <mt-cell title="Uberx" value ="$18-22" />
        <mt-cell title="Uber Luxury" value ="$24-28" />
        <mt-cell title="Uber Select" value ="$32-38" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell title="Lfty Line" value ="$11-22" />
        <mt-cell title="Uber Pool" value ="$25-30" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell title="Gold Line" value ="37 minutes" />
        <mt-cell title="Blue Line -> Gold Line" value = "48 minutes"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>


    <el-row style = "margin-top:10%;margin-left:40%">
      <router-link to="/select">
        <el-button type="danger" size = "large">Back</el-button>
      </router-link>
    </el-row>
  </div>

</template>

<script>
  var data = {
    selected:1,
  };
  export default {
    name: "parking-lot",
    data: function() {
      return data;
    },
  }
</script>

<style scoped>
  .mint-navbar {
    background-color: inherit;
  }
  .mint-cell {
    background-color: inherit;
  }
  .content {
    height:100%;
    width:100%;
    margin-top: 10%;
  }
  el-row {
    height:5%;
  }
</style>
