<template>
<div class = "content">
<h6 style ="padding-left:1em;
padding-top:0.5em"> Select your transportation mode</h6>
  <div class = "container">
    <router-link to ="/ride_share">
    <mt-cell title="Rideshare and Marta" is-link></mt-cell>
    </router-link>
    <router-link to ="/parking_lot">
      <mt-cell title="Parking Lot" is-link></mt-cell>
    </router-link>
    <router-link to ="/rental">
    <mt-cell title = "Rental" is-link></mt-cell>
    </router-link>

  </div>
<router-link to="/main">
 <el-button type="danger" size = "large"
 style = "margin-top:5em;
 margin-left:8em">I am at the the airport</el-button>
</router-link>

</div>

</template>

<script>
    export default {
        name: "select_page"
    }
</script>

<style scoped>
  .content {
    height:100%;
    width:100%;
    margin: 0;
    padding: 0;
    margin-top: 10%;
  }
  .container {
    margin-top: 2em;
  }
.block {
    color:white;
    background-color:#04b9e6;
    height:8.5em;
}
.block h4 {
    padding-top:2em;
    padding-left:1.75em;
    font-size:1.5em;
}
  .container {

  }
</style>
