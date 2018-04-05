<template>
  <div class = "content">
    <h6 style ="padding-left:1em; padding-top:0.5em">Rideshare Options </h6>
    <mt-cell title="Hertz" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/hertz.png" width="28" height="28">
    </mt-cell>
    <mt-cell title="Enterprise" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/enterprise.png" width="28" height="28">
    </mt-cell>
    <mt-cell title="Avis" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/avis.png" width="28" height="28">
    </mt-cell>
    <mt-cell title="Sixt" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/sixt.png" width="28" height="28">
    </mt-cell>
    <mt-cell title="National Car Rental" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/national.png" width="28" height="28">
    </mt-cell>
    <mt-cell title="ACE Rent a Car" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/ace.jpg" width="28" height="28">
    </mt-cell>
    <mt-cell title="Alamo Rent a Car" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/alamro.png" width="28" height="28">
    </mt-cell>
    <mt-cell title="Zip Car" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/zipcar.png" width="28" height="28">
    </mt-cell>
    <mt-cell title="Budget Car Rental" value = "Car Center Pkwy">
      <img slot="icon" src="../assets/budget.png" width="28" height="28">
    </mt-cell>


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
    padding-left:0.5em;
    margin-top: 0.5em;
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
